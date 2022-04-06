import React, {Component} from 'react';

class Items extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <h2>Items page</h2>

        <div className="row">
          <div className="col-md-4">
            feature 1
          </div>
          <div className="col-md-4">
            feature 2
          </div>
          <div className="col-md-4">
            feature 3
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
