const axios = require('axios')

exports.handler = async function(event, context) {

    const {query} = event.queryStringParameters
    
    const options = {
        method: "GET",
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${query}&diet=vegetarian`,
        headers: {
        "Content-Type": "application/json",
        },
    }

    return {
        statusCode: 200,
        body: JSON.stringify(   
        await axios.request(options)
            .then(response => {
            return response.data 
            })
            .catch(err => {
            return err
            }))
    }
}