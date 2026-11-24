import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The pediatrician pressed the stethoscope to her chest, and it answered in my voice before I spoke.";

function refuse(reason: string): never {
  process.stderr.write(`${reason}\n`);
  process.exit(1);
}

if (line !== line.trim() || /[\r\n]/.test(line)) {
  refuse("line has padding or a line break");
}
if (!/^[\x20-\x7E]+$/.test(line)) {
  refuse("line is not printable ASCII");
}
if (!line.endsWith(".") || (line.match(/[.!?]/g) ?? []).length !== 1) {
  refuse("line must be one sentence ending in a single period");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR;
if (!dir) {
  refuse("MAKEFUN_OUTPUT_DIR is required");
}

const bytes = Buffer.from(line, "utf8");
const file = join(dir, "entry.txt");
writeFileSync(file, bytes);

const written = readFileSync(file);
if (!written.equals(bytes)) {
  refuse("entry.txt did not match the line");
}

const text = written.toString("utf8");
const codePoints = Array.from(text).length;
const utf16 = text.length;
const utf8 = written.length;
if (codePoints < 1 || codePoints > 200 || utf16 > 200 || utf8 > 200) {
  refuse(`conservative length over 200: code_points=${codePoints} utf16=${utf16} utf8=${utf8}`);
}

const sha256 = createHash("sha256").update(written).digest("hex");
process.stdout.write(
  `code_points=${codePoints}\nutf16=${utf16}\nutf8_bytes=${utf8}\nsha256=${sha256}\n`,
);
