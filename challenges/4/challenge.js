/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
    const heightIndex = htmlTemplate.indexOf('height: ') + 8

    let heigths = []

    if (htmlTemplate.indexOf('px', heightIndex) >= 0){
        heigths.push(Number(htmlTemplate.indexOf('px', heightIndex)))
    }
    if (htmlTemplate.indexOf('%', heightIndex) >= 0){
        heigths.push(Number(htmlTemplate.indexOf('%', heightIndex)))
    }
    if (htmlTemplate.indexOf('em', heightIndex) >= 0){
        heigths.push(Number(htmlTemplate.indexOf('em', heightIndex)))
    }

    heigths.sort()
    const height = Number(htmlTemplate.substring(heightIndex, heigths[0]))

    const widthIndex = htmlTemplate.indexOf('width: ') + 7

    let widths = []

    if (htmlTemplate.indexOf('px', widthIndex) >= 0){
        widths.push(Number(htmlTemplate.indexOf('px', widthIndex)))
    }
    if (htmlTemplate.indexOf('%', widthIndex) >= 0){
        widths.push(Number(htmlTemplate.indexOf('%', widthIndex)))
    }
    if (htmlTemplate.indexOf('em', widthIndex) >= 0){
        widths.push(Number(htmlTemplate.indexOf('em', widthIndex)))
    }

    widths.sort()
    const width = Number(htmlTemplate.substring(widthIndex, widths[0]))

    return { height, width }

}

module.exports = extractSize;


