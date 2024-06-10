import {
    fetch_async as node_fetch_async,
    fetch_sync as node_fetch_sync
} from "./functions/node.js"
import {
    fetch_async as browser_fetch_async,
    fetch_sync as browser_fetch_sync
} from "./functions/browser.js"
const fetch_async = globalThis.window ? browser_fetch_async : node_fetch_async ;
const fetch_sync = globalThis.window ? browser_fetch_sync : node_fetch_sync;
const FetchDoc={
    /**
     * Asynchronously fetches HTML content from a URL using the appropriate method based on environment.
     * @param {string} url - The URL to fetch HTML from.
     * @param {object} options - Additional options for the fetch request.
     * @returns {Promise<Element>} A promise that resolves with the root element of the parsed DOM document.
     */
    async: async (url,options) => fetch_async(url,options),
    /**
     * Synchronously fetches HTML content from a URL using the appropriate method based on environment.
     * @param {string} url - The URL to fetch HTML from.
     * @returns {Element} The root element of the parsed DOM document.
     */
    sync: (url) => fetch_sync(url),
    /**
     * Asynchronously fetches HTML content from multiple URLs using the appropriate method based on environment.
     * @param {...string[]} urls - An array of URLs to fetch HTML from.
     * @returns {Promise<Element[]>} A promise that resolves with an array of root elements of the parsed DOM documents.
     */
    all: async (...urls) => Promise.all(urls.map(n=>fetch_async(n))),
    /**
     * Synchronously fetches HTML content from multiple URLs using the appropriate method based on environment.
     * @param {...string[]} urls - An array of URLs to fetch HTML from.
     * @returns {Element[]} An array of root elements of the parsed DOM documents.
     */
    allSync: (...urls) =>  urls.map(url => fetch_sync(url))
}
FetchDoc.async("https://github.com/sindresorhus?tab=sponsoring")
  .then(e=>[...e.querySelectorAll("#user-profile-frame > div > div > div > div span.Link--secondary")])
  .then(e=>e.map(n=>n.textContent))
  .then(e=>console.log(e))

// const doc= FetchDoc.sync("https://github.com/sindresorhus?tab=sponsoring")
// const el=[...doc.querySelectorAll("#user-profile-frame > div > div > div > div span.Link--secondary")].map(n=>n.textContent)

export default FetchDoc;
