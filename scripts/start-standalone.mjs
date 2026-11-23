import { cp, mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const standaloneRoot = resolve(projectRoot, ".next/standalone");

await cp(resolve(projectRoot, "public"), resolve(standaloneRoot, "public"), { recursive: true, force: true });
await mkdir(resolve(standaloneRoot, ".next"), { recursive: true });
await cp(resolve(projectRoot, ".next/static"), resolve(standaloneRoot, ".next/static"), { recursive: true, force: true });

const server = spawn(process.execPath, [resolve(standaloneRoot, "server.js")], {
  cwd: standaloneRoot,
  env: process.env,
  stdio: "inherit",
});

server.on("error", (error) => {
  console.error("Could not start the standalone server:", error);
  process.exitCode = 1;
});

server.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exitCode = code ?? 1;
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.kill(signal));
}
