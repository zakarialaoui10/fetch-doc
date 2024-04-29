import { 
    fetch_async,
    fetch_sync
 } from "./functions/index.js";
const FetchDom={
    async:async (url,options) => fetch_async(url,options),
    sync:(url)=>fetch_sync(url),
    all:async ()=>{},
    allSync:()=>{}
}

// FetchDom.async("https://github.com/zakarialaoui10")
//  .then(e=>e.querySelector("[data-bio-text]").textContent)
//  .then(e=>console.log(e))

// const a=FetchDom.sync("https://github.com/zakarialaoui10")
// console.log(a.querySelector("[data-bio-text]").textContent)

export default FetchDom;