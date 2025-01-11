const apiParams = {
    key: "10224742-53a1a7880f946c3462445b43a",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
}

const parametersString = new URLSearchParams(apiParams).toString();

export const getImages = searchQuery => {
    return fetch(`https://pixabay.com/api/?${parametersString}&q=${searchQuery}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
};