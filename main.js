let cartCount = document.querySelector(".cart-count");
let asideBar = document.querySelector("aside");
let closeIcon = document.querySelector(".fa-x");

cartCount.onclick = () => {
  asideBar.classList.toggle("open");
};
closeIcon.onclick = () => {
  asideBar.classList.toggle("open");
};
// array of items
const items = [
  {
    id: 0,
    title: "Bag 1",
    price: 15,
    img: "img/main7.jpg",
    amount: 1,
    name :1,
    
  },
  {
    id: 1,
    title: "Bag 2",
    price: 25,
    img: "img/main8.jpg",
    amount: 1,
    name:2,
  },
  {
    id: 2,
    title: "Bag 3",
    price: 10,
    img: "img/main9.jpg",
    amount: 1,
    name:3,
    
  },
  {
    id: 3,
    title: "Bag 4",
    price: 30,
    img: "img/main10.jpg",
    amount: 1,
    name:4,

  },
  {
    id: 4,
    title: "Bag 5",
    price: 100,
    img: "img/main11.jpg",
    amount: 1,
    name:5,

  },
  {
    id: 5,
    title: "Bag 6",
    price: 55,
    img: "img/main12.jpg",
    amount: 1,
    name:6,

  },
  {
    id: 6,
    title: "Bag 6",
    price: 55,
    img: "img/main12.jpg",
    amount: 1,
    name:7
  },
  {
    id: 7,
    title: "Bag 5",
    price: 100,
    img: "img/main11.jpg",
    amount: 1,
    name:8,

  },
  {
    id: 8,
    title: "Bag 1",
    price: 15,
    img: "img/main7.jpg",
    amount: 1,
    name:9,

  },
  {
    id: 9,
    title: "Bag 2",
    price: 25,
    img: "img/main8.jpg",
    amount: 1,
    name:10,

  },
  {
    id: 10,
    title: "Bag 3",
    price: 10,
    img: "img/main9.jpg",
    amount: 1,
    name:11,

  },
  {
    id: 11,
    title: "Bag 4",
    price: 30,
    img: "img/main10.jpg",
    amount: 1,
    name:12,

  },
];


// show all items
let boxs = document.querySelector(".shop .parent-boxs")
function showItems() {
  boxs.innerHTML = "";
  items.forEach((item) => {
    let itemEl = document.createElement("div");
    itemEl.classList.add("box");
    itemEl.setAttribute("data-name",item.name)
    itemEl.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <h5 class="price">${item.price}.00</h5>
    <div class="cart" data-id="${item.id}">
               <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>`;
    boxs.appendChild(itemEl);
  });
}
showItems();

// show cart items
let cartItems = [];
let cartBody = document.querySelector("tbody");
function showCart() {
  cartBody.innerHTML = "";
  cartItems.forEach(item => {
    cartEl = document.createElement("tr");
    cartEl.innerHTML = `<td>${item.id}</td>
        <td><img src="${item.img}" alt="" srcset=""></td>
        <td>${item.title}</td>
        <td>
        <span class="btn" onclick="updateCartItem('increase','${item.id
      }')">+</span>
         <span class="amount">${item.amount}</span>
         <span class="btn"  onclick="updateCartItem('decrease','${item.id
      }')">-</span>
        </td>
         <td>${item.price}.00$</td>
        <td class="all-price">${item.price * item.amount}.00$</td>
        <td> <button onclick="delteCartItem(${item.id})" > Delete </button> </td>`;
    cartBody.appendChild(cartEl);
  });
  document.querySelector(".cart-count span").innerHTML = cartItems.length;
}
showCart();



// add to cart

let btnsAdd = document.querySelectorAll(".cart");
var error = document.querySelector(".error");
var text = "";
btnsAdd.forEach((btn) => {
  btn.addEventListener("click", () => {
    let id = btn.dataset.id;
    items.find((item) => {  //like foreach
      if (item.id == id) {
        if (cartItems.some((cartItem) => cartItem.id == id)) {  //to filter items in cart
          alert("product already exist");
        } else {
          text = "Product is added successfully !";
          error.innerHTML = text;
          error.classList.add("alert-success");
          cartItems.push(item);
        }
      }
    });
    showCart();
  });
});





//  update cart


function updateCartItem(action, id) {
  cartItems.find((item) => {
    if (item.id == id) {
      if (action == 'increase') {
        item.amount += 1;
      } else {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {

          alert("Amount Must Be 1 and more than it");
        }
      }
    }
    showCart();
  });
}







// delete cart item
function delteCartItem(id) {
  cartItems = cartItems.filter((item) => item.id != id);

  text = "Product is deleted successfully !";
  error.innerHTML = text;
  error.classList.add("alert-danger");

  showCart();
}




// delete all cart 
function deleteAll() {

  text = "";
  error.classList.remove("alert");
  error.innerHTML = text;
  cartItems = [];
  showCart();
}