 import { products } from "../product.js";
 import { createcard }from "../createproductcard.js";
 import { incart } from "./findproducts.js";
 console.log(incart);
let productcontainer =document.querySelector("#product");
let cart=JSON.parse(localStorage.getItem ("cart"))||[];
console.log(productcontainer);



   productcontainer.addEventListener("click",(ele)=>{
      let cartbtn= ele.target  ;
  if( !incart(cart,ele.target.dataset.key )) {  

 const producttoaddtocart=products.filter(({_id})=>_id===cartbtn.dataset.key);
 cart=[...cart,...producttoaddtocart]

 
  localStorage.setItem("cart",JSON.stringify(cart));
 }
 else{
  location.href="/cart.html"
 }
   })
   createcard(productcontainer,products,incart,"products");
