function fetchBengalCatImages() {
    const apiKey ='live_CxaCeDVACuYMOACt7wTP8LM2KwEWX1343z7LEOKlF4YftWKt0BFt7ThqZaofAcy5'
    const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCatImages(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the cat image:', error);
        })
}

function displayCatImages(images) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', image.url);
        imgElement.setAttribute('alt', 'Bengal Cat');
        imgElement.classList.add('cat-image');
        imageContainer.appendChild(imgElement);
    });
}

//fetch bengal images

window.onload = fetchBengalCatImages;