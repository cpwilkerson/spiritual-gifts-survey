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
  },
  {
    question: 'I have an ability and desire to teach.',
    dimension: 'teaching'
  },
  {
    question: 'I am usually able to analyze a situation correctly.',
    dimension: 'wisdom'
  },
  {
    question: 'I have a natural tendency to encourage others.',
    dimension: 'exhortation'
  },
  {
    question: 'I am willing to take the initiative in helping other Christians grow in their faith.',
    dimension: 'shepherding'
  },
  {
    question: 'I have an acute awareness of the emotions of other people, such as loneliness, pain, fear, and anger.',
    dimension: 'mercy'
  },
  {
    question: 'I am a cheerful giver.',
    dimension: 'giving'
  },
  {
    question: 'I spend time digging into facts.',
    dimension: 'knowledge'
  },
  {
    question: 'I feel that I have a message from God to deliver to others.',
    dimension: 'prophecy'
  },
  {
    question: 'I can recognize when a person is genuine/honest.',
    dimension: 'discernment'
  },
  {
    question: 'I am a person of vision (a clear mental portrait of a preferable future given by God). I am able to communicate vision in such a way that others commit to making the vision a reality.',
    dimension: 'leadership'
  },
  {
    question: 'I am willing to yield to God’s will rather than question and waver.',
    dimension: 'faith'
  },
  {
    question: 'I would like to be more active in getting the gospel to people in other lands.',
    dimension: 'apostleship'
  },
  {
    question: 'It makes me happy to do things for people in need.',
    dimension: 'service/helps'
  },
  {
    question: 'I am successful in getting a group to do its work joyfully.',
    dimension: 'administration'
  },
  {
    question: 'I am able to make strangers feel at ease.',
    dimension: 'hospitality'
  },
  {
    question: 'I have the ability to plan learning approaches.',
    dimension: 'teaching'
  },
  {
    question: 'I can identify those who need encouragement.',
    dimension: 'exhortation'
  },
  {
    question: 'I have trained Christians to be more obedient disciples of Christ.',
    dimension: 'shepherding'
  },
  {
    question: 'I am willing to do whatever it takes to see others come to Christ.',
    dimension: 'evangelism'
  },
  {
    question: 'I am attracted to people who are hurting.',
    dimension: 'mercy'
  },
  {
    question: 'I am a generous giver.',
    dimension: 'giving'
  },
  {
    question: 'I am able to discover new truths.',
    dimension: 'knowledge'
  },
  {
    question: 'I have spiritual insights from Scripture concerning issues and people that compel me to speak out.',
    dimension: 'prophecy'
  },
  {
    question: 'I can sense when a person is acting in accord with God’s will.',
    dimension: 'discernment'
  },
  {
    question: 'I can trust in God even when things look dark.',
    dimension: 'faith'
  },
  {
    question: 'I can determine where God wants a group to go and help it get there.',
    dimension: 'leadership'
  },
  {
    question: 'I have a strong desire to take the gospel to places where it has never been heard.',
    dimension: 'apostleship'
  },
  {
    question: 'I enjoy reaching out to new people in my church and community.',
    dimension: 'hospitality'
  },
  {
    question: 'I am sensitive to the needs of people.',
    dimension: 'service/helps'
  },
  {
    question: 'I have been able to make effective and efficient plans for accomplishing the goals of a group.',
    dimension: 'administration'
  },
  {
    question: 'I often am consulted when fellow Christians are struggling to make difficult decisions.',
    dimension: 'wisdom'
  },
  {
    question: 'I think about how I can comfort and encourage others in my congregation.',
    dimension: 'exhortation'
  },
  {
    question: 'I am able to give spiritual direction to others.',
    dimension: 'shepherding'
  },
  {
    question: 'I am able to present the gospel to lost persons in such a way that they accept the Lord and His salvation.',
    dimension: 'evangelism'
  },
  {
    question: 'I possess an unusual capacity to understand the feelings of those in distress.',
    dimension: 'mercy'
  },
  {
    question: 'I have a strong sense of stewardship based on the recognition that God owns all things.',
    dimension: 'giving'
  },
  {
    question: 'I have delivered to other persons messages that have come directly from God.',
    dimension: 'prophecy'
  },
  {
    question: 'I can sense when a person is acting under God’s leadership.',
    dimension: 'discernment'
  },
  {
    question: 'I try to be in God’s will continually and be available for His use.',
    dimension: 'faith'
  },
  {
    question: 'I feel that I should take the gospel to people who have different beliefs from me.',
    dimension: 'apostleship'
  },
  {
    question: 'I have an acute awareness of the physical needs of others.',
    dimension: 'service/helps'
  },
  {
    question: 'I am skilled in setting forth positive and precise steps of action.',
    dimension: 'administration'
  },
  {
    question: 'I like to meet visitors at church and make them feel welcome.',
    dimension: 'hospitality'
  },
  {
    question: 'I explain Scripture in such a way that others understand it.',
    dimension: 'teaching'
  },
  {
    question: 'I can usually see spiritual solutions to problems.',
    dimension: 'wisdom'
  },
  {
    question: 'I welcome opportunities to help people who need comfort, consolation, encouragement, and counseling.',
    dimension: 'exhortation'
  },
  {
    question: 'I feel at ease in sharing Christ with nonbelievers.',
    dimension: 'evangelism'
  },
  {
    question: 'I can influence others to perform to their highest God-given potential.',
    dimension: 'leadership'
  },
  {
    question: 'I recognize the signs of stress and distress in others.',
    dimension: 'mercy'
  },
  {
    question: 'I desire to give generously and unpretentiously to worthwhile projects and ministries.',
    dimension: 'giving'
  },
  {
    question: 'I can organize facts into meaningful relationships.',
    dimension: 'knowledge'
  },
  {
    question: 'God gives me messages to deliver to His people.',
    dimension: 'prophecy'
  },
  {
    question: 'I am able to sense whether people are being honest when they tell of their religious experiences.',
    dimension: 'discernment'
  },
  {
    question: 'I enjoy presenting the gospel to persons of other cultures and backgrounds.',
    dimension: 'apostleship'
  },
  {
    question: 'I enjoy doing little things that help people.',
    dimension: 'service/helps'
  },
  {
    question: 'I can give a clear, uncomplicated presentation.',
    dimension: 'teaching'
  },
  {
    question: 'I have been able to apply biblical truth to the specific needs of my church.',
    dimension: 'wisdom'
  },
  {
    question: 'God has used me to encourage others to live Christlike lives.',
    dimension: 'exhortation'
  },
  {
    question: 'I have sensed the need to help other people become more effective in their ministries.',
    dimension: 'shepherding'
  },
  {
    question: 'I like to talk about Jesus to those who do not know Him.',
    dimension: 'evangelism'
  },
  {
    question: 'I have the ability to make strangers feel comfortable in my home.',
    dimension: 'hospitality'
  },
  {
    question: 'I have a wide range of study resources and know how to secure information.',
    dimension: 'knowledge'
  },
  {
    question: 'I feel assured that a situation will change for the glory of God even when the situation seem impossible.',
    dimension: 'faith'
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
          <strong>
            {dimension.toUpperCase()}
          </strong>
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
          <li>
            {this.renderDimension('administration')}
          </li>
          <li>
            {this.renderDimension('teaching')}
          </li>
          <li>
            {this.renderDimension('knowledge')}
          </li>
          <li>
            {this.renderDimension('wisdom')}
          </li>
          <li>
            {this.renderDimension('prophecy')}
          </li>
          <li>
            {this.renderDimension('discernment')}
          </li>
          <li>
            {this.renderDimension('exhortation')}
          </li>
          <li>
            {this.renderDimension('shepherding')}
          </li>
          <li>
            {this.renderDimension('faith')}
          </li>
          <li>
            {this.renderDimension('evangelism')}
          </li>
          <li>
            {this.renderDimension('apostleship')}
          </li>
          <li>
            {this.renderDimension('service/helps')}
          </li>
          <li>
            {this.renderDimension('mercy')}
          </li>
          <li>
            {this.renderDimension('giving')}
          </li>
          <li>
            {this.renderDimension('hospitality')}
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