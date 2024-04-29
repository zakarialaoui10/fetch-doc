import { 
    fetch_async,
    fetch_sync
 } from "./functions/index.js";
const FetchDom={
    async: async (url,options) => fetch_async(url,options),
    sync: (url) => fetch_sync(url),
    all: async (...urls) => Promise.all(urls.map(n=>fetch_async(n))),
    allSync: (...urls) =>  urls.map(url => fetch_sync(url))
}

export default FetchDom;