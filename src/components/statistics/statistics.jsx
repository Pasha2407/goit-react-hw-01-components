import './statistics.css'

const Statistics = ({stats,title}) => {
    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
    <ul className='stat-list'>
     {stats}
    </ul>
</section>
    );
  };

  export default Statistics;