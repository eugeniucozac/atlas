import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ReactChildren } from "../type";
import classes from "./PageLayout.styles";

export const PageLayout = ({ children }: ReactChildren) => {
  return (
    <div>
      <Header />
      <main>
        <section className={classes.page}>
          <div className={classes.container}> {children} </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
