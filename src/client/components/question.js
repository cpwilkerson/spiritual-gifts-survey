import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const STAR_SIZE = '31.826'; // '63.652';

/**
 * My best Question reactjs component ever!
 */
class Question extends Component {
  constructor (props) {
    super(props);

    this.state = {
      starCount: 0
    };
  }

  // componentDidMount () {
  //   // Code to run on Browser mounting
  // }

  renderStar (value) {
    return (
      <svg x="0" y="0" width={STAR_SIZE} height={STAR_SIZE} viewBox="0, 0, 63.652, 63.652"
        onClick={() => {
          this.setState({starCount: this.state.starCount === value ? 0 : value},
                        () => {
                          if (this.props.onChange) {
                            this.props.onChange(this.state.starCount,
                                                this.props.dimension);
                          }
                        });

        }}>
        <g id="Layer_1" transform="translate(-0.243, -0.243)">
          <g>
            <path d="M13.518,63.395 L17.156,41.089 L1.743,25.292 L23.043,22.038 L32.569,1.743 L42.095,22.038 L63.395,25.292 L47.982,41.089 L51.62,63.395 L32.569,52.864 z"
              fill={this.state.starCount >= value ? '#000000' : '#FFFFFF'}
              />
            <path d="M13.518,63.395 L17.156,41.089 L1.743,25.292 L23.043,22.038 L32.569,1.743 L42.095,22.038 L63.395,25.292 L47.982,41.089 L51.62,63.395 L32.569,52.864 z" fillOpacity="0" stroke="#000000" strokeWidth="1"
            />
          </g>
        </g>
      </svg>
    );
  }

  render () {
    return (
      <div className="question-wrapper">
        <span className="stars"
          style={{margin: '10px'}}>
          {this.renderStar(1)}
          {this.renderStar(2)}
          {this.renderStar(3)}
          {this.renderStar(4)}
          {this.renderStar(5)}
        </span>
        <label className="question-label">
          {this.props.question}
        </label>
      </div>
    );
  }
}

Question.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  question: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired
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
                                  mapDispatchToProps)(Question));

export {Question};