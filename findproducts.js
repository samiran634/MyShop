export function incart(element,productid){
    let isincart=element.some(({_id})=>element.length>0&&_id===productid);
    return isincart;
 
 }