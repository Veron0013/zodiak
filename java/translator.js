let currentLanguage = 'ua';

const params = new URLSearchParams(window.location.search);
const switcher = document.getElementById("lang_input");

function loadText() {

	fetch('translations.json')
		.then(response => response.json())
		.then(data => {
			const texts = data[currentLanguage];

			console.log(texts);

			if (texts) {
				for (const [key, value] of Object.entries(texts)) {
					try {
						const element = document.getElementById(key);
						if (element && element.tagName === 'IMG') {
							element.setAttribute("src", value);
							//картинки
						} else if (element) {
							element.innerHTML = value;
							//текст
						} else {
							//console.warn(`Елемент з id="${key}" не знайдено.`);
						}
					} catch (error) {
						console.error(`Помилка при оновленні елемента з id="${key}":`, error);
					}
				}
			} else {
				//console.error('Обʼєкт з id=2 не знайдено.');
			}
		})
		.catch(error => console.error('Помилка завантаження JSON:', error));
}

function changeLanguage() {
	if (switcher.checked) {
		currentLanguage = 'en';
	} else {
		currentLanguage = 'ua';
	}
	console.log(currentLanguage);

	loadText();
}

loadText();

switcher.addEventListener("click", changeLanguage);