
const axios = require('axios')
const functions = {
    sum: (num1, num2) => num1 + num2,
    nullvalue: () => null,
    checkvalue: (x) => x,
    createUser: () => {
        const user = { name: 'Atharva' }
        user['surname'] = 'Gadkari'
        return user
    },
    fetchUser: () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data)
    }
}

module.exports = functions