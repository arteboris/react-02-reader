import React from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import css from './Reader.module.css';

const Reader = ({ items, page }) => {
  return (
    <div className={css.reader}>
      <Publication items={items[page]} />
    </div>
  );
};

Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  page: PropTypes.number.isRequired,
};

export default Reader;
