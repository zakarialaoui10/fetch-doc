import jsdom from 'jsdom';
const node_fetch_async= async (url = 'https://github.com/zakarialaoui10', options = {})=>{
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

export {
    node_fetch_async
}