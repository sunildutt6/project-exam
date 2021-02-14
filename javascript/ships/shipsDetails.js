const cardDetails = document.querySelector('.container');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url7 = "https://api.spacexdata.com/v4/ships/";
const loaderContainer = document.querySelector('.loader-container');

loaderContainer.innerHTML = `<div class="loader"></div>`;

async function getDragonDetails() {
  try {
    const response = await fetch(url7 + id);
      const json = await response.json();
       
    loaderContainer.innerHTML = '';

    loaderContainer.innerHTML += `<h2 class="title">${json.name}</h2>
                                  <img class="rocket-card" src="${json.image}" alt="ship image">
                                  <h2 class="title">${json.name}</h2>
                                  <p class="card-para">Home-port: ${json.home_port}</p>`;
         
  } catch (error) {
    loaderContainer.innerHTML = ('An error occured when loading the details');
  }
}
getDragonDetails();