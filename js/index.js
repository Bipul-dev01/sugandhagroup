// Preloader

function loaderAnimation() {
    var loader = document.querySelector("#loading")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 2200)
}

loaderAnimation()