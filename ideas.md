```javascript
b=["mouadziani","zakarialaoui10"]
  .map(n=>fetchdom("https://github.com/"+n))
*/ 
b.map(n=>n
  .then(e=>e.querySelector("[data-bio-text]").textContent)
  .then(e=>console.log(e))
      )
*/

Promise.all(b)
.then(es=>{
  es.map(e=>{
  const data = e.querySelector("[data-bio-text]");
  console.log(data.textContent)
  })
})

// fetchdom.all
```
