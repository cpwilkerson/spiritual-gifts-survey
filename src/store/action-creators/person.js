import {actions} from '../actions';

/**
 * Function for dispatching a time request to the redux store
 * @param {function} dispatch redux dispatch
 * @param {object} person person object
 * @param {string} [person.name] name of person
 * @param {number} [person.age] age of person
 * @returns {void}
 */
export function postPerson (dispatch, person) {
  dispatch({type: actions.POSTING_PERSON});

  fetch('/postPerson', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(person)
  }).
    then((result) => result.json()).
    then((result) => {
      dispatch({
        type: actions.PERSON_RESULT,
        person: result
      });
    }).
    catch((error) => dispatch({
      type: actions.ERROR,
      error
    }));
}