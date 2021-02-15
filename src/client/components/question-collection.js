import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Question} from './question';

/**
 * My best QuestionCollection reactjs component ever!
 */
class QuestionCollection extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  // componentDidMount () {
  //   // Code to run on Browser mounting
  // }

  renderQuestions (questions) {
    return questions.map((question, index) =>
        <React.Fragment key={index}>
          <Question question={question.question}
            dimension={question.dimension}
            onChange={(starCount, dimension) => {
              if (this.props.onChange) {
                this.props.onChange(question, starCount, dimension);
              }
            }}/>
        </React.Fragment>
      );
  }

  render () {
    return (
      <div className="question-collection-wrapper">
        {this.renderQuestions(this.props.questions)}
      </div>
    );
  }
}

QuestionCollection.propTypes = {
  questions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

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
                                  mapDispatchToProps)(QuestionCollection));

export {QuestionCollection};