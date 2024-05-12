import path from "path"
import fs from "fs"
// dir2tree
const ROOT = path.join(process.cwd(),'.');
const TARGET = path.join(process.cwd(),".");
//const Config = fs.readFileSync("fetch-doc.config.js")
console.log({
  ROOT:process.cwd(),
  TARGET,
  ConfigPath:path.join(ROOT,"fetch-doc.config.js")
})
