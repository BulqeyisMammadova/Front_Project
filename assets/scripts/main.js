const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const filmType = document.getElementById("filmType");
const search = document.getElementById("search")
const mainSection = document.querySelector(".mainSection")
const serachSection = document.querySelector(".serachSection")

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});


let filterTypeFilms = [];


fetch("https://api.tvmaze.com/shows").then(res => res.json()).then(data => {

    data.forEach(film => {
        if (!filterTypeFilms.includes(film.type)) {
            filterTypeFilms.push(film.type);
        }
    });

    for (let i = 0; i < filterTypeFilms.length; i++) {
        const cards = document.createElement("div");
        cards.innerHTML = `
            <h4 class="filmText">${filterTypeFilms[i]}</h4>
            <div class="imgTitle"></div>
        `;

        filmType.appendChild(cards);

        const titleImg = cards.querySelector(".imgTitle");

        const typeOfFilm = data.filter(item => item.type == filterTypeFilms[i]);


        let start = 0;
        let end = 9;

        typeOfFilm.slice(start, end).forEach(film => {
            titleImg.innerHTML += `<a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>
                
            `;
        });


        if (typeOfFilm.length > end) {
            const addBtn = document.createElement("button")
            addBtn.textContent = "+9 Added Films"
            cards.appendChild(addBtn)
            addBtn.addEventListener("click", ()=>{
                typeOfFilm.slice(end, end +9).forEach(film => {
                    titleImg.innerHTML += `<img src="${film.image.medium}" alt="">`
                });
                end +=9
            })
        }

        

        search.addEventListener("input", (e) => {
            const currentVal = e.target.value.toLowerCase();
                   
            mainSection.style.display = currentVal == "" ? "block" : "none"
            
            serachSection.innerHTML = ""
            const filterData = data.filter(film => film.name.toLowerCase().includes(currentVal))
            if(filterData.length == 0){
                const notFound = document.createElement("div");
                notFound.textContent = "Not Found Films"
                notFound.classList.add("notFound")
                serachSection.appendChild(notFound)
            }else{
                filterData.forEach(film=>{
                    const cards = document.createElement("div")
                   cards.innerHTML += `<div class="card">
                   <a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>
                    <div>
                    <h2 class="searchName">${film.name}</h2>
                    </div>
                   </div>`
                   serachSection.appendChild(cards)
                })
            }           
        });
        
    }        
});






