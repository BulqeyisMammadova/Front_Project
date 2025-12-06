const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const filmType = document.getElementById("filmType");

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});


let filterTypeFilms = [];
let dataArr = [];

fetch("https://api.tvmaze.com/shows").then(res => res.json()).then(data => {

    data.forEach(film => {
        dataArr.push(film);
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

        const typeOfFilm = dataArr.filter(item => item.type == filterTypeFilms[i]);


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

        
        
    }        
});







