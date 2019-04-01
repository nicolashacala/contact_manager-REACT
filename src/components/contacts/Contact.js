import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                {showContactInfo ? (
                  <i
                    onClick={() => {
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      });
                    }}
                    className="fas fa-sort-up"
                    style={iconStyleArrow}
                  />
                ) : (
                  <i
                    onClick={() => {
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      });
                    }}
                    className="fas fa-sort-down"
                    style={iconStyleArrow}
                  />
                )}
                <i
                  className="fas fa-times"
                  style={iconStyleDel}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

const iconStyleArrow = {
  cursor: "pointer",
  color: "grey"
};
const iconStyleDel = {
  cursor: "pointer",
  float: "right",
  color: "red"
};

export default Contact;
