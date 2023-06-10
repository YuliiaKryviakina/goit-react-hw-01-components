import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headerRow}>
        <tr className={css.valueRow}>
          <th className={css.columnHeader}>Type</th>
          <th className={css.columnHeader}>Amount</th>
          <th className={css.columnHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items &&
          items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css.valueRow}>
                <td className={css.transactionData}>{type}</td>
                <td className={css.transactionData}>{amount}</td>
                <td className={css.transactionData}>{currency}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
