import {actions} from '../actions';

/**
 * Function for dispatching a time request to the redux store
 * @param {function} dispatch redux dispatch
 * @returns {void}
 */
export function getTime (dispatch) {
  dispatch({type: actions.GETTING_TIME});

  fetch('/getTime').
    then((result) => result.json()).
    then((result) => {
      dispatch({
        type: actions.TIME_RECEIVED,
        time: result
      });
    }).
    catch((error) => dispatch({
      type: actions.ERROR,
      error
    }));
}