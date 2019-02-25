import React, { Component  } from "react";

class PageSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: this.props.page
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.page}
      </React.Fragment>
    )
  }
}

export default PageSelector;