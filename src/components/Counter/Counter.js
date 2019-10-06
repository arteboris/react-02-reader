import React from 'react';
import PropTypes from 'prop-types';
import css from './Counter.module.css';

const Counter = ({ page, total }) => {
  return (
    <>
      <p className={css.counter}>
        {page + 1}/{total}
      </p>
    </>
  );
};

Counter.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
