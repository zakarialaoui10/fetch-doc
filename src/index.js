import { fetch_async } from "./functions/index.js";
const FetchDom={
    async:async (url,options) => fetch_async(url,options),
    sync:()=>{},
    all:async ()=>{},
    allSync:()=>{}
}
FetchDom.async("https://github.com/zakarialaoui10")
 .then(e=>e.querySelector("[data-bio-text]").textContent)
 .then(e=>console.log(e))

export default FetchDom;