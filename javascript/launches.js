const url3 = "https://api.spacexdata.com/v4/launches"
const astroResult = document.querySelector(".astro-result")

async function getAllLaunches() {
    try {
        const response = await fetch(url3);
        const getResult = await response.json();
        createhtml(getResult);
        document.querySelector(".sortby").addEventListener("change", function (event) {
            if (event.target.value.includes("name")) {
                getResult.sort(
                    function (a, b) {
                      
                        if (a.name > b.name ) {
                            return 1;
                        } else if (a.name < b.name) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                );
            }
            if (event.target.value.includes("details")) {
                getResult.sort(
                    function (a, b) {                     
                        if (a.details > b.details ) {
                            return 1;
                        } else if (a.details < b.details) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                );
            }
            createhtml(getResult);
        })
  }
    catch (error) {
        astroResult.innerHTML = "An error occured";
    }

}
getAllLaunches();

function createhtml(json) {
    astroResult.innerHTML = "";
    for (let i = 0; i < json.length; i++) {
        if (!json[i].details) {
            continue;
        } if (i === 80) {
            break;
        }
        astroResult.innerHTML += `<div class="card">
                                    <p class= "name-one">${json[i].name}</p>
                                    <img src= "${json[i].links.patch.large}" alt= "${json[i].name}"  class= "image">
                                    <p class= "name">${json[i].details} </p>                                                                                                                                                   
                                    </div> `;  
    }
}                                  