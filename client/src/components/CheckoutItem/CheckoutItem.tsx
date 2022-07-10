import classes from "./CheckoutItem.styles";

export const CheckoutItem = ({ product }: any) => {
  return (
    <li className={classes.item}>
      <section className={classes.wrapper}>
        <img className={classes.image} src={product.src} alt={product.name} />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className={classes.name}>{product.name}</h3>
              <p className={classes.quantity}>Qty {product.quantity}</p>
            </div>
            <div className="text-right">
              <p className={classes.price}>${product.price}</p>
            </div>
          </div>
        </div>
      </section>
    </li>
  );
};
