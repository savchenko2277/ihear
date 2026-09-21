import { throttle, validate } from "./libs/utils";
import { makeModal } from "./libs/makeModal";
import { scrollBasedToggle } from "./libs/scrollBasedToggle";
import "./polyfills.js";
import "./blocks.js";

// Функции

// Единицы высоты (ширины) экрана
function updateVH() {
	const { height = window.innerHeight, width = window.innerWidth } = window.visualViewport || {};

	document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
	['resize', 'orientationchange'].forEach(event => {
		window.addEventListener(event, throttle(updateVH, 200), { passive: true });
	});
}

// Ширина скроллбара
const setScrollbarWidth = () => {
	document.documentElement.style.setProperty('--sw', `${window.innerWidth - document.documentElement.clientWidth}px`);
}

// Высота фиксированного хедера (для отступа у main)
const setHeaderHeight = () => {
	const header = document.querySelector('.header');
	if (!header) return;

	const top = header.querySelector('.header__top');
	const main = header.querySelector('.header__main');
	const h = (top ? top.scrollHeight : 0) + (main ? main.offsetHeight : 0);

	document.documentElement.style.setProperty('--header-h', `${h}px`);
}

// Запуск функций
updateVH();
setScrollbarWidth();
setHeaderHeight();

window.addEventListener('resize', throttle(setHeaderHeight, 200), { passive: true });

/* Модальные окна */
makeModal({
	class: 'modal',
	open() {
		document.documentElement.classList.add('no-scroll');
	},
	close() {
		document.documentElement.classList.remove('no-scroll');
	},
});

/* Появление блоков при прокрутке */
scrollBasedToggle({
	class: 'showed',
	data: 'animation',
	throttle: 120,
});

/* Обратная связь (форма обратного звонка) */
document.addEventListener('submit', (e) => {
	const form = e.target.closest('.callback');
	if (!form) return;

	e.preventDefault();

	const inputs = [...form.querySelectorAll('input[data-rules]')];
	let valid = true;

	inputs.forEach((input) => {
		const ok = validate(input);
		input.classList.toggle('error', !ok);
		if (!ok) valid = false;
	});

	if (!valid) return;

	form.innerHTML = `
		<div class="callback__title">Спасибо!</div>
		<p class="callback__text">Заявка отправлена. Мы перезвоним вам в ближайшее время.</p>
	`;
});