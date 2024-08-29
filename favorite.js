import { findProductInCart,findProductInFavorite } from "./findproducts.js";
import { products } from "./product.js";
import { createcard }from "../createproductcard.js";
let wishListItem=JSON.parse(localStorage.getItem("favorite"))||[];
console.log(wishListItem);

let tocart=JSON.parse(localStorage.getItem("cart"))||[];
let wishlistcontainer=document.querySelector(".favorite")
if(wishListItem.length===0){
    wishlistcontainer.classList.remove("d-flex");

    console.log("yes")
    wishlistcontainer.innerHTML=' <div class="favorite products-page d-flex" style="  justify-content: center;justify-content: center;align-self: center;font-size: 5em;opacity: 35%;font-family: sans-serif;">No Product To Show</div> '
}
wishlistcontainer.addEventListener("click",(event)=>{
    console.log(event.target.dataset);
    
    wishListItem=wishListItem.filter(({_id})=>_id!==event.target.dataset.id);
    wishlistcontainer.innerHTML="";
    localStorage.setItem("favorite",JSON.stringify(wishListItem));
    if(event.target.dataset.name==="Add To Cart")
    {    
    const producttoaddtocart=products.filter(({_id})=>_id===event.target.dataset.key);
    tocart=[...tocart ,...producttoaddtocart];
    }
    localStorage.setItem("cart",JSON.stringify(tocart));
    //to add items in favorite
    let isProductInCart=findProductInCart( tocart,event.target.dataset.key);
    if(isProductInCart){
   
    }
     if(event.target.dataset.name==="Go To Cart"){
        location.href="/cart.html";
    }
    createcard(wishlistcontainer,wishListItem,findProductInCart,findProductInFavorite,"favorite");

})


createcard(wishlistcontainer,wishListItem,findProductInCart,findProductInFavorite,"favorite");