const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.onload = () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     }
// })

const convert = (elem, target, target2, isTrue) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / response.usd).toFixed(2)
            } else {
                target.value = (elem.value * response.usd).toFixed(2)
            }
            elem.value === '' && ( target.value = '')
            // elem.value === '' ? ( target.value = '') : null
        }
    })
}

// NaN, null, '', undef, 0, false

convert(som, usd, true)
convert(usd, som, false)
