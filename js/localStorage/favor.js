export function existingFavs() {
    const favs = localStorage.getItem("favourites");

    // console.log(favs);

    if (favs === null) {
        return [];
    } else {
        return JSON.parse(favs);
    }
}

export function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs))
}