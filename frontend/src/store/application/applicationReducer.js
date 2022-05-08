const initialState = {
  initializing: false,
  error: null,
};

const appReducer = (state = initialState, action) => {
  const { error } = action;
  let _state;
  if (error) {
    return {
      ...state,
      initializing: false,
      error: error,
    };
  } else {
    _state = {
      ...state,
      error: null,
    };
  }

  switch (action.type) {
    case "APP/INITIALIZING":
      return {
        ..._state,
        initializing: true,
      };
    case "APP/INITIALIZED":
      return {
        ..._state,
        initializing: false,
      };
    case "APP/REMOVE_ERROR":
      return {
        ..._state,
        error: null,
      };
    default:
      return _state;
  }
};

export { appReducer };
