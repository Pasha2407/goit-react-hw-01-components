import css from './transaction-history.module.css'

const TransactionHistory = ({item}) => {
    return (
      <table className={css.transaction_history}>
        <thead className={css.head}> 
    <tr className={css.tr}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={css.table}>
        {item = item.map(item => 
             <tr className={css.tr} key = {item.id}>
             <td className={css.type}>{item.type}</td>
             <td className={css.amount}> {item.amount}</td>
             <td className={css.currency}>{item.currency}</td>
             </tr>
          )}
          </tbody>
      </table>
    );
  };

  export default TransactionHistory;

  