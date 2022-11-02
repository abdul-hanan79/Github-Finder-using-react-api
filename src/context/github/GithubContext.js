import { createContext } from "react";
import { useReducer } from "react";
import githubReducers from "./GithubReducers";

const GithubContext = createContext()

const GITHUB_URL = "https://api.github.com"
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const initialState = {
        users: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducers, initialState)
    const fetchUsers = async () => {
        SET_LOADING()
        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        const response = await fetch(`${GITHUB_URL}/users`, {

            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })
        const data = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    const SET_LOADING = () => dispatch({
        type: "SET_LOADING"
    })
    return (<GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
    }}>

        {children}
    </GithubContext.Provider>)
}

export default GithubContext