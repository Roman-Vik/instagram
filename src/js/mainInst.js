class Insta {
    constructor(posts) { // posts - это параметр внутри new Insta() - 98 строка
        //// глобальные переменные
        this.name = 'hello'
        this.list = posts // 97 трока
    }

    init(){ // методы
        // this.createDom(this.list) // 4 строка
        this.getResponse()
        this.createDomNew()
    }

    createDomNew(){
        const arr = [
            {
                text:'1',
                name: 'elem'
            },
            {
                text:'22222',
                name: 'item'
            },
            {
                text:'3333333',
                name: 'el'
            },
        ]
        const domNew = document.querySelector('.dom-new')
        for (let i = 0; i < arr.length; i++){
            const elem = document.createElement('div')
            // elem.classList.add('main__post main__post_elem') // первая итерация
            // elem.classList.add('main__post main__post_item')
            elem.classList.add('main__post', `main__post_${arr[i].name}`)
            // elem -eto 1

            console.log(`${arr[i].name}-eto ${arr[i].text}`)
            elem.textContent = arr[i].text
            domNew.append(elem)
        }
    }

    createDom(arr){ // 8 строка
     /*   const pix = document.querySelector('.main__pix')
        for(let i = 0; i < arr.length; i++){
            const post = document.createElement('div')
            post.classList.add('main__post')
            const img = document.createElement('img')
            img.classList.add('main__img')
            img.src = arr[i].src
            post.append(img)
            pix.append(post)
        }*/



        const pix = document.querySelector('.main__pix')
        for (let i = 0; i < arr.length; i++){
            const post = document.createElement('div')
            post.classList.add('main__post')
            const img = document.createElement('img')
            img.classList.add('main__img')
            img.src = arr[i]
            post.append(img)
            pix.append(post)

        }
    }

    getResponse () {
        // отличие POST & GET
        /*
        * get https://jsonplaceholder.typicode.com/users ? name=alex & age=10
        * post https://jsonplaceholder.typicode.com/users
        * body: {
        * name:'alex',
        * age: 10
        * }
        * */
    /*    fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            body:
        })*/
        const postID = 1
        const link = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
        fetch(link)
            .then(response => response.json()) // метод получения данных в json
            .then(res => {
                // создать метод который будет работать с данными (создать нужно квадраты с email)
                // this.workWithData(res)
                //здесь начать
               this.cycle(res)

            })
    }
        cycle(res){
                const mainPix = document.querySelector('.main__pix')
                console.log('res', res)
                for(let i = 0; i < res.length; i++){
                    const mainPost = document.createElement('div')
                    mainPost.classList.add('main__post')

                    const mainName = document.createElement('h2')
                    mainName.classList.add('main__name')
                    mainName.textContent = res[i].name
                    const mainEmail = document.createElement('h1')
                    mainEmail.classList.add('main__email')
                    mainEmail.textContent = res[i].email
                    const mainText = document.createElement('p')
                    mainText.classList.add('main__text')
                    mainText.textContent = res[i].body

                    mainPost.append(mainName, mainEmail, mainText)
                    mainPix.append(mainPost)
                }

        }

    workWithData (data) {
       for (let i in data.src) {
           data.append(postList)
       }
        console.log('data', data)
    }
}





const postList = [ // данные с сервера
    {
        src: "../src/pix/1.jpg"
    },
    {
        src: "../src/pix/1.jpg"
    },
    {
        src: "../src/pix/1.jpg"
    },
    {
        src: "../src/pix/1.jpg"
    },
    {
        src: "../src/pix/1.jpg"
    }
]

const objInsta = {
    init (){
        console.log(this.name)
        // this.createDom()
    },
    // init: function (){
    //     console.log(this.name)
    //     this.createDom()
    // },
    createDom (){
        console.log('dom')
    },
    name: 'alex'
}
objInsta.init()


const inst = new Insta(postList) // экземпляр класса инста
inst.init() // метод класса инста


/*
const arr = [1,2,3]
arr.sort()
*/
// const obj = {
//     name: 'Alex',
//
//     getName() { // одно и то же
//     },
//
//     getName2: function (){ // одно и то же
//
//     }
// }
// class Car {
//     constructor(width, name) {
//         this.width = width
//         this.name = name
//     }
// }
//
// const bmw = new Car(100, 'bmw')
// const mers = new Car(100, 'mers')










// const arr = [1,2,3,4]
// console.log(arr.reverse())
//
//
// const arr1 = new Array(1,2,3,4)
// console.log(arr1.reverse())


/*

Задание:
Создать глобальную переменную - пустой массив
Создать метод получения данных с сервера
При успешном получении данных - мы добавляем эти данные в глобальный массив (который изначально пустой) push
После получении данных вызываем метод создания дома и вставляем в этот метод наш глобальный массив (который мы получили с сервера)
Получить через fetch данные, при ошибке - вывести текст (создать див) с текстом "НЕТ ДАННЫХ"

 */

/*

вывести id email name body, построить элементы в main__pix


* */


//
// class Animal {
//
//     constructor(name, age ) {
//         this.name = name
//         this.age = age
//     }
//     init(){
//         this.getName()
//
//     }
//     getName(){
//         console.log(this.name)
//     }
//     getVoice(phar){
//         this.getNameVoice(phar)
//     }
//     getNameVoice(fon){
//         if (fon === 'loud'){
//             console.log('Very loud')
//         }
//     }
//
//
// }
// const dog = new Animal('taksa', '2')
// const dog2 = new Animal('mops', '2')
// dog.init()
// dog.getVoice('loud')
// console.log(dog)
