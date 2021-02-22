import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {QuestionCollection} from './question-collection';

const questions = require('./questions').questions;

const dimensions = [
  'leadership',
  'administration',
  'teaching',
  'knowledge',
  'wisdom',
  'prophecy',
  'discernment',
  'exhortation',
  'shepherding',
  'faith',
  'evangelism',
  'apostleship',
  'service/helps',
  'mercy',
  'giving',
  'hospitality'
];

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

  getLineLength (dimension) {
    return questions.filter((item) => item.dimension === dimension).
            reduce((accumulator, item) => {
              const value = item.value ? item.value : 0;

              return accumulator + value;
            }, 0) * 16;
  }

  getDimensionValue (dimension) {
    return questions.filter((item) => item.dimension === dimension).
      reduce((accumulator, item) => {
        const value = item.value ? item.value : 0;

        return accumulator + value;
      }, 0);
  }

  renderDimension (dimension) {
    return (
      <div>
        <label>
          <strong>
            {dimension.toUpperCase()}
          </strong>
        </label>
        <span className="value">
          {this.getDimensionValue(dimension)}
        </span>
      </div>
    );
  }

  renderScore (dimension) {
    const score = this.getDimensionValue(dimension);
    const scoreY = score * 16;
    const index = dimensions.findIndex((item) => item === dimension);
    const columnX = index * 60;
    const textX = columnX + 135;
    const textY = 501 - scoreY;
    const Y_ZERO = 784;
    // 120.5 is the X for zero
    // 500.5 is the Y for zero


    if (score > 0) {
      return (
        <React.Fragment key={index}>
          <path d={`M${129.784 + columnX},${Y_ZERO - 260.167 - scoreY} L${141.216 + columnX},${Y_ZERO - 260.167 - scoreY} C${151.506 + columnX},${Y_ZERO - 260.167 - scoreY} ${159.848 + columnX},${Y_ZERO - 268.763 - scoreY} ${159.848 + columnX},${Y_ZERO - 279.367 - scoreY} L${159.848 + columnX},${Y_ZERO - 288.967 - scoreY} C${159.848 + columnX},${Y_ZERO - 299.571 - scoreY} ${151.506 + columnX},${Y_ZERO - 308.167 - scoreY} ${141.216 + columnX},${Y_ZERO - 308.167 - scoreY} L${129.784 + columnX},${Y_ZERO - 308.167 - scoreY} C${119.494 + columnX},${Y_ZERO - 308.167 - scoreY} ${111.152 + columnX},${Y_ZERO - 299.571 - scoreY} ${111.152 + columnX},${Y_ZERO - 288.967 - scoreY} L${111.152 + columnX},${Y_ZERO - 279.367 - scoreY} C${111.152 + columnX},${Y_ZERO - 268.763 - scoreY} ${119.494 + columnX},${Y_ZERO - 260.167 - scoreY} ${129.784 + columnX},${Y_ZERO - 260.167 - scoreY} z`} fill="#FFFFFF"/>
          <path d={`M${129.784 + columnX},${Y_ZERO - 260.167 - scoreY} L${141.216 + columnX},${Y_ZERO - 260.167 - scoreY} C${151.506 + columnX},${Y_ZERO - 260.167 - scoreY} ${159.848 + columnX},${Y_ZERO - 268.763 - scoreY} ${159.848 + columnX},${Y_ZERO - 279.367 - scoreY} L${159.848 + columnX},${Y_ZERO - 288.967 - scoreY} C${159.848 + columnX},${Y_ZERO - 299.571 - scoreY} ${151.506 + columnX},${Y_ZERO - 308.167 - scoreY} ${141.216 + columnX},${Y_ZERO - 308.167 - scoreY} L${129.784 + columnX},${Y_ZERO - 308.167 - scoreY} C${119.494 + columnX},${Y_ZERO - 308.167 - scoreY} ${111.152 + columnX},${Y_ZERO - 299.571 - scoreY} ${111.152 + columnX},${Y_ZERO - 288.967 - scoreY} L${111.152 + columnX},${Y_ZERO - 279.367 - scoreY} C${111.152 + columnX},${Y_ZERO - 268.763 - scoreY} ${119.494 + columnX},${Y_ZERO - 260.167 - scoreY} ${129.784 + columnX},${Y_ZERO - 260.167 - scoreY} z`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
          <text transform={`matrix(1, 0, 0, 1, ${textX}, ${textY})`}>
            <tspan x={score < 10 ? '-6.54' : '-13.08'} y="7" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">{score}</tspan>
          </text>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={index}></React.Fragment>
    );
  }

  render () {
    return (
      <div className="spiritual-gifts-survey-wrapper">
        <QuestionCollection questions={questions}
          onChange={(question, starCount, dimension) => {
            const questionObject = questions.find((item) =>
              item.question === question.question &&
              item.dimension === dimension);

            if (questionObject) {
              question.value = starCount;
            }

            this.setState({updated: new Date()});
          }}/>
        <div className="top-margin"></div>
        <svg x="0" y="0" width="1123.818" height="691.362" viewBox="0, 0, 1123.818, 591.362">
          <g id="Layer_1" transform="translate(-36.182, -79)">
            <path d="M135.5,100.5 L135.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M120.5,500.5 L1035.5,500.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M120.5,420.5 L1035.5,420.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M120.5,340.5 L1035.5,340.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M120.5,260.5 L1035.5,260.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M120.5,180.5 L1035.5,180.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M120.5,100.5 L1035.5,100.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M195.5,100.5 L195.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M735.5,100.5 L735.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M675.5,100.5 L675.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M615.5,100.5 L615.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M555.5,100.5 L555.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M495.5,100.5 L495.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M435.5,100.5 L435.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M375.5,100.5 L375.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M315.5,100.5 L315.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M255.5,100.5 L255.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M1035.5,100.5 L1035.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M975.5,100.5 L975.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M915.5,100.5 L915.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M855.5,100.5 L855.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <path d="M795.5,100.5 L795.5,510.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
            <text transform="matrix(1, 0, 0, 1, 100.54, 492.5)">
              <tspan x="-6.54" y="7" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">0</tspan>
            </text>
            <text transform="matrix(1, 0, 0, 1, 100.54, 108)">
              <tspan x="-13.08" y="7" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">25</tspan>
            </text>
            <text transform="matrix(1, 0, 0, 1, 100.54, 180)">
              <tspan x="-13.08" y="7" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">20</tspan>
            </text>
            <text transform="matrix(1, 0, 0, 1, 100.54, 260)">
              <tspan x="-13.08" y="7" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">15</tspan>
            </text>
            <text transform="matrix(1, 0, 0, 1, 100.54, 340)">
              <tspan x="-13.08" y="7" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">10</tspan>
            </text>
            <text transform="matrix(1, 0, 0, 1, 108.29, 420)">
              <tspan x="-14.29" y="7" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">5</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 97.921, 571.739)">
              <tspan x="-62.112" y="4" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">
                LEADERSHIP
              </tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 136.181, 590.181)">
              <tspan x="-87.682" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">
                ADMINISTRATION
              </tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 229.074, 561.869)">
              <tspan x="-56.142" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">TEACHING</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 257.386, 590.181)">
              <tspan x="-38.938" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">KNOWLEDGE</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 979.819, 590.181)">
              <tspan x="-41.074" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">HOSPITALITY</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 919.819, 590.181)">
              <tspan x="23.054" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">GIVING</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 859.819, 590.181)">
              <tspan x="24.854" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">MERCY</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 800.181, 590.181)">
              <tspan x="-65.794" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">SERVICE/HELPS</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 738.819, 590.181)">
              <tspan x="-47.89" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">APOSTLESHIP</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 679.819, 590.181)">
              <tspan x="-38.098" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">EVANGELISM</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 619.819, 590.181)">
              <tspan x="33.302" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">FAITH</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 559.819, 590.181)">
              <tspan x="-55.762" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">SHEPHERDING</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 499.166, 589.529)">
              <tspan x="-53.89" y="5.712" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">EXHORTATION</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 439.819, 590.181)">
              <tspan x="-57.562" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">DISCERNMENT</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 380.819, 590.181)">
              <tspan x="-15.538" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">PROPHECY</tspan>
            </text>
            <text transform="matrix(0.707, -0.707, 0.707, 0.707, 319.819, 590.181)">
              <tspan x="5.486" y="4.789" fontFamily="PTSans-Regular" fontSize="24" fill="#333333">WISDOM</tspan>
            </text>
            <path d={`M135.5,500.5 L135.5,${500.5 - this.getLineLength('leadership')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M195.5,500.5 L195.5,${500.5 - this.getLineLength('administration')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M255.5,500.5 L255.5,${500.5 - this.getLineLength('teaching')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M315.5,500.5 L315.5,${500.5 - this.getLineLength('knowledge')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M375.5,500.5 L375.5,${500.5 - this.getLineLength('wisdom')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M435.5,500.5 L435.5,${500.5 - this.getLineLength('prophecy')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M495.5,500.5 L495.5,${500.5 - this.getLineLength('discernment')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M555.5,500.5 L555.5,${500.5 - this.getLineLength('exhortation')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M615.5,500.5 L615.5,${500.5 - this.getLineLength('shepherding')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M675.5,500.5 L675.5,${500.5 - this.getLineLength('faith')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M735.5,500.5 L735.5,${500.5 - this.getLineLength('evangelism')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M795.5,500.5 L795.5,${500.5 - this.getLineLength('apostleship')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M855.5,500.5 L855.5,${500.5 - this.getLineLength('service/helps')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M915.5,500.5 L915.5,${500.5 - this.getLineLength('mercy')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M975.5,500.5 L975.5,${500.5 - this.getLineLength('giving')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            <path d={`M1035.5,500.5 L1035.5,${500.5 - this.getLineLength('hospitality')}`} fillOpacity="0" stroke="#0000FF" strokeWidth="10"/>
            {dimensions.map((item) => this.renderScore(item))}
          </g>
        </svg>
        <div className="top-margin"></div>
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