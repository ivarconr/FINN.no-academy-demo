import * as constants from './candidateConstants';


const initialState = {
  currentStep: constants.steps.SELECT,
  project: null
};

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case constants.CANDIDATES_SELECTED:

      return Object.assign({}, state, {
        selectedCandidates: action.candidates,
        currentStep: constants.steps.ATTACH_PROJECT
      });


    case constants.PROJECT_SELECTED:

      return Object.assign({}, state, {
        currentStep: constants.steps.MESSAGE,
        project: action.project
      });

    default:
      return state;
  }
}
