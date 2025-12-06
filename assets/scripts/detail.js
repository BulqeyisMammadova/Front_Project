const params = new URLSearchParams(document.location.search)
const id = params.get('id')
const detail = document.getElementById("detail")

// fetch(`https://api.tvmaze.com/shows/${id}`).then(res => res.json()).then(data => {
//     console.log(data);

//     detail.innerHTML = `
//       <div class="detailImg">
//         <img src="${data.image.medium}" alt="${data.name}">
//       </div>
//       <div class="detailText">
//         <h2>${data.name}</h2>
//         <p><span class="detailTitle">Type:</span>${data.type}</p>
//         <p><span class="detailTitle">Language:</span>${data.language}</p>
//         <p><span class="detailTitle">Genres:</span>${data.genres.join(', ')}</p>
//         <p><span class="detailTitle">Status:</span>${data.status}</p>
//         <p><span class="detailTitle">Runtime:</span>${data.runtime}</p>
//         <p><span class="detailTitle">Premiered:</span>${data.premiered}</p>
//         <p><span class="detailTitle">Rating:</span>${data.rating.average}</p>
//         <p><span class="detailTitle">Country:</span>${data.network.country?.name}</p>
//         <div class="summary"><p ><span class="detailTitle">Summary:</span>${data.summary}</p>
//         </div>
        
        
        
        
//       </div>
//     `
// })


axios.get(`https://api.tvmaze.com/shows/${id}`).then(res=>{
  detail.innerHTML = `
      <div class="detailImg">
        <img src="${res.data.image.medium}" alt="${res.data.name}">
      </div>
      <div class="detailText">
        <h2>${res.data.name}</h2>
        <p><span class="detailTitle">Type:</span>${res.data.type}</p>
        <p><span class="detailTitle">Language:</span>${res.data.language}</p>
        <p><span class="detailTitle">Genres:</span>${res.data.genres.join(', ')}</p>
        <p><span class="detailTitle">Status:</span>${res.data.status}</p>
        <p><span class="detailTitle">Runtime:</span>${res.data.runtime}</p>
        <p><span class="detailTitle">Premiered:</span>${res.data.premiered}</p>
        <p><span class="detailTitle">Rating:</span>${res.data.rating.average}</p>
        <p><span class="detailTitle">Country:</span>${res.data.network.country?.name}</p>
        <div class="summary"><p ><span class="detailTitle">Summary:</span>${res.data.summary}</p>
        </div>
        
        
        
        
      </div>
    `
}).catch(err=>{
  console.error(err)
})
