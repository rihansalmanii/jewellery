export const getDiscountPercentage = (originalPrice, salePrice) => {
    const discount = originalPrice - salePrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return Math.round(discountPercentage);
}