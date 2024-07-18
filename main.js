const app = document.querySelector("#app");
const createElementUl = document.createElement("ul");
app.append(createElementUl);

fetch("https://jsonplaceholder.typicode.com/photos")
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        const liElement = document.createElement("li");
        
        // Create img element
        const imgElement = document.createElement("img");
        imgElement.src = element.thumbnailUrl;
        imgElement.alt = element.title;
        
        // Append img element to li
        liElement.append(imgElement);
        
        // Append li element to ul
        createElementUl.append(liElement);
    });
})
.catch((error) => console.log(error));


