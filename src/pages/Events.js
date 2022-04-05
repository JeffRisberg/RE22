import React, { Component } from 'react';

class Events extends Component {

render() {
    return (
        <div className={this.props.className}>
            <h2>Events page</h2>

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

export default Events;
