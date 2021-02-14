const url1 = "https://api.spacexdata.com/v4/company";
const companyInfo = document.querySelector(".company-info")
async function fetchInfo() {
    try {
        const response = await fetch (url1);
        const json = await response.json();
        companyInfo.innerHTML = `<div class= "company-info">
                                    <h2>${json.name}</h2>
                                    <p>${json.summary}</p>
                                    <p>Founded: In ${json.founded}</p>
                                </div>`
    }
    catch (error) {
        companyInfo.innerHTML = "An error occured";
    }
}
fetchInfo();
