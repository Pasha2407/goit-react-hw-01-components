import css from './statistics.module.css'
import './stats-color.css'

const Statistics = ({stats,title}) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat_list}>
          {stats = stats.map(item => 
            <li key = {item.id} className={item.color}>
             <span className={css.label}>{item.label}</span>
             <span className={css.percentage}>{item.percentage}%</span>
            </li>
          )}
       </ul>
      </section>
    );
  };

  export default Statistics;
