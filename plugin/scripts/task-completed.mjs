#!/usr/bin/env node

// src/hooks/_project.ts
import { execSync } from "node:child_process";
import { basename } from "node:path";
function resolveProject(cwd) {
  const explicit = process.env["AGENTMEMORY_PROJECT_NAME"];
  if (explicit && explicit.trim()) return explicit.trim();
  const dir = cwd && cwd.trim() ? cwd : process.cwd();
  try {
    const top = execSync("git rev-parse --show-toplevel", {
      cwd: dir,
      stdio: ["ignore", "pipe", "ignore"],
      timeout: 500
    }).toString().trim();
    if (top) return basename(top);
  } catch {
  }
  return basename(dir);
}

// src/hooks/task-completed.ts
function isSdkChildContext(payload) {
  if (process.env["AGENTMEMORY_SDK_CHILD"] === "1") return true;
  if (!payload || typeof payload !== "object") return false;
  return payload.entrypoint === "sdk-ts";
}
var REST_URL = process.env["AGENTMEMORY_URL"] || "http://localhost:3111";
var SECRET = process.env["AGENTMEMORY_SECRET"] || "";
function authHeaders() {
  const h = { "Content-Type": "application/json" };
  if (SECRET) h["Authorization"] = `Bearer ${SECRET}`;
  return h;
}
async function main() {
  let input = "";
  for await (const chunk of process.stdin) {
    input += chunk;
  }
  let data;
  try {
    data = JSON.parse(input);
  } catch {
    return;
  }
  if (isSdkChildContext(data)) return;
  const sessionId = data.session_id || "unknown";
  fetch(`${REST_URL}/agentmemory/observe`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      hookType: "task_completed",
      sessionId,
      project: resolveProject(data.cwd),
      cwd: data.cwd || process.cwd(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      data: {
        task_id: data.task_id,
        task_subject: data.task_subject,
        task_description: typeof data.task_description === "string" ? data.task_description.slice(0, 2e3) : "",
        teammate_name: data.teammate_name,
        team_name: data.team_name
      }
    }),
    signal: AbortSignal.timeout(2e3)
  }).catch(() => {
  });
  setTimeout(() => process.exit(0), 500).unref();
}
main();
