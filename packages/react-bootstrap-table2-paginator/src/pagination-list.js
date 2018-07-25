import React from 'react';
import PropTypes from 'prop-types';

import PageButton from './page-button';

const PaginatonList = props => (
  <ul className="pagination react-bootstrap-table-page-btns-ul">
    {
      props.pages.map(pageProps => (
        <PageButton
          key={ pageProps.title }
          { ...pageProps }
          onPageChange={ props.onPageChange }
        />
      ))
    }
  </ul>
);

PaginatonList.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    page: PropTypes.node,
    active: PropTypes.bool,
    disable: PropTypes.bool,
    title: PropTypes.string
  })).isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default PaginatonList;
