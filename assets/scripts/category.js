const params = new URLSearchParams(window.location.search)
const genres = params.get("genres")
console.log(genres);

const cards = document.querySelector(".cards")
const title = document.querySelector(".title")
const btn = document.querySelector(".btn")

// fetch("https://api.tvmaze.com/shows").then(res=>res.json()).then(data=>{
//    const filterData = data.filter(film=> film.genres.includes(genres))
//    console.log(filterData);
//    title.innerHTML = genres

// let start = 0;
// let end = 15;
// 
// 

//    filterData.slice(start,end).forEach(film => {
//     cards.innerHTML += `
//                 <div class="card">
//                     <a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>
//                     <h4 class="filmText">${film.name}</h4>
//                 </div>
//     `
//    });

// if (filterData.length > end) {
//     const btnAdd = document.createElement("button")
//     btnAdd.textContent = "+10 Add Cards"
//     btnAdd.classList.add("backBtn")
//     btn.appendChild(btnAdd)
//     console.log(btnAdd);

//      btnAdd.addEventListener("click",()=>{
   
//     filterData.slice(start,end+10).forEach(film => {
//         cards.innerHTML += `
//                 <div class="card">
//                     <a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>
//                     <h4 class="filmText">${film.name}</h4>
//                 </div>
//     `
//     });
//     end+=9;
// })





// })


axios.get('https://api.tvmaze.com/shows').then(res => {
    const filterData = res.data.filter(film => film.genres.includes(genres))
    title.innerHTML = genres

    let start = 0;
    let end = 15;


    filterData.slice(start,end).forEach(film => {
        cards.innerHTML += `
                <div class="card">
                    <a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>
                    <h4 class="filmText">${film.name}</h4>
                </div>
    `
    });


    if (filterData.length > end) {
        const btnAdd = document.createElement("button")
        btnAdd.textContent = "+10 Add Cards"
        btnAdd.classList.add("backBtn")
        btn.appendChild(btnAdd)
        console.log(btnAdd);

         btnAdd.addEventListener("click",()=>{
       
        filterData.slice(start,end+10).forEach(film => {
            cards.innerHTML += `
                    <div class="card">
                        <a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>
                        <h4 class="filmText">${film.name}</h4>
                    </div>
        `
        });
        end+=9;
    })

    
    }

})


