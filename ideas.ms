Promise.all(b)
.then(es=>{
  es.map(e=>{
  const data = e.querySelector("[data-bio-text]");
  console.log(data.textContent)
  })
})

// fetchdom.all
