import { createContext } from "react";
import { useReducer } from "react";
import githubReducers from "./GithubReducers";

const GithubContext = createContext()



export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducers, initialState)


    // // Get Search Results
    // const searchUsers = async (text) => {
    //     SET_LOADING()

    //     const params = new URLSearchParams({
    //         q: text
    //     })
    //     // console.log("token", GITHUB_TOKEN);
    //     // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    //     // console.log(`URL IS AS FOLLOW -------------> ${GITHUB_URL}/search/users?${params}`)
    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {

    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,

    //         }
    //     })

    //     // console.log("response", response);
    //     const { items } = await response.json()

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items,
    //     })
    //     // console.log("items are", items);
    // }


    // // setUser
    // const getUser = async (login) => {
    //     SET_LOADING()
    //     console.log("login is-----", login)

    //     const response = await fetch(`${GITHUB_URL}/users/${login}`, {

    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,

    //         }
    //     })
    //     console.log("response is------------------", response)
    //     // if (response.status === 404){
    //     //     window.location='/notfound'
    //     // }
    //     // else{

    //     console.log("response", response);
    //     const data = await response.json()

    //     dispatch( {
    //         type: 'GET_USER',
    //         payload: data,
    //     })
    //     // }

    //     // console.log("items are", items);
    // }

    // const getUserRepos = async (login) => {
    //     SET_LOADING()
    //     console.log("login is-----", login)
    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page:10,
    //     })
    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {

    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,

    //         }
    //     })
    //     console.log("response is------------------", response)
    //     // if (response.status === 404){
    //     //     window.location='/notfound'
    //     // }
    //     // else{

    //     console.log("response", response);
    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: data,
    //     })
    //     // }

    //     // console.log("items are", items);
    // }



    return (<GithubContext.Provider value={{
        // users: state.users,
        // user: state.user,
        // loading: state.loading,
        // repos:state.repos,
        ...state,
        dispatch,
    }}>

        {children}
    </GithubContext.Provider>)
}

export default GithubContext

