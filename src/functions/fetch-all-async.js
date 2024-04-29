import { fetch_async } from "./fetch-async.js";
const fetch_all_async = (...url) =>Promise.all(...url.map(n=>fetch_async(n)))