import { createcard }from "../createproductcard.js";
import { incart } from "./findproducts.js";
console.log(incart);
let isincart;
let cartcontainer=document.querySelector(".cart");
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cartcontainer.addEventListener("click", (event) => {
    console.log("hello")
    cart = cart.filter(({ _id }) => _id !== event.target.dataset.id);
    cartcontainer.innerHTML = "";
     createcard(cartcontainer,cart,incart,"cart");
      localStorage.setItem("cart", JSON.stringify(cart));
      isincart=incart(cart,event.target.dataset.key);
  });
 
createcard(cartcontainer,cart,isincart,"cart");