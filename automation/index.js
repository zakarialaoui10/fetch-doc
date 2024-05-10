import path from "path" 
import ZikoDb from "zikodb"
const ROOT = path.join(process.cwd(),'.');
const TARGET = path.join(process.cwd(),".");
const Config= new ZikoDb(ROOT)
console.log({
  ROOT,
  TARGET,
  Config
})
