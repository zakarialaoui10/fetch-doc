FetchDom is a JavaScript module for fetching and parsing HTML documents asynchronously and synchronously.

# Installation
 You can install FetchDom via npm :
 ```bash
  npm i @ziko/fetch-dom
 ```
# Usage 
## Asynchronous Fetch and Parse
To perform an asynchronous fetch and parse of an HTML document :
```js
import FetchDom from "@ziko/fetch-dom"
FetchDom.async("https://github.com/zakarialaoui10")
 .then(e=>e.querySelector("[data-bio-text]").textContent)
 .then(e=>console.log(e))
``` 
## Synchronous Fetch and Parse
To perform an asynchronous fetch and parse of an HTML document :
```js
import FetchDom from "@ziko/fetch-dom"
const dcument=FetchDom.sync("https://github.com/zakarialaoui10")
console.log(document.querySelector("[data-bio-text]").textContent)
``` 
## Fetch and Parse All Asynchronously
To fetch and parse multiple HTML documents asynchronously :
```js
import FetchDom from "@ziko/fetch-dom"
 FetchDom.all(
    "https://github.com/zakarialaoui10",
    "https://github.com/ABDELLK-ai"
 )
  .then(e=>e.map(n=>n.querySelector("[data-bio-text]").textContent))
  .then(e=>console.log(e))
```
## Fetch and Parse All Synchronously
To fetch and parse multiple HTML documents synchronously :
```js
import FetchDom from "@ziko/fetch-dom"
 const document=FetchDom.allSync(
    "https://github.com/zakarialaoui10",
    "https://github.com/ABDELLK-ai"
)
```

# ⭐️ Show your support <a name="support"></a>

If you've found the library helpful, show your support by giving it a star! Your feedback means a lot

[![Star](https://img.shields.io/github/stars/zakarialaoui10/fetch-dom?style=social)](https://github.com/zakarialaoui10/fetch-dom)

# License 
This projet is licensed under the terms of MIT License 
<img src="https://img.shields.io/github/license/zakarialaoui10/zikojs?color=rgb%2820%2C21%2C169%29" width="100" align="right">

 