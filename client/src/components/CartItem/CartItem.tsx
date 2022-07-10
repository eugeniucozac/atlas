import { useDispatch } from "react-redux";
import { remove } from "../../redux/cart";
import classes from "./CartItem.styles";

export const CartItem = ({ product }: any) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <div className={classes.imageWrapper}>
        <img src={product.src} alt={product.name} className={classes.image} />
      </div>
      <div className={classes.wrapper}>
        <div>
          <div className={classes.title}>
            <h3>{product.name}</h3>
            <p className="ml-4">${product.price}</p>
          </div>
        </div>
        <div className={classes.remove}>
          <p>Qty {product.quantity}</p>
          <div className="flex">
            <button
              type="button"
              className={classes.button}
              onClick={() => dispatch(remove(product))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
