const express = require('express')
const app = express()
const port = 4000
const user = [
    { name: 'Abc', id: 1 },
    { ame: 'Abc2', id: 2 },
    { name: 'Abc3', id: 3 },
    { name: 'Abc4', id: 4 },
    { name: 'Abc5', id: 5 },
    { name: 'Abc6', id: 6 },
    { name: 'Abc7', id: 7 },
    { name: 'Abc8', id: 8 },
    { name: 'Abc9', id: 9 },
    { name: 'Abc10', id: 10 },
    { name: 'Abc11', id: 11 },
    { name: 'Abc12', id: 12 },
    { name: 'Abc13', id: 13 }

]
app.get('/users', getPagination(user), (req, res) => {

    res.json(res.getPagination)
})

function getPagination(data) {
    return (req, res, next) => {
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
        console.log(req.query)
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
        let response = {}
        if (endIndex < data.length) {
            response.next = {
                next: page + 1,
                limit: limit
            }
        }
        if (startIndex > 0) {
            response.prev = {
                next: page - 1,
                limit: limit
            }
        }
        response.response = data.slice(startIndex, endIndex)
        res.getPagination = response
        next()
    }
}
app.listen(port,
    console.log("Server listening on port", port)
)