const Api = {
    get: async (route, params) => {
        let queryParams = ''
        if (params && Object.keys(params).length > 0) {
            queryParams = '?'
            for (let [key, value] of Object.entries(params)) {
                queryParams += `${key}=${value}&`
            }
            queryParams = queryParams.slice(0, -1)
        }
        const res = await fetch(`${process.env.REACT_APP_API_URL}${route}${queryParams}`)
        if (!res.ok) {
            throw Error(`${res.status} ${res.statusText}`)
        } else {
            return res.json()
        }
    },
    post: async (route, data) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}${route}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            throw Error(`${res.status} ${res.statusText}`)
        }
        else {
            return res.json()
        }
    },
    delete: async (route) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}${route}`, {
            method: 'DELETE'
        })
        if (!res.ok) {
            throw Error(`${res.status} ${res.statusText}`)
        } else {
            return res.json()
        }
    },
    put: async (route, data) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}${route}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            throw Error(`${res.status} ${res.statusText}`)
        }
        else {
            return res.json()
        }
    }
}

export default Api;