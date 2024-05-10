import path from "path"
import fs from "fs"
const ROOT = path.join(process.cwd(),'.');
const TARGET = path.join(process.cwd(),".");
const Config = fs.readFileSync("fetch-doc.config.js")
console.log({
  ROOT,
  TARGET,
  Config
})
