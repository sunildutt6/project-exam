const url = "https://api.nasa.gov/planetary/apod?api_key=9vfzPQUSIdM973IUAEFvdg97H2W0m8sTCxAsJKjy";
const resultContainer = document.querySelector(".result")


async function pictureofTheDay() {
    try {
        const response = await fetch(url);
        const promises = await response.json();
        console.log(promises)
        resultContainer.innerHTML = `<img src= "${promises.url}" alt= "${promises.title}" class= "javascript-image" />
                                    <div>
                                        <h2 class = "subheading">${promises.title}</h2>
                                        <p class= "section-para">${promises.explanation}</p>
                                    </div>`;
    }
     catch (error) {
        resultsContainer.innerHTML = "An error occured";
}

}
pictureofTheDay();






