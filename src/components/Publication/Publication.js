import React from 'react';
import PropTypes from 'prop-types';
import css from './Publication.module.css';

const Publication = ({ items: { title, text } }) => {
  return (
    <article className={css.publication}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
