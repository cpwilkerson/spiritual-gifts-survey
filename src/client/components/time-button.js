import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTime} from '../../store/action-creators/time';

/**
 * Button to test a rest endpoint
 */
class TimeButton extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  // componentDidMount () {
  //   // Code to run on Browser mounting
  // }

  handleClick () {
    this.props.getTime();
  }

  render () {
    return (
      <div className="time-button-wrapper"
           onClick={this.handleClick.bind(this)}>
        {JSON.stringify(this.props.time) || 'Click me'}
      </div>
    );
  }
}

TimeButton.propTypes = {
  getTime: PropTypes.func.isRequired,
  time: PropTypes.string
};

/**
 * mapStateToProps maps the application state to component props
 * @param {*} state application state
 * @returns {object} mapped props
 */
function mapStateToProps (state) {
  return {time: state.time};
}

/**
 * maps the redux store to the object props
 * @param {*} dispatch redux store
 * @returns {object} function/props object
 */
function mapDispatchToProps (dispatch) {
  return {getTime: () => getTime(dispatch)};
}

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(TimeButton));

export {TimeButton};