// The GPS Swears It Was a Shortcut — entry program (Node 22, no input, deterministic).
// Prints one original GPS excuse (<=200 chars) and validates the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You were late to your own wedding because I chose the scenic route — past the lake, past the closed bridge, past the 'road closed' sign I read as 'road encouraged'.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}

console.log(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
