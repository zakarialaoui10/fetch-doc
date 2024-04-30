const browser_fetch_async= async (url='https://github.com/zakarialaoui10')=>{
  const data=await fetch(url)
  const html=await data.text()
  const dom= new DOMParser().parseFromString(html,'text/xml')
  return dom.documentElement
}
export{
    browser_fetch_async
}