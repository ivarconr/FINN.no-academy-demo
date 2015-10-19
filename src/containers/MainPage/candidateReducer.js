import * as constants from './candidateConstants';


const initialState = {
  currentStep: constants.steps.SELECT,
  selectedCandidates: [],
  project: null
};

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case constants.CANDIDATE_ADD:
      return Object.assign({}, state, {
        selectedCandidates: [...state.selectedCandidates, action.candidate]
      });

    case constants.CANDIDATE_REMOVE:
      const selectedCandidates = state.selectedCandidates.filter(cand => cand.fullname !== action.candidate.fullname);

      return Object.assign({}, state, {
        selectedCandidates: selectedCandidates
      });

    case constants.CANDIDATES_SELECTED:

      return Object.assign({}, state, {
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
