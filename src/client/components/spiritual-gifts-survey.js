import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {QuestionCollection} from './question-collection';

const questions = [
  {
    question: 'I have the ability to organize ideas, resources, time, and people effectively.',
    dimension: 'administration'
  },
  {
    question: 'I am willing to study and prepare for the task of teaching.',
    dimension: 'teaching'
  },
  {
    question: 'I am able to relate the truths of God to specific situations.',
    dimension: 'wisdom'
  },
  {
    question: 'I have a God-given ability to help others grow in their faith.',
    dimension: 'shepherding'
  },
  {
    question: 'I possess a special ability to communicate the truth of salvation.',
    dimension: 'evangelism'
  },
  {
    question: 'I have the ability to make critical decisions when necessary.',
    dimension: 'leadership'
  },
  {
    question: 'I am sensitive to the hurts of people.',
    dimension: 'mercy'
  },
  {
    question: 'I experience joy in meeting needs through sharing possessions.',
    dimension: 'giving'
  },
  {
    question: 'I enjoy studying.',
    dimension: 'knowledge'
  },
  {
    question: 'I have delivered God’s message of warning and judgment.',
    dimension: 'prophecy'
  },
  {
    question: 'I am able to sense the true motivation of persons and movements.',
    dimension: 'discernment'
  },
  {
    question: 'I have a special ability to trust God in difficult situations.',
    dimension: 'faith'
  },
  {
    question: 'I have a strong desire to contribute to the establishment of new churches.',
    dimension: 'apostleship'
  },
  {
    question: 'I take action to meet physical and practical needs rather than merely talking about or planning to help.',
    dimension: 'service/helps'
  },
  {
    question: 'I enjoy entertaining guests in my home.',
    dimension: 'hospitality'
  },
  {
    question: 'I can adapt my guidance to fit the maturity of those working with me.',
    dimension: 'leadership'
  },
  {
    question: 'I can delegate and assign meaningful work.',
    dimension: 'administration'
  }
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

  renderDimension (dimension) {
    return (
      <div>
        <label>
          {dimension}
        </label>
        <span className="value">
          {questions.filter((item) => item.dimension === dimension).
            reduce((accumulator, item) => {
              const value = item.value ? item.value : 0;

              return accumulator + value;
            }, 0)}
        </span>
      </div>
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
        <ul className="calculator">
          <li>
            {this.renderDimension('leadership')}
          </li>
        </ul>
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