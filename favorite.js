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
let searchString;
//debounce function
const debunce_handler=debounce(callback ,1000);
  let input_box=document.querySelector(".input-box");
  console.log(input_box);
  function callback(ele){
   let arrOfsearchedprosucts=[];
   searchString=ele.target.value
   let flag=0;
for(let ele of wishListItem){
 console.log(ele.name.toLowerCase().startsWith(searchString)||ele.brand.toLowerCase().startsWith(searchString));
 if(ele.name.toLowerCase().startsWith(searchString)||ele.brand.toLowerCase().startsWith(searchString)){
    wishlistcontainer.innerHTML="";
arrOfsearchedprosucts.push(ele);
wishlistcontainer.innerHTML="";
createcard(wishlistcontainer,arrOfsearchedprosucts,findProductInCart,findProductInFavorite,"products")
flag=1;
 }

}
console.log(flag)
if(flag===0){
    wishlistcontainer.innerHTML=""
    wishlistcontainer.innerHTML=`<div class="favorite products-page d-flex" style="  justify-content: center;justify-content: center;align-self: center;font-size: 5em;opacity: 35%;font-family: sans-serif;">No Product To Show</div>`
}
  }
  input_box.addEventListener("keyup",debunce_handler)
  function debounce(callback,delay){
   let timerid;
   return function(...args){
     clearInterval(timerid);
   
   timerid=setTimeout(()=>{
     callback(...args)

     },delay)
   }
 }

