import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/**
 * My best SpiritualGiftsSurvey reactjs component ever!
 */
class SpiritualGiftsSurvey extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  // componentDidMount () {
  //   // Code to run on Browser mounting
  // }

  render () {
    return (
      <div className="spiritual-gifts-survey-wrapper">
        SpiritualGiftsSurvey lives!
      </div>
    );
  }
}

SpiritualGiftsSurvey.propTypes = {};

/**
 * mapStateToProps maps the application state to component props
 * @param {*} state application state
 * @returns {object} mapped props
 */
function mapStateToProps (state) {
  return {};
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
                                  mapDispatchToProps)(SpiritualGiftsSurvey));

export {SpiritualGiftsSurvey};