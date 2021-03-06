

export const register = async (email, password) => {

    const url = 'http://127.0.0.1:8000/accounts/register/'
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    const reg = await response.json()
    return reg
}