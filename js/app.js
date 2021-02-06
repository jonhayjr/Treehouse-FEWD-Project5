 /*Run BaguetteBox Plugin*/
 baguetteBox.run(".gallery");
 
const searchbar = document.querySelector("#search");

function captionSearch() {
    const thumbnail = document.querySelectorAll("a");
    const searchInput = searchbar.value.toLowerCase();
    for (let i= 0; i < thumbnail.length; i++) {
        let thumbnailCaption = thumbnail[i].getAttribute("data-caption");
        if (thumbnailCaption.indexOf(searchInput) >= 0) {
            thumbnail[i].style.display = "";
        } else {
            thumbnail[i].style.display = "none";
        }
    }
}

searchbar.addEventListener("keyup", captionSearch);