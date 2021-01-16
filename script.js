const addItem_div = document.querySelector(".add-item");
const menu_div = document.querySelector(".menu");
const menuItems_div = document.querySelectorAll(".menu-item");
const item_div = document.querySelector(".item");
const todoBackground_div = document.querySelector(".todo-background");

let isPlusSign = true;

addEventListener("click", (event) => {
    secondClass = event.target.className.split(" ");
    if (event.target.className == "circle") {
        const children = event.target.children;
        children[0].classList.toggle("display-checkmark");
    }
    else if (secondClass[1] == "display-checkmark") {
        event.target.classList.toggle("display-checkmark");
    }
    else if (event.target.className == "x-background") {
        const parent = event.target.parentNode;
        parent.remove()
    }
});

addItem_div.addEventListener("click", (event) => {
    menu_div.classList.toggle("display-menu");
});

// Add click event listener for each menu item
for (let i = 0; i < menuItems_div.length; i++) {
    let menuItem_div = menuItems_div[i];
    menuItem_div.addEventListener("click", (event) => {
        let name = event.currentTarget.innerHTML;
        let clone = item_div.cloneNode(true);
        document.body.children[1].appendChild(clone);
        clone.style.display = "flex";
        clone.children[1].innerHTML = name;
    });
}

// Todo
// 1. fix hard coded stuff on line 13, 15, and 36
// 2. redo plus sight with divs and add x with animations
// 3. test scrolling with wallpaper engine