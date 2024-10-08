 import { createcard } from "./createproductcard.js";
import { findProductInCart,findProductInFavorite } from "./findproducts.js";
 import{ products }from "./product.js";
 
 import { createHorizontalProductCard } from "./horizontalcard.js";
 let cartcontainer=document.querySelector(".cart");
 let arr=[];
 let wishListItem=JSON.parse(localStorage.getItem("favorite"))||[];
let cnt=JSON.parse(localStorage.getItem("cnt"))||1;
console.log(document.querySelector(".cart"))
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cartcontainer.addEventListener("click", (event) => {
  
    console.log(event.target )
    cart = cart.filter(({ _id }) => _id !== event.target.dataset.id);
    
    cartcontainer.innerHTML="";
    
    
      localStorage.setItem("cart", JSON.stringify(cart));
      if(event.target.dataset.name==="add"){
        
        cnt= JSON.parse(localStorage.getItem(event.target.dataset.key))+1;
        console.log( cnt)
       
      }
      else if(event.target.dataset.name==="dec"){
        cnt=JSON.parse(localStorage.getItem(event.target.dataset.key))-1;
      console.log(cnt)
      }
      if(cnt<0)cnt=1;
      JSON.stringify(localStorage.setItem(event.target.dataset.key,cnt));
    let isProductInFav=findProductInFavorite(wishListItem,event.target.dataset.key);
     
      if(event.target.dataset.name==="Save To Wishlist" ){
        const producttoaddtofavorite=products.filter(({_id})=>_id===event.target.dataset.key);
         wishListItem=[...wishListItem ,...producttoaddtofavorite];
      localStorage.setItem(`favorite`,JSON.stringify(wishListItem));
      
      
 
    }
    else if(event.target.dataset.name==="Go To Wishlist" ) location.href="/favorite.html";
      
       
      createHorizontalProductCard(cart,cartcontainer,findProductInFavorite);
 
  });
 
// createcard(cartcontainer,cart,findProductInCart,findProductInFavorite,"cart");
const cartLength = document.querySelector(".item-count");
let arrofQuantities=cart.map((ele)=>JSON.parse(localStorage.getItem(ele._id)));
console.log(arrofQuantities);
let quantity=0;
for(let ele of arrofQuantities){
  if(ele !=null){
    quantity+=ele;
  }
}
cartLength.innerText =   quantity;

 
const productPrice = document.querySelector(".product-price");
const priceAfterDiscount = JSON.parse(localStorage.getItem("cart")).reduce(
  (acc, cur) => {
    let quantity=JSON.parse(localStorage.getItem(`${cur._id}`));
  acc+= acc +( quantity*cur.newPrice)
   return acc;
  
  },
  0
);
console.log(priceAfterDiscount);
productPrice.innerText = priceAfterDiscount;

const discount = document.querySelectorAll(".discounted-amount");

const priceBeforeDiscount = JSON.parse(localStorage.getItem("cart")).reduce(
  
  (acc, cur) =>{
    let quantity=JSON.parse(localStorage.getItem( `${cur._id}`));
 acc+= acc +quantity* cur.oldPrice;
return acc;
  },
  0
);

const discountedAmount = priceBeforeDiscount - priceAfterDiscount;
for (let element of discount) {
  element.innerText = discountedAmount;
}

const totalAmount = document.querySelector(".total-amount");
totalAmount.innerText = priceAfterDiscount - discountedAmount + 100;
 let mainInCart=document.querySelector("#placeOrder");
 console.log(mainInCart);
 mainInCart.addEventListener("click",(event)=>{
  location.href="/placeorder.html"
 })
 let bigcontainer=document.querySelector(".ele");
 if(cart.length===0){
  cartcontainer.setAttribute("style","display:hidden;");
  bigcontainer.setAttribute("style","justify-content:center;");
  createHorizontalProductCard(cart,cartcontainer,findProductInFavorite); 
 
 }
createHorizontalProductCard(cart,cartcontainer,findProductInFavorite); 
let searchString;
//debounce function
const debunce_handler=debounce(callback ,1000);
  let input_box=document.querySelector(".input-box");
  console.log(input_box);
  function callback(ele){
   let arrOfsearchedprosucts=[];
   searchString=ele.target.value
   let flag=0;
for(let ele of cart){
  console.log(ele)
 console.log(ele.name.toLowerCase().startsWith(searchString)||ele.brand.toLowerCase().startsWith(searchString));
 if(ele.name.toLowerCase().startsWith(searchString)||ele.brand.toLowerCase().startsWith(searchString)){
  cartcontainer.innerHTML="";
arrOfsearchedprosucts.push(ele);
cartcontainer.innerHTML="";
createHorizontalProductCard(arrOfsearchedprosucts,cartcontainer,findProductInFavorite);
flag=1;
 }

}
console.log(flag)
if(flag===0){
  cartcontainer.innerHTML=""
  cartcontainer.innerHTML=`<div class="favorite products-page d-flex" style="  justify-content: center;justify-content: center;align-self: center;font-size: 5em;opacity: 35%;font-family: sans-serif;">No Product To Show</div>`
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


 