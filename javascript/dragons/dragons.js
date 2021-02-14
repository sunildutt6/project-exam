const container = document.querySelector('.container');
const url6 = "https://api.spacexdata.com/v4/dragons";
const loaderContainer = document.querySelector('.loader-container');
loaderContainer.innerHTML = `<div class="loader"></div>`;

async function getRockets() {
  try {
    const response = await fetch(url6);
      const json = await response.json();
      console.log(json)
   

    loaderContainer.innerHTML = '';

    for (let i = 0; i < json.length; i++) {
        console.log(json[i].image)
        
     
     loaderContainer.innerHTML += `<a class="card" href="dragons-details.html?id=${json[i].id}">
        <img  class = "rocket-card"src="${json[i].flickr_images[1]}" alt="rocket image">
          <div class="card-header">
          <p class= "details">Details</p>
          </div>`;
    }
  } catch (error) {
   loaderContainer.innerHTML = 'An error occured.';
  }
}

getRockets();
