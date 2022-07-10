import { useState } from "react";
import { TaxesAndTotalType } from "../../type";
import classes from "./CheckoutTotal.styles";

export const CheckoutTotal = ({ taxes, total }: TaxesAndTotalType) => {
  const [currentTax, setCurrentTax] = useState<number | string>(
    taxes[0]?.price
  );

  return (
    <ul>
      <li className={classes.subtotal}>
        <p>Subtotal</p>
        <p>{total}</p>
      </li>
      {taxes.length ? (
        <li className={classes.subtotal}>
          <p>Tax</p>
          <p>
            <select
              value={currentTax}
              onChange={(event) => setCurrentTax(event.target.value)}
              className={classes.select}
            >
              {taxes.map((tax, iter) => (
                <option key={iter} value={tax.price}>
                  {tax.name} {tax.price}%
                </option>
              ))}
            </select>
          </p>
        </li>
      ) : null}
      <li className={classes.total}>
        <h2>Total</h2>
        <h2>{total ? total + (total / 100) * Number(currentTax) : 0}</h2>
      </li>
    </ul>
  );
};
