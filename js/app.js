 /*Run BaguetteBox Plugin*/
 baguetteBox.run(".gallery");

 /*Custom searchbar logic*/
const searchbar = document.querySelector("#search");

function captionSearch() {
    const thumbnail = document.querySelectorAll("a");
    const searchInput = searchbar.value.toLowerCase();
    for (let i= 0; i < thumbnail.length; i++) {
        let thumbnailCaption = thumbnail[i].getAttribute("data-caption").toLowerCase();
        if (thumbnailCaption.indexOf(searchInput) >= 0) {
            thumbnail[i].style.display = "";
        } else {
            thumbnail[i].style.display = "none";
        }
    }
}

searchbar.addEventListener("keyup", captionSearch);