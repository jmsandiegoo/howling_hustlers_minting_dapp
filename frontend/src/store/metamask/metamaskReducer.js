const initialState = {
  loading: false,
  account: null,
  provider: null,
  error: null,
};

const metamaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "METAMASK/CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "METAMASK/CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        provider: action.payload.provider,
      };
    case "METAMASK/CONNECTION_FAILED":
      return {
        ...state,
        account: action.payload.account || state.account,
        provider: action.payload.provider || state.provider,
        loading: false,
        error: { ...action.payload.error },
      };
    case "METAMASK/UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    case "METAMASK/DISCONNECT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export { metamaskReducer };
