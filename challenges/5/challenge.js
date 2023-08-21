/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

const posts = require('./posts.json')

const paginate = (collection, pageNumber = 1, itemsPerPage = 10) => {
    if (!Array.isArray(collection)) throw new Error('Expect array and got string')
    const paginatedData = collection.filter((curr, index) => {
        if (index >= (((pageNumber) * itemsPerPage) - itemsPerPage)
            && index < (((pageNumber+1) * itemsPerPage) - itemsPerPage)) return curr
        return false
    })
    return {
        currentPage: pageNumber,
        perPage: itemsPerPage,
        total: collection.length,
        totalPages: Number((collection.length / itemsPerPage).toFixed(0)),
        data: paginatedData
    }
}

module.exports = paginate