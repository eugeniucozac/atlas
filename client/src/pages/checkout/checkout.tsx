import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchTaxes, taxesSelector } from "../../redux/taxes";
import { CheckoutItem } from "../../components/CheckoutItem";
import { CheckoutTotal } from "../../components/CheckoutTotal";
import { itemsSelector, totalSelector } from "../../redux/cart";
import { PageLayout } from "../../layouts/PageLayout";
import classes from "./checkout.styles";

export const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(itemsSelector);
  const { taxes } = useAppSelector(taxesSelector);
  const total = useAppSelector(totalSelector);

  useEffect(() => {
    dispatch(fetchTaxes());
  }, [dispatch]);

  return (
    <PageLayout>
      <section className={classes.wrapper}>
        <h2 className={classes.title}>
          Checkout - Summary ({items.length}) items
        </h2>
        <ul className={classes.items}>
          {items.map((product, iter) => (
            <CheckoutItem key={iter} product={product} />
          ))}
        </ul>
        {taxes.length && <CheckoutTotal taxes={taxes} total={total} />}
        <div className={classes.bottomWrapper}>
          <button type="button" className={classes.backButton}>
            <Link to="/">Back to shop</Link>
          </button>
          <button type="button" className={classes.paymentButton}>
            <span className={classes.continue}>Continue to</span> Payment
          </button>
        </div>
      </section>
    </PageLayout>
  );
};
