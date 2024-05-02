import jsdom from 'jsdom';
import request from 'sync-request';
const fetch_async= async (url = 'https://github.com/zakarialaoui10', options = {})=>{
    try {
        const data = await fetch(url, options);
        if (!data.ok) throw new Error(`Failed to fetch: ${data.status} - ${data.statusText}`);
        const html = await data.text();
        const dom = new jsdom.JSDOM(html);
        return dom.window.document;
    } catch (error) {
        console.error('Error fetching or parsing HTML:', error.message);
        return null;
    }
}
const preload = (url) => {
  const res = request('GET', url);
  if (res.statusCode === 200) {
    return res.getBody('utf8');
  } else {
    throw new Error(`Failed to fetch data from ${url}. Status: ${res.statusCode}`);
  }
}

const fetch_sync=(url='https://github.com/zakarialaoui10')=>{
  const data=preload(url);
  const dom= new jsdom.JSDOM(data);
  return dom.window.document;
}

export{
    fetch_async,
    fetch_sync
}