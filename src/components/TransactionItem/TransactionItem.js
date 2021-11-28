import PropTypes from "prop-types";
// import styles from './TransactionItem.module.css';

export function TransctionItem({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

TransctionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
