import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ updateState, options }) => {
    return (
        <>
            {options.map((item, id) => 
                <button key={id} className={css.btn} onClick={() => { updateState(item) }}>{item}</button>
            )}
        </>
    )
}

FeedbackOptions.propTypes = {
    updateState: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
