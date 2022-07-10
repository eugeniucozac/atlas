import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cart";
import { ProductType, ProductAndGiftsType } from "../../type";
import classes from "./ProductItem.styles";

export const ProductItem = ({ product, gifts }: ProductAndGiftsType) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [wrapping, setWrapping] = useState<boolean>(false);
  const [currentGift, setCurrentGift] = useState<string | number>(
    gifts[0]?.price
  );
  const dispatch = useDispatch();

  const handleAddToCart = (product: ProductType) => {
    const gift = wrapping ? Number(currentGift) : 0;
    dispatch(add({ ...product, gift }));
    setIsAdded(true);
    setTimeout(() => {
      setWrapping(false);
      setIsAdded(false);
    }, 3000);
  };

  return (
    <section className={classes.product}>
      <img src={product.src} alt={product.name} className={classes.image} />
      <div className={classes.wrapper}>
        <div className="space-y-2">
          <h3 className={classes.title}>{product.name}</h3>
          <p className="text-gray-100">${product.price}</p>
          {product.type === "physical" && (
            <>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={wrapping}
                  onChange={() => setWrapping(!wrapping)}
                  className={classes.gift}
                />
                <label htmlFor="remember" className="text-sm">
                  Add gift wrapping
                </label>
              </div>
              {wrapping && (
                <select
                  value={currentGift}
                  onChange={(event) => setCurrentGift(event.target.value)}
                  className={classes.select}
                >
                  {gifts.map((gift, iter) => (
                    <option key={iter} value={gift.price}>
                      {gift.name} ${gift.price}
                    </option>
                  ))}
                </select>
              )}
            </>
          )}
        </div>
        <button
          type="button"
          disabled={isAdded}
          onClick={() => handleAddToCart(product)}
          className={classes.button}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </section>
  );
};
