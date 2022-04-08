import { createContext, useReducer } from "react";
import githubReducer from "./GitHubReducer";
const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GitHubProvider = ({ children }) => {
  const initialstate = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialstate);

  // Get Search Result from Api
  const searchUser = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //   set loading function
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Clear User from UI
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUser,
        clearUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
