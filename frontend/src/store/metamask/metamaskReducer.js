const initialState = {
  loading: false,
  account: null,
  provider: null,
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
        account: action.payload?.account || state.account,
        provider: action.payload?.provider || state.provider,
        loading: false,
      };
    case "METAMASK/UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    case "METAMASK/DISCONNECT":
      return {
        ...state,
        account: null,
        loading: false,
      };
    case "METAMASK/PROVIDER_DETECTED":
      return {
        ...state,
        provider: action.payload.provider,
      };
    default:
      return state;
  }
};

export { metamaskReducer };
