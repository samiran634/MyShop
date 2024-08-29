 import { products } from "../product.js";
 import { createcard }from "../createproductcard.js";
 import { findProductInCart, findProductInFavorite } from "./findproducts.js";
 
 
let productcontainer =document.querySelector("#product");
 
let cart=JSON.parse(localStorage.getItem ("cart"))||[];
let wishListItem=JSON.parse(localStorage.getItem("favorite"))||[];
let filter_btn=document.querySelector(".filter-container");
 console.log(productcontainer);


 
   productcontainer.addEventListener("click",(ele)=>{
      let cartbtn= ele.target  ;
      console.log(cartbtn);
      const findproducts=findProductInCart(cart,ele.target.dataset.key);
  if( ! findproducts) {  

 const producttoaddtocart=products.filter(({_id})=>_id===cartbtn.dataset.key);
 cart=[...cart,...producttoaddtocart]
  localStorage.setItem("cart",JSON.stringify(cart));
 }
 else{
  location.href="/cart.html"
 }
 let fav_btn=ele.target.dataset.id;
 console.log(fav_btn);
 const findItemsInfav=findProductInFavorite(wishListItem,fav_btn);
 if(!findItemsInfav){
   const producttoaddtowishlist=products.filter(({_id})=>_id===fav_btn);
   wishListItem=[...wishListItem,...producttoaddtowishlist];
   localStorage.setItem("favorite",JSON.stringify(wishListItem));
 }
 else{
   location.href="/favorite.html";
 }
 

   })
   filter_btn.addEventListener("click",(event)=>{
console.log(event.target.dataset);
let filteredproducts=products.filter(({rating})=>rating>=event.target.dataset.rating);
productcontainer.innerHTML="";
createcard(productcontainer,filteredproducts,findProductInCart,findProductInFavorite,"products")

   })
 
   createcard(productcontainer,products,findProductInCart,findProductInFavorite,"products");
   let searchString;
 //debounce function
const debunce_handler=debounce(callback ,1000);
   let input_box=document.getElementById("input-box");
   console.log(input_box);
   function callback(ele){
    let arrOfsearchedprosucts=[];
    searchString=ele.target.value
 for(let ele of products){
  console.log(ele);
  if(ele.name.toLowerCase().startsWith(searchString)||ele.brand.toLowerCase().startsWith(searchString)){
    productcontainer.innerHTML="";
 arrOfsearchedprosucts.push(ele);
 productcontainer.innerHTML="";
createcard(productcontainer,arrOfsearchedprosucts,findProductInCart,findProductInFavorite,"products")
  }
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
 

   
    

