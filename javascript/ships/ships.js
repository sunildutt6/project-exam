const container = document.querySelector('.container');
const url7 = "https://api.spacexdata.com/v4/ships";
const loaderContainer = document.querySelector('.loader-container');

loaderContainer.innerHTML = `<div class="loader"></div>`;

async function getRockets() {
  try {
    const response = await fetch(url7);
      const json = await response.json(); 

    loaderContainer.innerHTML = '';

    for (let i = 0; i < json.length; i++) {
        if (!json[i].image) {
            continue;
      }       
     
      loaderContainer.innerHTML += `<a class="card" href="ships-details.html?id=${json[i].id}">
                                    <img  class = "rocket-card"src="${json[i].image}" alt="ship image">
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
