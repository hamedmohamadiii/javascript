let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("section form input");
let searchInput = document.querySelector("form input")
let addBtn = document.querySelector("#add-form button")

list.addEventListener("click", (e) => {
    if (e.target.nodeName == "SPAN" && e.target.className == "delete-btn") {
        e.target.parentNode.remove();
    }
    if (list.children.length == 0) {
        let listempymsg = document.createElement("div")
        listempymsg.style.textAlign = "center"
        listempymsg.style.color = "#333"
        listempymsg.innerText = "your list is empty"
        listempymsg.id = "emptymsg"
        list.appendChild(listempymsg)
    }

})

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (!addInput.value) {
        return
    }
    if (document.querySelector("#emptymsg")) {
        document.querySelector("#emptymsg").remove()
    }
    list.append(creatlistitem(addInput.value))
    addInput.value = ""
})

function creatlistitem(itemValue) {
    let item = document.createElement("li")
    let title = document.createElement("span")
    let btn = document.createElement("span")

    item.className = "to-do-list"

    title.className = "title"
    title.innerText = itemValue;

    btn.className = "delete-btn"
    btn.innerText = "delete"

    item.appendChild(title)
    item.appendChild(btn)

    return item;



}


searchInput.addEventListener("input", (e) => {
 
    Array.from(list.children).forEach(element => {

        if (document.querySelector("#emptymsg")) {
            return
        }

        if (element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }

    })

})
