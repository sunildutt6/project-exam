const container = document.querySelector('.container');
const url4 = "https://api.spacexdata.com/v4/rockets";
const loaderContainer = document.querySelector('.loader-container');


loaderContainer.innerHTML = `<div class="loader"></div>`;

async function getRockets() {
  try {
    const response = await fetch(url4);
    const json = await response.json();
    loaderContainer.innerHTML = '';
    for (let i = 1; i < json.length; i++) {

    loaderContainer.innerHTML += `<a class="card" href="rocket-details.html?id=${json[i].id}">
                                  <img class="rocket-card" src="${json[i].flickr_images[1]}" alt="rocket image">
                                    <div class="card-header">
                                    <p class= "details">Details</p>
                                  </div>
                                    </a>`;
    }
  } catch (error) {
   loaderContainer.innerHTML = 'An error occured.';
  }
}
getRockets();

