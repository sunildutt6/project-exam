const url2 = "https://api.spacexdata.com/v4/crew";
const astroResult = document.querySelector(".astro-result")

async function fetchInfo() {
    try {
        const response = await fetch (url2);
        const json =  await response.json();
  
        astroResult.innerHTML = "";
        for (let i = 0; i < json.length; i++) {
            if (i === 12) {
                break;
            }       
            astroResult.innerHTML += `<div class="card">
                                    <div class="image" style="background-image: url(${json[i].image});"></div>  
                                    <div class="details">
                                    <h4 class="name">${json[i].name}</h4>  
                                    <p class= "name">${json[i].agency} </p>                                                                                                                                                        
                                    </div> `;
        }
    }
    catch (error) {
          astroResult.innerHTML = "An error occured";
    }
}
fetchInfo();
