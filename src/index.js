import{
    node_fetch_async,
    node_fetch_sync,
    browser_fetch_async,
    browser_fetch_sync
} from "./functions/index.js"
const fetch_async = globalThis.window ? browser_fetch_async : node_fetch_async ;
const fetch_sync = globalThis.window ? browser_fetch_sync : node_fetch_sync;
const FetchDom={
    async: async (url,options) => fetch_async(url,options),
    sync: (url) => fetch_sync(url),
    all: async (...urls) => Promise.all(urls.map(n=>fetch_async(n))),
    allSync: (...urls) =>  urls.map(url => fetch_sync(url))
}
export default FetchDom;