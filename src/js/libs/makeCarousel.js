export const makeCarousel = (container) => {
	if (!container) return;

	const track = container.querySelector('[data-carousel-track]');
	if (!track) return;

	const items = [...track.children];
	if (!items.length) return;

	const prev = container.querySelector('[data-carousel-prev]');
	const next = container.querySelector('[data-carousel-next]');
	const dotsWrap = container.querySelector('[data-carousel-dots]');

	let dots = [];

	const gap = () => {
		const s = getComputedStyle(track);
		return parseFloat(s.columnGap || s.gap) || 0;
	};

	const itemStep = () => items[0].getBoundingClientRect().width + gap();

	const groups = () => Math.min(4, items.length);

	const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);

	const currentSlide = () => {
		if (maxScroll() <= 0) return 0;
		return Math.round(track.scrollLeft / itemStep());
	};

	const goSlide = (slide) => {
		const target = Math.max(0, Math.min(slide * itemStep(), maxScroll()));
		track.scrollTo({ left: target, behavior: 'smooth' });
	};

	const buildDots = () => {
		if (!dotsWrap) return;
		dotsWrap.innerHTML = '';
		dots = [];

		for (let i = 0; i < groups(); i++) {
			const d = document.createElement('button');
			d.type = 'button';
			d.className = 'slider-dot';
			d.setAttribute('aria-label', `Точка ${i + 1}`);
			d.addEventListener('click', () => goSlide(i));
			dotsWrap.appendChild(d);
			dots.push(d);
		}

		update();
	};

	const update = () => {
		if (!dots.length) return;
		const current = currentSlide() % groups();
		dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
	};

	prev?.addEventListener('click', () => track.scrollBy({ left: -itemStep(), behavior: 'smooth' }));
	next?.addEventListener('click', () => track.scrollBy({ left: itemStep(), behavior: 'smooth' }));

	track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
	window.addEventListener('resize', buildDots);

	buildDots();
};
