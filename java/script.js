

const params = new URLSearchParams(window.location.search);

loadText(Number(params.get('id')));

function loadText(buttonId) {
	console.log(buttonId);

	fetch('data.json')
		.then(response => response.json())
		.then(data => {
			const item = data.find(zodiac => zodiac.id === buttonId);

			if (item) {
				for (const [key, value] of Object.entries(item)) {
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