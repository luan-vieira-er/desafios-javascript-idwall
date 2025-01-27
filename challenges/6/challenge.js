/*
 * Soma Combinacional
 */
/* ENUNCIADO
 * Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas 
 * entre valores do conjunto que resultem na soma do número alvo.
 * 
 * Observações:
 * 
 * Todos os números, inclusive o alvo, serão inteiros positivos
 * O resultado não deve obter combinações com valores repetidos. Exemplo:
 *  
 *  combinate([2, 3, 5], 8) retornando
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,2,3],
 *       [3,3,2]  
 *       [3,5]
 *       [5,3]
 *   ]
 * 
 * Os valores do conjunto de dados podem se repetir entre si, como por exemplo:
 * 
 * combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.
 * 
 * 
 * Seguem mais alguns exemplos do retorno esperado:
 * 
 *  combinate([2, 3, 5], 8) deve retornar
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,5]
 *   ]
*
*    outro exemplo: 
*
*    combinate([2, 3, 6, 7], 7) retorna
*
*    [
*       [2, 2, 3],
*       [7]
*    ]
 */

const combinate = (set, target) => {
    const res = [];

    function backtrack(remaining, path, start) {
        // Se a soma dos valores do caminho excede o alvo, não é uma combinação válida
        if (remaining < 0) {
            return;
        }

        // Se a soma dos valores do caminho é igual ao alvo, adicionamos à lista de resultados
        if (remaining === 0) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < set.length; i++) {
            // Cada número é escolhido e prosseguimos para a próxima escolha
            backtrack(remaining - set[i], [...path, set[i]], i);
        }
    }

    backtrack(target, [], 0);
    return res;
}


module.exports = combinate
