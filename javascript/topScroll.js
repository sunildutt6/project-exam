const topScroll = document.querySelector(".topScroll");
topScroll.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    })
})

