import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
