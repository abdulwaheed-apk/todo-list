let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
createItem(ourField.value)
})

function createItem(x) {
  let itemText = `<li> ${x} <button onClick="deleteItem(this)">Delete</button></li>`
  ourList.insertAdjacentHTML("beforeend", itemText )
  ourField.value = ""
  ourField.focus()
}

function deleteItem(elementToDelete) {
 elementToDelete.parentElement.remove()
}