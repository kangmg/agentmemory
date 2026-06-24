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

// src/hooks/subagent-start.ts
function isSdkChildContext(payload) {
  if (process.env["AGENTMEMORY_SDK_CHILD"] === "1") return true;
  if (!payload || typeof payload !== "object") return false;
  return payload.entrypoint === "sdk-ts";
}
var REST_URL = process.env["AGENTMEMORY_URL"] || "http://localhost:3111";
var SECRET = process.env["AGENTMEMORY_SECRET"] || "";
var TIMEOUT_MS = 800;
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
  const sessionId = data.session_id || data.sessionId || "unknown";
  const agentId = data.agent_id || data.agentName;
  const agentType = data.agent_type || data.agentDisplayName || data.agentName;
  fetch(`${REST_URL}/agentmemory/observe`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      hookType: "subagent_start",
      sessionId,
      project: resolveProject(data.cwd),
      cwd: data.cwd || process.cwd(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      data: {
        agent_id: agentId,
        agent_type: agentType
      }
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS)
  }).catch(() => {
  });
  setTimeout(() => process.exit(0), 500).unref();
}
main();
