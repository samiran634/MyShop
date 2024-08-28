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
     
      if(event.target.dataset.name==="save-btn" ){
        const producttoaddtofavorite=products.filter(({_id})=>_id===event.target.dataset.key);
         wishListItem=[...wishListItem ,...producttoaddtofavorite];
      localStorage.setItem(`favorite`,JSON.stringify(wishListItem));
      
      let isProductInFav=findProductInFavorite(wishListItem,event.target.dataset.key);
      if(isProductInFav){
location.href="/favorite.html";
      }
    }
      
       
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
  (acc, cur) => acc + cur.newPrice,
  0
);
productPrice.innerText = priceAfterDiscount;

const discount = document.querySelectorAll(".discounted-amount");

const priceBeforeDiscount = JSON.parse(localStorage.getItem("cart")).reduce(
  (acc, cur) => acc + cur.oldPrice,
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
createHorizontalProductCard(cart,cartcontainer,findProductInFavorite);
 
 
 