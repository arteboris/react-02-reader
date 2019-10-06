import React, { Component } from 'react';
import Reader from './Reader/Reader';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import publications from '../publications';

export default class App extends Component {
  state = {
    page: 0,
  };

  handleNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handlePrevPage = () => {
    this.setState(prevState => ({
      page: prevState.page - 1,
    }));
  };

  render() {
    const { page } = this.state;
    const total = publications.length;
    return (
      <>
        <Reader items={publications} page={page} />
        <Counter page={page} total={total} />
        <Controls
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
          page={page}
          total={total}
        />
      </>
    );
  }
}
