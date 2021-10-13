//item
const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: `$13.22`,
    img: "./images/item-1.jpeg",
    desc: "While eating at a restaurant is an enjoyable and convenient occasional treat, most individuals and families prepare their meals at home."
}, {
    id: 2,
    title: "dinner double",
    category: "breakfast",
    price: `$18.79`,
    img: "./images/item-2.jpeg",
    desc: "Produce, or the term used to describe fresh fruits and vegetables, is commonly purchased by grocery store shoppers. In terms of fruit, most grocery stores offer bananas."
}, {
    id: 3,
    title: "mozzarella",
    category: "lunch",
    price: `$13.99`,
    img: "./images/item-3.jpeg",
    desc: "Depending on the grocery store, customers can purchase fruits in a few different ways. Some stores will charge a set amount per pound of fruit."
}, {
    id: 4,
    title: "pizza",
    category: "dinner",
    price: `$12.92`,
    img: "./images/item-4.jpeg",
    desc: "Vegetables, including lettuce, corn, tomatoes, onions, celery, cucumbers, mushrooms, and more are also sold at many grocery stores, and are purchased similarly."

}, {
    id: 5,
    title: "paneer tikka",
    category: "lunch",
    price: `$22.92`,
    img: "./images/item-5.jpeg",
    desc: "Vegetables, including lettuce, corn, tomatoes, onions, celery, cucumbers, mushrooms, and more are also sold at many grocery stores, and are purchased similarly to the way."
}, {
    id: 6,
    title: "kabab",
    category: "snacks",
    price: `$13.92`,
    img: "./images/item-6.jpeg",
    desc: " are. Grocery stores typically stock more vegetables than fruit at any given time, as vegetables remain fresh longer than fruits do, generally speaking."

}, {
    id: 7,
    title: "rolls",
    category: "snacks",
    price: `$44`,
    img: "./images/item-7.jpeg",
    desc: "Vegetables, d take quite a while to list everything else that today's massive grocery stores sell, but most customers take the opportunity."

}, {
    id: 8,
    title: "pepporoni paneer",
    category: "dinner",
    price: `$19.92`,
    img: "./images/item-8.jpeg",
    desc: "It'd take quite a while to list everything else that today's massive grocery stores sell, but most customers take the opportunity to shop for staples."

}, {
    id: 9,
    title: "burger",
    category: "dinner",
    price: `$18.98`,
    img: "./images/item-9.jpeg",
    desc: "Vegetables, including lettuce, corn, tomatoes, onions, celery, cucumbers, mushrooms, aples are available in prepackaged containers, but can be."
}]
const sectionCenter = document.querySelector(".section-center")
const filterBtns = document.querySelectorAll(".filter-btn")

//load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu)
        //filter items
    filterBtns.forEach(function(or1) { //applying the method for each and every item
        or1.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function(menuItem) { //passing menuItem parameter
                console.log(menuItem.category)
                if (menuItem.category === category) {
                    return menuItem
                }
            })
            console.log(menuCategory)
            if (category === "all") {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
    console.log(displayMenu)
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) { //traverse through each item of the array passed in the parameter
        // console.log(item)
        return `<article class="menu-item">
                <img src=${item.img} class="photo" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}

                    </p>
                </div>
            </article>`
    })
    displayMenu = displayMenu.join("") //join without ,
    sectionCenter.innerHTML = displayMenu
}
