import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postPerson} from '../../store/action-creators/person';


/**
 * Example of posting data to server
 */
class PersonPost extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  // componentDidMount () {
  //   // Code to run on Browser mounting
  // }

  handleClick () {
    const person = {
      name: this.personNameInput.value,
      age: this.personAgeInput.value
    };

    this.props.postPerson(person);
  }

  render () {
    return (
      <div className="person-post-wrapper">
        <div>
          Name:
          <input id="person-name"
                 ref={(input) => {
                      this.personNameInput = input;
                    }}
                type="text" />
        </div>
        <div>
          Age:
          <input id="person-age"
                 ref={(input) => {
                      this.personAgeInput = input;
                     }}
                 type="number" />
        </div>
        <button id="btn-person-post"
                onClick={this.handleClick.bind(this)}>
          Post Person
        </button>
      </div>
    );
  }
}

PersonPost.propTypes = {postPerson: PropTypes.func.isRequired};

/**
 * mapStateToProps maps the application state to component props
 * @param {*} state application state
 * @returns {object} mapped props
 */
function mapStateToProps () {
  return {};
}

/**
 * maps the redux store to the object props
 * @param {*} dispatch redux store
 * @returns {object} function/props object
 */
function mapDispatchToProps (dispatch) {
  return {postPerson: (person) => postPerson(dispatch, person)};
}

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(PersonPost));

export {PersonPost};