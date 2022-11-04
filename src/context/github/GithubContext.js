import { createContext } from "react";
import { useReducer } from "react";
import githubReducers from "./GithubReducers";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = "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"
// console.log("token value is ", GITHUB_TOKEN)

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const initialState = {
        users: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducers, initialState)


    // Get Search Results
    const searchUsers = async (text) => {
        SET_LOADING()
        // console.log("text in search user function", text)
        const params = new URLSearchParams({
            q: text
        })
        // console.log("token", GITHUB_TOKEN);
        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        // console.log(`URL IS AS FOLLOW -------------> ${GITHUB_URL}/search/users?${params}`)
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {

            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,

            }
        })

        // console.log("response", response);
        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
        // console.log("items are", items);
    }
    const clearUsers=()=> dispatch(
        {
            type:"CLEAR-USERS",
        }
    )

    const SET_LOADING = () => dispatch({
        type: "SET_LOADING"
    })
    return (<GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
    }}>

        {children}
    </GithubContext.Provider>)
}

export default GithubContext

