const params = new URLSearchParams(window.location.search)
const genres= params.get("genres")
console.log(genres);

const cards = document.querySelector(".cards")
const title = document.querySelector(".title")

fetch("https://api.tvmaze.com/shows").then(res=>res.json()).then(data=>{
   const filterData = data.filter(film=> film.genres.includes(genres))
   console.log(filterData);
   title.innerHTML = genres

   filterData.forEach(film => {
    cards.innerHTML += `
                <div class="card">
                    <a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>
                    <h4 class="filmText">${film.name}</h4>
                </div>
    `
   });
})

