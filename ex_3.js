/*Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число.
При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL
https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.*/

const form = document.querySelector('.exercise_9_3 form')
const errorE3 = document.querySelector('.exercise_9_3 .error')
const imgPag = document.querySelector('.exercise_9_3 .images')

form.addEventListener('submit', (event) => {
	event.preventDefault()

	errorE3.textContent = ''
	imgPag.innerHTML = ''

	let input = form.elements['input-1'].value
	if (input > 0 && input < 11) {
		const xhr = new XMLHttpRequest()

		xhr.onload = function () {
			console.log(`Статус: ${xhr.status}`)
			let data = JSON.parse(xhr.response)

			data.forEach((obj) => {
				let img = document.createElement('img')
				img.setAttribute('src', obj.download_url)
				img.setAttribute('width', '500px')
				imgPag.appendChild(img)
			})
		}
		xhr.onerror = function () {
			console.log('Ошибка запроса')
		}
		xhr.open('get', `https://picsum.photos/v2/list?limit=${input}`, true)
		xhr.send()
	} else {
		let error = 'число вне диапазона от 1 до 10'
		errorE3.textContent = error
	}
})