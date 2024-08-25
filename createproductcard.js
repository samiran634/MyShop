 

export const createcard=(productcontainer,products,isincart,texttype)=>{
for(let item of products){
 //cardstrature   
   const cardcontainer= document.createElement('div');
   cardcontainer.classList.add("card","card-vertical", "d-flex" ,"direction-column", "relative")
 
   productcontainer.appendChild(cardcontainer)
   const imgcontainer=document.createElement("div");
   imgcontainer.classList.add(
    "card-image-container", "relative"
   )
   const image=document.createElement("img");
   image.classList.add(
    "card-image"
   )
   image.setAttribute("src",item.img);
   image.setAttribute("alt",item.alt);
   imgcontainer.appendChild(image)
   if(item.rating>=4){
    const tag=document.createElement("small");
    tag.classList.add(
        "c-badge", "bg-primary" ,"absolute" ,"left-0"
    )
    tag.innerText="Treanding";
    imgcontainer.appendChild(tag);

   }
   cardcontainer.appendChild(imgcontainer);
   let buttonelement=document.createElement("button");
   buttonelement.classList.add("badge-close", "cursor", "absolute");
   let spanele=document.createElement("span");
   spanele.innerText="favorite"
   spanele.setAttribute("data-id",item._id);
   spanele.classList.add("material-symbols-outlined")
   buttonelement.appendChild(spanele);
   cardcontainer.appendChild(buttonelement);
//carddetails
   let carddetailes=document.createElement("div");
   carddetailes.classList.add()
   carddetailes.innerHTML="Premium Collection"
   let carddesctiption=document.createElement("div")
   let class_des=document.createElement("p");
   class_des.classList.add("card-des");
   class_des.innerText=item.name;
   let class_price=document.createElement("p");
   class_des.classList.add("card-price");
   class_price.innerText=`RS. ${item.newPrice}`;
let itembrand=document.createElement("p");
itembrand.innerText=item.brand;

   let class_pricestrikethrough=document.createElement("span");
   class_pricestrikethrough.classList.add("price-strike-through");
   class_pricestrikethrough.innerHTML=`RS.${item.oldPrice}`;
   let rating=document.createElement("span");
   rating.classList.add(
    "icon", "material-symbols-outlined" 
     
   )
   rating.innerText=`star`;
   let text=document.createElement("span");
   text.classList.add("d-inline","star");
   text.innerText=`${item.rating}`;
   rating.appendChild(text);
 class_price.appendChild(class_pricestrikethrough);
 carddesctiption.appendChild(class_des);
 carddesctiption.appendChild(itembrand);
 carddesctiption.appendChild(class_price);
 carddesctiption.appendChild(rating);
 cardcontainer.appendChild(carddetailes);
cardcontainer.appendChild(carddesctiption);
//cart button
let cartcontainer=document.createElement("div");
cartcontainer.classList.add("cta-btn");
let cartbutton=document.createElement("button");
cartbutton.classList.add("button", "btn-primary",  "cart-btn","d-flex",   "align-center", "justify-center", "gap", "cursor", "btn-margin");
cartbutton.setAttribute("data-key",item._id);
cartbutton.innerText=texttype  === "cart"
? "Remove"
: texttype === "products" && isincart
? "Go To Cart"
: "Add To Cart";
let sopeingicon=document.createElement("span");
sopeingicon.classList.add("material-symbols-outlined");
sopeingicon.setAttribute("data-key",item._id)
sopeingicon.innerText="shopping_cart";

cartbutton.appendChild(sopeingicon);
cartcontainer.appendChild(cartbutton);
cardcontainer.appendChild(cartcontainer);

 
   


}
 }

