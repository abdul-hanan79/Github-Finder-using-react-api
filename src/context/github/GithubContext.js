import { createContext } from "react";
import { useReducer } from "react";
import githubReducers from "./GithubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducers, initialState);

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // loading: state.loading,
        // repos:state.repos,
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
