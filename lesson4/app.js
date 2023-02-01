// const obj = {
//     name: 'NURDIN',
//     age: 19
// }

// console.log(JSON.stringify(obj) )

// const data = JSON.stringify(obj)
//
// console.log(data)
//
// const obj1 = JSON.parse(data)
// console.log(data)

const btn = document.querySelector('.btn')
// btn.addEventListener('click', ()=> {
//     const request = new XMLHttpRequest()//создание запроса
//     request.open("GET", "data.json")//второй этап
//     request.setRequestHeader("Content-type", "application/json")// указывание заколовка
//     request.send()//отправка запроса
//     request.addEventListener('load', ()=> {
//         // console.log(request.response)
//         const data = JSON.parse(request.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML = data.age
//     })
// })
btn.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'people.json')
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
    const data = JSON.parse(request.response)
        data.forEach(people => {
            const div = document.createElement('div')
            div.innerHTML = people.name
            document.body.append(div)
            })
        }
}


