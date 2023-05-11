fetchdom('https://github.com/zakarialaoui10')
  .then(e=>e.querySelector("[data-bio-text]").textContent)
  .then(e=>console.log(e))
