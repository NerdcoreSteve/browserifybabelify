const R = require('ramda')

const display_list = (list) => `[${R.join(', ', list)}]`

const sum = R.reduce((x, y) => x + y, 0)

const display_sum = (list) =>
    `The sum of ${display_list(list)} is ${sum(list)}`

document.querySelector('#some_button').onclick = () =>
    document.querySelector('#some_h1').innerHTML =
        display_sum([1, 2, 3, 4, 5, 6])
