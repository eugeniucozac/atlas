import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchGifts, giftsSelector } from "../../redux/gifts";
import { fetchProducts, productsSelector } from "../../redux/products";
import { ProductItem } from "../../components/ProductItem";
import { PageLayout } from "../../layouts/PageLayout";
import { ProductType } from "../../type";
import classes from "./home.styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, hasErrors } = useAppSelector(productsSelector);
  const { gifts } = useAppSelector(giftsSelector);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchGifts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (hasErrors) return <p>Cannot display products...</p>;

  return (
    <PageLayout>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>Products</h2>
      </div>
      <section className={classes.products}>
        {gifts.length > 0 &&
          products.map((product: ProductType, iter: number) => (
            <ProductItem key={iter} product={product} gifts={gifts} />
          ))}
      </section>
    </PageLayout>
  );
};
