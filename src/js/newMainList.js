class Insta {
    constructor(name) {
        this.pharInst = name
    }

    init() {
        this.mainDomElements()
        this.serverRequestPhoto()
    }

    serverRequestPhoto() {
        fetch('https://jsonplaceholder.typicode.com/photos',)
            .then(response => response.json())
            .then(json => {
                const data = [];
                for (let i = 0; i < 50; i++){
                data.push(json[i])
                }
                console.log('data   ', data)
                this.mainDomElements(data)
            })

    }

    mainDomElements(json) {
        let arr = json
        const photoArea = document.querySelector('.footer__icons-bottom')
        for (let key in arr) {
            let cellFoto = document.createElement('img')

            cellFoto.classList.add('footer__cell')
            cellFoto.src = `${arr[key].url}`
            cellFoto.alt = 'background'
            photoArea.append(cellFoto)
            cellFoto.addEventListener('click', function () {
                /*window.open(`${json[key].url}`)*/
               css(cellFoto, {
                   ' transform':'scale(1,2)',
                   'box-shadow':'4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
               });



                /*cellFoto.style.transform = `scale(1.2)`;*/
                /*при нажатии на кнопку открывать ссылку с картинкой в новом окне(октл функционал перед решением второго задания )
                и запушить в новый гит*/

                const splitURL = this.src.split('/')
                const lastElem = splitURL.slice(-1)
                const stringElem = lastElem.join()
                const color = '#' + stringElem
                /*при нажатии увеличиваем квадрат и добавляем тень с цветом которую мы получили(scc scale, box-Shadow)*/
                cellFoto.append()



            })
        }
    }
}

const insta = new Insta()
insta.init()
//Но можешь попробовать
//чтобы мы показывали первые 9 фотографий и при нажатии на показать еще добавляется еще 3 фотографии

