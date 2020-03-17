import React, { Component } from "react";
import api from "../../../service/http";
import Pagination from "react-js-pagination";

import "./home-page.css";
import ContactList from "../../contact-list";
import NoData from "../../no-data";
import Spinner from "../../spinner";

class HomePage extends Component {
  state = {
    loading: true,
    content: [],
    totalElements: 0,
    page: 1,
    count: 20
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    if (prevState.page !== this.state.page || prevProps.query !== query) {
      this.getData();
    }
  }

  getData = () => {
    this.setState({ loading: true, content: [] });

    const { page, count } = this.state;
    const { query } = this.props;

    api.contacts
      .all(page, count, query)
      .then(({ content, totalElements }) => {
        this.setState({ content, totalElements });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handlePageChange = pageNumber => {
    this.setState({ page: pageNumber });
  };

  render() {
    const { loading, content, totalElements, count } = this.state;

    const spinner = loading ? <Spinner /> : null;

    const data =
      !loading && content.length <= 0 ? (
        <NoData />
      ) : (
        <ContactList data={content} />
      );

    return (
      <div className="home-page container">
        <div className="row">
          <div className="col">
            {spinner}
            {data}

            <div className="home-pagination">
              <div className="wrapper">
                <Pagination
                  activePage={this.state.page}
                  itemsCountPerPage={count}
                  totalItemsCount={totalElements}
                  pageRangeDisplayed={10}
                  onChange={this.handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
