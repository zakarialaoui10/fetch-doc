import path, { dirname } from "path"
import fs from "fs"
const ROOT = path.join(process.cwd(),'.');
const TARGET = path.join(process.cwd(),".");
const Config = fs.readFileSync()
console.log({
  ROOT,
  dirname:path.dirname,
  TARGET,
})
