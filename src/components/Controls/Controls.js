import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ handlePrevPage, handleNextPage, page, total }) => {
  return (
    <>
      <section className={css.controls}>
        <button
          onClick={handlePrevPage}
          type="button"
          className={css.button}
          disabled={page === 0}
        >
          Назад
        </button>
        <button
          onClick={handleNextPage}
          type="button"
          className={css.button}
          disabled={page + 1 === total}
        >
          Вперед
        </button>
      </section>
    </>
  );
};

Controls.defaultProps = {
  handlePrevPage: '',
  handleNextPage: '',
};

Controls.propTypes = {
  handlePrevPage: PropTypes.func,
  handleNextPage: PropTypes.func,
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Controls;
