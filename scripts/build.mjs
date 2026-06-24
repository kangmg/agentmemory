#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import {
  chmodSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  rmSync,
} from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const hookEntries = [
  "src/hooks/session-start.ts",
  "src/hooks/prompt-submit.ts",
  "src/hooks/pre-tool-use.ts",
  "src/hooks/post-tool-use.ts",
  "src/hooks/post-tool-failure.ts",
  "src/hooks/pre-compact.ts",
  "src/hooks/subagent-start.ts",
  "src/hooks/subagent-stop.ts",
  "src/hooks/notification.ts",
  "src/hooks/task-completed.ts",
  "src/hooks/stop.ts",
  "src/hooks/session-end.ts",
  "src/hooks/post-commit.ts",
];

const external = [
  "@anthropic-ai/claude-agent-sdk",
  "@anthropic-ai/sdk",
  "@xenova/transformers",
  "better-sqlite3",
  "onnxruntime-node",
  "onnxruntime-web",
];

const common = {
  absWorkingDir: root,
  bundle: true,
  external,
  format: "esm",
  logLevel: "info",
  outExtension: { ".js": ".mjs" },
  platform: "node",
  target: "node18",
};

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    env: process.env,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with ${result.status}`);
  }
}

function copyIfExists(from, to) {
  const source = join(root, from);
  if (!existsSync(source)) return;
  const target = join(root, to);
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}

function cleanHookOutputs(dir) {
  for (const entry of hookEntries) {
    const name = basename(entry, ".ts");
    for (const ext of [
      ".mjs",
      ".mjs.map",
      ".js",
      ".js.map",
      ".d.ts",
      ".d.ts.map",
      ".d.mts",
      ".d.mts.map",
    ]) {
      rmSync(join(root, dir, `${name}${ext}`), { force: true });
    }
  }
}

async function bundle(entryPoint, outfile, options = {}) {
  const { executable = false, ...buildOptions } = options;
  await build({
    ...common,
    entryPoints: [entryPoint],
    outfile,
    ...buildOptions,
  });
  if (executable) chmodSync(join(root, outfile), 0o755);
}

rmSync(join(root, "dist"), { force: true, recursive: true });
mkdirSync(join(root, "dist"), { recursive: true });
cleanHookOutputs("plugin/scripts");

await bundle("src/index.ts", "dist/index.mjs", {
  banner: { js: "#!/usr/bin/env node" },
  executable: true,
  sourcemap: true,
});
await bundle("src/cli.ts", "dist/cli.mjs", { executable: true });
await bundle("src/mcp/standalone.ts", "dist/standalone.mjs", {
  executable: true,
});
await bundle("src/mcp/standalone.ts", "plugin/scripts/mcp.mjs", {
  executable: true,
});

for (const entry of hookEntries) {
  const name = basename(entry, ".ts");
  await bundle(entry, `dist/hooks/${name}.mjs`, { executable: true });
  await bundle(entry, `plugin/scripts/${name}.mjs`, { executable: true });
}

run(process.execPath, [
  join(root, "node_modules/typescript/bin/tsc"),
  "--emitDeclarationOnly",
  "--declaration",
  "--declarationMap",
  "--noCheck",
  "--outDir",
  "dist",
]);

for (const file of [
  "iii-config.yaml",
  "iii-config.docker.yaml",
  "docker-compose.yml",
  ".env.example",
]) {
  copyIfExists(file, `dist/${file}`);
}
copyIfExists("src/viewer/index.html", "dist/viewer/index.html");
copyIfExists("src/viewer/favicon.svg", "dist/viewer/favicon.svg");
