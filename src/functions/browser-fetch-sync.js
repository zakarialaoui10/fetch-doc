const preload=(url)=>{
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false); 
  xhr.send();
  if (xhr.status === 200) {
    return xhr.responseText;
  } else {
    throw new Error(`Failed to fetch data from ${url}. Status: ${xhr.status}`);
  }
}

function browser_fetch_sync(url='https://github.com/zakarialaoui10'){
  const data=preload(url);
  const dom= new DOMParser().parseFromString(data,'text/xml')
  return dom.documentElement;
}

export { 
    browser_fetch_sync
}