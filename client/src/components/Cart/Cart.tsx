import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { itemsSelector, totalSelector } from "../../redux/cart";
import { CartItem } from "../CartItem/CartItem";
import classes from "./Cart.styles";
import { CartSetType } from "../../type";

export const Cart = ({ setIsCart }: CartSetType) => {
  const { items } = useAppSelector(itemsSelector);
  const total = useAppSelector(totalSelector);

  return (
    <section className={classes.cart}>
      <div className={classes.wrapper}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col bg-gray-800 shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className={classes.title}>Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className={classes.close}
                        onClick={() => setIsCart(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      {items.length ? (
                        <ul className={classes.items}>
                          {items.map((product, iter) => (
                            <CartItem key={iter} product={product} />
                          ))}
                        </ul>
                      ) : (
                        <h2>Cart is empty!</h2>
                      )}
                    </div>
                  </div>
                </div>
                <div className={classes.footer}>
                  <div className={classes.subtotal}>
                    <p>Subtotal</p>
                    <p>${total}</p>
                  </div>
                  <p className="text-sm">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      onClick={() => setIsCart(false)}
                      className={classes.checkoutButton}
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className={classes.toShopping}>
                    <p>
                      or{" "}
                      <button type="button" className={classes.shoppingButton}>
                        <Link onClick={() => setIsCart(false)} to="/">
                          Continue Shopping
                        </Link>
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
