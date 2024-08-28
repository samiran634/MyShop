export const findProductInCart = (cart, prodId) => {
    const isProductInCart =
      cart && cart.length > 0 && cart.some(({ _id }) => _id === prodId);
    return isProductInCart;
  };
  export const findProductInFavorite=(favorite,prodId)=>{
    const isProductInFav =
    favorite && favorite.length > 0 && favorite.some(({ _id }) => _id === prodId);
  return isProductInFav;
  }