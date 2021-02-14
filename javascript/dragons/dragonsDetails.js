const cardDetails = document.querySelector('.container');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url7 = "https://api.spacexdata.com/v4/dragons/";
const loaderContainer = document.querySelector('.loader-container');

loaderContainer.innerHTML = `<div class="loader"></div>`;


async function getDragonDetails() {
  try {
    const response = await fetch(url7 + id);
      const json = await response.json();
      console.log(json)
    

    loaderContainer.innerHTML = '';

    loaderContainer.innerHTML += `<div class="card">
                                  <h2 class="title">${json.name}</h2>
                                    <img class="rocket-card" src="${json.flickr_images[2]}" alt="rocket image">
                                      <div class="card-header">        
                                        <p class="card-para">Meters: ${json.diameter.meters}</hp>
                                        <p class="card-para">Height-trunk: ${json.height_w_trunk.feet}feet</p>
                                        <p class="card-para">Orbit-duration: ${json.orbit_duration_yr}Year</p>
                                        <p class="card-para">Description: ${json.description}</p>
                                      </div>
                                    </div>`;
  } catch (error) {
    loaderContainer.innerHTML = 'An error occured.';
  }
}

getDragonDetails();