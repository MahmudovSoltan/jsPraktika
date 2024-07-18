/// FETCH API Den resim indirme

function getPhotos(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        displayPhotos(data);
    })
    .catch((error) => console.log(error));
}

function displayPhotos(photos) {
    const photosContainer = document.getElementById('photos');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.thumbnailUrl;
        img.alt = photo.title;
        photosContainer.appendChild(img);
    });
}

getPhotos("https://jsonplaceholder.typicode.com/photos");



