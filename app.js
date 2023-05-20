const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./imgs/item-1.webp",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./imgs/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./imgs/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./imgs/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./imgs/item-5.png",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./imgs/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./imgs/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./imgs/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./imgs/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./imgs/item-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const btnDisplay = document.querySelector('.btns')
const btns = document.querySelectorAll('.btns button')
const cardsDisplay = document.querySelector('.content')
const cards = document.querySelectorAll('.box')

window.addEventListener('DOMContentLoaded', () => {
    cardDisplay(menu)
    
    // Methode Two:
    /*const arrayMenu = menu.reduce((acc, item) => {
        //console.log(item.category)
       !acc.includes(item.category) ? acc.push(item.category) : ""
        return acc
    }, ["all"])


    const arrayBtns = arrayMenu.map(item => {
        return `<button class="${item}" data-category="${item}">${item}</button>`
    }).join('')

    //console.log(arrayBtns)

    btnDisplay.innerHTML = arrayBtns

    const btnsFilter = document.querySelectorAll('.btns button')
    //console.log(btnsFilter)

    btnsFilter.forEach(btn => {
        console.log(btn.dataset.category)
        btn.addEventListener('click', (e) => {
           let currentBtn = e.target.dataset.category
           //console.log(currentBtn)
           const menuFilter = menu.filter(itemFiltred => {
            return itemFiltred.category === currentBtn
           })
           //console.log(menuFilter)
           if(currentBtn === 'all') {
              cardDisplay(menu)
           } else {
            cardDisplay(menuFilter)
           }
        })
    })*/

})

// Methode One:
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let category = e.target.dataset.category

      const menuFilter = menu.filter(item => {
        return item.category === category
      })

      if(category === "all") {
        cardDisplay(menu)
      } else {
        cardDisplay(menuFilter)
      }
    })
})

// Function To Add Item From array Menu In DOM
function cardDisplay(menuItem) {
    const newCards = menuItem.map(item => {
        let {id, img, title, price, desc} = item
       
        return `<div class="box" id="${id}">
                  <img src="${img}" alt="image">
                  <div class="repa_title">
                    <div class="repa_price">
                      <h5 class="repa_name">${title}</h5>
                      <span class="price">$ ${price}</span>
                    </div>
                    <p>${desc}</p>
                  </div>
                </div>`
    }).join('')

    cardsDisplay.innerHTML = newCards
}