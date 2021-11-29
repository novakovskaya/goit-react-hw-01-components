import PropTypes from "prop-types";
import styles from "./TransactionItem.module.css";

export function TransctionItem({ type, amount, currency }) {
  return (
    <tr className={styles.tableItem}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransctionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
