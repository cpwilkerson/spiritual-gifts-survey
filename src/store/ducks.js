import {actions} from './actions';

// Reducer
/* eslint-disable complexity */
/**
 * Main reducer function
 * @param {object} state current state
 * @param {object} action redux action
 * @returns {object} state
 */
export default function reducer (state, action) {

  switch (action.type) {
    case actions.GETTING_TIME:
      return Object.assign({}, state, {gettingTime: true});
    case actions.TIME_RECEIVED:
      return Object.assign({}, state, {
        gettingTime: false,
        time: action.time.time
      });
    case actions.POSTING_PERSON:
      return Object.assign({}, state, {postingPerson: true});
    case actions.PERSON_RESULT:

      return Object.assign({}, state,
                           {
                             postingPerson: false,
                             persons: state.persons.concat([action.person])
                            });
    case actions.ERROR:
      return Object.assign({}, state, {error: action.error});
    default:
      return state;
  }
}
/* eslint-enable complexity */