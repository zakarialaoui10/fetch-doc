const jsdom = require('jsdom');
const fetch = require('node-fetch');
async function fetchdom(url='https://github.com/zakarialaoui10'){
  const data=await fetch(url)
  const html=await data.text()
  const dom= await new jsdom.JSDOM(html)
  return dom.window
}
fetchdom().then(e=>console.log(e.document.querySelector("[data-bio-text]").textContent))
