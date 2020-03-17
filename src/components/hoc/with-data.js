import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = View => {
  return class extends Component {
    state = {
      data: [],
      loading: true,
      error: false
    };

    onError = e => {
      this.setState({
        error: true,
        loading: false
      });
    };

    // componentDidUpdate(prevProps) {
    //   if (prevProps.getData !== this.props.getData) {
    //     this.update();
    //   }
    // }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props
        .getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(this.onError);
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
