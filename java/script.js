

function loadText(buttonId) {
	// Завантажуємо JSON файл після натискання кнопки
	fetch('data.json')
		.then(response => response.json()) // перетворюємо відповідь на JSON
		.then(buttonTexts => {
			const paragraph = document.getElementById("paragraph");
			paragraph.textContent = buttonTexts[buttonId]; // Виводимо текст відповідно до id кнопки
		})
		.catch(error => console.error('Error loading JSON file:', error));
}

// Прив'язуємо обробники подій до кнопок
document.getElementById("btn1").addEventListener("click", () => loadText("btn1"));
document.getElementById("btn2").addEventListener("click", () => loadText("btn2"));
document.getElementById("btn3").addEventListener("click", () => loadText("btn3"));