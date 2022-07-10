import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import classes from "./PageLayout.styles";

export const PageLayout = ({ children }: any) => {
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
