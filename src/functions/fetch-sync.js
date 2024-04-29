import request from 'sync-request';
import jsdom from 'jsdom'

const preload = (url) => {
  const res = request('GET', url);
  if (res.statusCode === 200) {
    return res.getBody('utf8');
  } else {
    throw new Error(`Failed to fetch data from ${url}. Status: ${res.statusCode}`);
  }
}

function fetch_sync(url='https://github.com/zakarialaoui10'){
  const data=preload(url);
  const dom= new jsdom.JSDOM(data);
  return dom.window.document;
}

export { 
    fetch_sync
}