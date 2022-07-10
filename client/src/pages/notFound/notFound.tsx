import { PageLayout } from "../../layouts/PageLayout";
import classes from "./notFound.styles";

export const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>404 Page</h2>
        <p className={classes.p}>Not Found</p>
      </div>
    </PageLayout>
  );
};
