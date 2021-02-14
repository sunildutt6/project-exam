const cardDetails = document.querySelector('.container');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url5 = "https://api.spacexdata.com/v4/rockets/";
const loaderContainer = document.querySelector('.loader-container');


loaderContainer.innerHTML = `<div class="loader"></div>`;

async function getRocketDetails() {
  try {
    const response = await fetch(url5 + id);
      const json = await response.json();
      
    loaderContainer.innerHTML = '';
    loaderContainer.innerHTML += `<div class="card">
                                  <h2 class="title">${json.name}</h2>
                                    <img class="rocket-card" src="${json.flickr_images[0]}" alt="rocket image">
                                      <div class="card-header">
                                        <h4 class="card-name">${json.name}</h4>
                                        <p class="card-para">Cost/Launch: ${json.cost_per_launch}</hp>
                                        <p class="card-para">Engines: ${json.second_stage.engines}</p>
                                        <p class="card-para">Material: ${json.landing_legs.material}</p>
                                        <p class="card-para">Description: ${json.description}</p>
                                      </div>
                                    </div>`;
  } catch (error) {
    cardDetails.innerHTML = 'An error occured.';
  }
}

getRocketDetails();