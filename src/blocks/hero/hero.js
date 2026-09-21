export const hero = () => {
	const root = document.querySelector(".hero");
	if (!root) return;

	const slides = [...root.querySelectorAll(".hero__slide")];
	const dots = [...root.querySelectorAll(".slider-dot")];
	const visuals = [...root.querySelectorAll(".hero__visual-img")];

	if (slides.length < 2) return;

	let index = 0;
	let timer = null;
	const delay = 6000;

	const restart = () => {
		clearInterval(timer);
		timer = setInterval(() => go(index + 1), delay);
	};

	const go = (i) => {
		index = (i + slides.length) % slides.length;

		slides.forEach((slide, k) => slide.classList.toggle("is-active", k === index));
		dots.forEach((dot, k) => dot.classList.toggle("active", k === index));
		visuals.forEach((visual, k) => visual.classList.toggle("is-active", k === index));
		restart();
	};

	dots.forEach((dot, i) => dot.addEventListener("click", () => go(i)));

	root.addEventListener("mouseenter", () => clearInterval(timer));
	root.addEventListener("mouseleave", restart);

	go(0);
};
