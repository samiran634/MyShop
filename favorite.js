import { findProductInCart,findProductInFavorite } from "./findproducts.js";
import { products } from "./product.js";
import { createcard }from "../createproductcard.js";
let wishListItem=JSON.parse(localStorage.getItem("favorite"))||[];
console.log(wishListItem);
let tocart=JSON.parse(localStorage.getItem("cart"))||[];
let wishlistcontainer=document.querySelector(".favorite")
 
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
    location.href="/cart.html";
    }
    createcard(wishlistcontainer,wishListItem,findProductInCart,findProductInFavorite,"favorite");

})


createcard(wishlistcontainer,wishListItem,findProductInCart,findProductInFavorite,"favorite");