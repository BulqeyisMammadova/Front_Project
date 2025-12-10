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


const dropDown = document.querySelector(".dropDown")
const janrArr = []


// fetch("https://api.tvmaze.com/shows").then(res => res.json()).then(data => {

//     data.forEach(film => {
//         if (!filterTypeFilms.includes(film.type)) {
//             filterTypeFilms.push(film.type);
//         }

//         for (const g of film.genres) {
//             if(!janrArr.includes(g)) janrArr.push(g)
//         }

//     });

//         for (const janr of janrArr) {
//             dropDown.innerHTML += `<li><a href="/pages/category.html?genres=${janr}">${janr}</a></li>`
//             console.log(janr);
//         }


//     for (let i = 0; i < filterTypeFilms.length; i++) {
//         const cards = document.createElement("div");
//         cards.innerHTML = `
//             <h4 class="filmText">${filterTypeFilms[i]}</h4>
//             <div class="imgTitle"></div>
//         `;

//         filmType.appendChild(cards);

//         const titleImg = cards.querySelector(".imgTitle");

//         const typeOfFilm = data.filter(item => item.type == filterTypeFilms[i]);


//         let start = 0;
//         let end = 9;

//         typeOfFilm.slice(start, end).forEach(film => {
//             titleImg.innerHTML += `<a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>

//             `;
//         });


//         if (typeOfFilm.length > end) {
//             const addBtn = document.createElement("button")
//             addBtn.textContent = "+9 Added Films"
//             cards.appendChild(addBtn)
//             addBtn.addEventListener("click", ()=>{
//                 typeOfFilm.slice(end, end +9).forEach(film => {
//                     titleImg.innerHTML += `<a href="/pages/detail.html?id=${film.id}"><img  src="${film.image.medium}" alt=""></a>`
//                 });
//                 end +=9
//             })
//         }

// search.addEventListener("input", (e) => {
//     const searchValue = e.target.value.toLowerCase()
//     serachSection.innerHTML = ""

//     if (!searchValue) {
//         mainSection.style.display = "block"
//         return;
//     }

//     mainSection.style.display = "none"

//     const results = data.filter(film => film.name.toLowerCase().includes(searchValue));

//     if (results.length === 0) {
//         const notFound = document.createElement("div");
//         notFound.textContent = "Not Found Films";
//         notFound.classList.add("notFound");
//         serachSection.appendChild(notFound);
//     } else {
//         results.forEach(film => {
//             const card = document.createElement("div");
//             card.classList.add("card");
//             card.innerHTML = `
//                 <a href="/pages/detail.html?id=${film.id}">
//                     <img src="${film.image.medium}" alt="">
//                 </a>
//                 <div>
//                     <h2 class="searchName">${film.name}</h2>
//                 </div>
//             `;
//             serachSection.appendChild(card);
//         });
//     }

// });




//     }        
// }).catch(err=>{
//     console.error(err)
// })






axios.get('https://api.tvmaze.com/shows')
    .then(res => {
        const data = res.data
        data.forEach(film => {
            if (!filterTypeFilms.includes(film.type)) filterTypeFilms.push(film.type);
            film.genres.forEach(g => {
                if (!janrArr.includes(g)) janrArr.push(g);
            })
        })
        janrArr.forEach(janr => {
            dropDown.innerHTML += `<li><a href="/pages/category.html?genres=${janr}">${janr}</a></li>`;
        })
        filterTypeFilms.forEach(type => {
            const cards = document.createElement("div");
            cards.innerHTML = `
                <h4 class="filmText">${type}</h4>
                <div class="imgTitle"></div>
            `
            filmType.appendChild(cards);

            const titleImg = cards.querySelector(".imgTitle");
            const typeOfFilm = data.filter(film => film.type === type);

            let start = 0;
            let end = 9;

            const renderFilms = (films) => {
                films.forEach(film => {
                    titleImg.innerHTML += `<a href="/pages/detail.html?id=${film.id}"><img src="${film.image.medium}" alt=""></a>`;
                })
            }

            renderFilms(typeOfFilm.slice(start, end))

            if (typeOfFilm.length > end) {
                const addBtn = document.createElement("button")
                addBtn.textContent = "+9 Added Films";
                cards.appendChild(addBtn);

                addBtn.addEventListener("click", () => {
                    renderFilms(typeOfFilm.slice(end, end + 9));
                    end += 9;
                    if (end >= typeOfFilm.length) addBtn.style.display = "none"
                })
            }
        })

        search.addEventListener("input", (e) => {
            const searchValue = e.target.value.toLowerCase()
            serachSection.innerHTML = ""

            if (!searchValue) {
                mainSection.style.display = "block"
                return;
            }

            mainSection.style.display = "none"

            const results = data.filter(film => film.name.toLowerCase().includes(searchValue));

            if (results.length === 0) {
                const notFound = document.createElement("div");
                notFound.textContent = "Not Found Films";
                notFound.classList.add("notFound");
                serachSection.appendChild(notFound);
            } else {
                results.forEach(film => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.classList.add("imgTitle");
                    card.innerHTML = `
                        <a href="/pages/detail.html?id=${film.id}">
                            <img src="${film.image.medium}" alt="">
                        </a>
                        <div>
                            <h2 class="searchName">${film.name}</h2>
                        </div>
                    `;
                    serachSection.appendChild(card);
                });
            }
        
        });




    })
    .catch(err => console.error(err));
