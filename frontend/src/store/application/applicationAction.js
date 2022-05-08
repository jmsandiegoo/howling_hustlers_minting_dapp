// Actions
const appInitializing = () => {
  return {
    type: "APP/INITIALIZING",
  };
};

const appInitialized = () => {
  return {
    type: "APP/INITIALIZED",
  };
};

const appAddError = (error) => {
  return {
    type: "APP/ADD_ERROR",
    error: error,
  };
};

const appRemoveError = () => {
  return {
    type: "APP/REMOVE_ERROR",
  };
};

export { appInitializing, appInitialized, appAddError, appRemoveError };
