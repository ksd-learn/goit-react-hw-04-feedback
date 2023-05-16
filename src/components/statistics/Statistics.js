import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (
        <>
            <p className={css.statistic}>Good: {good}</p>
            <p className={css.statistic}>Neutral: {neutral}</p>
            <p className={css.statistic}>Bad: {bad}</p>
            <p className={css.statistic}>Total: {total}</p>
            <p className={css.statistic}>Positive feedback: {positivePercentage}%</p>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};