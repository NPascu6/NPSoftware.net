import * as actions from "../Constants/staticStrings";

export const addLoader = () => ({
  type: actions.LOADING_TRUE
});

export const removeLoader = () => ({
  type: actions.LOADING_FALSE
});
