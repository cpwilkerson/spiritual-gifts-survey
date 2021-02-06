import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/**
 * List of posted persons
 */
class PersonList extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  // componentDidMount () {
  //   // Code to run on Browser mounting
  // }

  render () {
    return (
      <div className="person-list-wrapper">
        <ul>
          Persons
          {this.props.persons.map((person, index) =>
            <li key={index}>
              {`${person.name}-${person.age}-added ${person.stamp}`}
            </li>)}
        </ul>
      </div>
    );
  }
}

PersonList.propTypes = {persons: PropTypes.array.isRequired};

/**
 * mapStateToProps maps the application state to component props
 * @param {*} state application state
 * @returns {object} mapped props
 */
function mapStateToProps (state) {
  return {persons: state.persons};
}

/**
 * maps the redux store to the object props
 * @param {*} dispatch redux store
 * @returns {object} function/props object
 */
function mapDispatchToProps (dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(PersonList));

export {PersonList};