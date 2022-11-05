
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = "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"

// Get Search Results
export const searchUsers = async (text) => {


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

    if (response.status === 404) {
        window.location = '/notfound'
    }
    else {


        // console.log("response", response);
        const { items } = await response.json()
        return items
    }
    // console.log("items are", items);
}

// setUser
export const getUser = async (login) => {


    const response = await fetch(`${GITHUB_URL}/users/${login}`, {

        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,

        }
    })
    console.log("response is------------------", response)
    if (response.status === 404) {
        window.location = '/notfound'
    }
    else {

        console.log("response", response);
        const data = await response.json()

        return data
    }

    // console.log("items are", items);
}

export const getUserRepos = async (login) => {

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    })
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {

        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,

        }
    })
    console.log("response is------------------", response)
    if (response.status === 404) {
        window.location = '/notfound'
    }
    else {

        console.log("response", response);
        const data = await response.json()
        console.log("data is", data)
        return data
    }


}