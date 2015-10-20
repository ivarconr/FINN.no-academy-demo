import * as constants from './candidateConstants';

const initialState = {
  currentStep: constants.steps.SELECT,
  selectedCandidates: [],
  project: null,
  message: null,
  prevSteps: []
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
        currentStep: constants.steps.ATTACH_PROJECT,
        prevSteps: [...state.prevSteps, state.currentStep]
      });

    case constants.PROJECT_SELECTED:
      return Object.assign({}, state, {
        currentStep: constants.steps.MESSAGE,
        prevSteps: [...state.prevSteps, state.currentStep],
        project: action.project
      });

    case constants.MESSAGE_WRITTEN:
      return Object.assign({}, state, {
        message: action.msg
      });

    case constants.CONFIRM_CONTACT:
      return Object.assign({}, state, {
        currentStep: constants.steps.CONFIRM,
        prevSteps: [...state.prevSteps, state.currentStep]
      });

    case constants.PREV_STEP:
      const steps = state.prevSteps;
      const currentStep = steps.pop();

      return Object.assign({}, state, {
        currentStep: currentStep,
        prevSteps: steps,
      });

    default:
      return state;
  }
}
