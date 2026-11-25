// One line summing up the whole week.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Monday broke me, Tuesday billed me, and by Friday I owed the printer an apology.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
