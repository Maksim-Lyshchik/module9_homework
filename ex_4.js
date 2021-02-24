/*Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.*/

const form2 = document.querySelector('.exercise_9_4 form')
const errorE4 = document.querySelector('.exercise_9_4 .error')
const imgPag2 = document.querySelector('.exercise_9_4 .images')

form2.addEventListener('submit', (event) => {
	event.preventDefault();

	errorE4.textContent = '';
	imgPag2.innerHTML = '';

	let input_2 = form2.elements['input-2'].value;
	let input_3 = form2.elements['input-3'].value;
	console.log(input_2, input_3);
	if (input_2 < 301 && input_2 > 99 && input_3 < 301 && input_3 > 99) {
		fetch(`https://picsum.photos/${input_2}/${input_3}`)
			.then((response) => {
				let img = document.createElement('img')
				img.setAttribute('src', response.url)
				img.setAttribute('width', '500px')
				imgPag2.appendChild(img)
			})
			.catch((event) => {
				console.log('Ошибка запроса', event)
			})
	} else {
		let errorText = 'одно из чисел вне диапазона от 100 до 300';
		errorE4.textContent = errorText;
	}
})