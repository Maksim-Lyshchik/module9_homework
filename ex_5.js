/*Написать код приложения, интерфейс которого состоит из двух input и кнопки.
В input можно ввести любое число.
    Заголовок первого input — «номер страницы».
    Заголовок второго input — «лимит».
    Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:
Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст 
«Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по 
URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — 
это число из первого input, а GET-параметр limit — это введённое число второго input. 
Пример: если пользователь ввёл 5 и 7, то запрос будет вида 
https://picsum.photos/v2/list?page=5&limit=7.*/

const form3 = document.querySelector('.exercise_9_5 form')
const errorE5 = document.querySelector('.exercise_9_5 .error')
const imgPag3 = document.querySelector('.exercise_9_5 .images')

const data = localStorage.getItem('localData');
                                  
showImgs(JSON.parse(data));

form3.addEventListener('submit', (event) => {
	event.preventDefault();

	errorE5.textContent = '';
	imgPag3.innerHTML = '';

	let inputPage = form3.elements['input-page'].value
    let inputLimit = form3.elements['input-limit'].value

    if ((inputPage < 1 || inputPage > 10) &&
      (inputLimit < 1 || inputLimit > 10)) {
        let error = 'Номер страницы и лимит вне диапазона от 1 до 10'
		errorE5.textContent = error
	} else if (inputPage < 1 || inputPage > 10) {
		let error = 'Номер страницы вне диапазона от 1 до 10'
		errorE5.textContent = error
	} else if (inputLimit < 1 || inputLimit > 10) {
		let error = 'Лимит вне диапазона от 1 до 10'
		errorE5.textContent = error
	} else {
        fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log(data)
				localStorage.setItem('localData', JSON.stringify(data))
				imgPag3(data)
			})
			.catch((e) => {
				console.log('Ошибка запроса', e)
			})
    }
})
  
function showImgs(data) {
    if (data) {
        data.forEach((obj) => {
            let img = document.createElement('img')
            img.setAttribute('src', obj.download_url)
            img.setAttribute('width', '500px')
            imgPag3.appendChild(img)
        })
    }
}