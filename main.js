const rowDiv = document.querySelector("#colotInput")
const addHexcolor = document.querySelector("#addNew")
const btn = document.querySelector("#colorForm")
btn.addEventListener("submit", (event) =>{
    event.preventDefault()
})

let count = 1
addHexcolor.addEventListener("click", () =>{
    count += 1
    rowDiv.append(newHegxColor(count))

})

function newHegxColor(item) {
    const newContainerDiv = document.createElement("div")
    newContainerDiv.classList.add("col-sm")

newContainerDiv.innerHTML = `
  <label for="color-${item}" class="form-label">Hegx color</label>
<input 
 minlength="7" maxlength="7"
type="text"
class="form-control" 
id="exampleInputEmail1-${item}
name="color-${item}"
"
 >
`
return newContainerDiv
    
}
rowDiv.append(newHegxColor(count))