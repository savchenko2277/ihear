export const header = () => {
	const node = document.querySelector(".header");
	if (!node) return;

	const inner = node.querySelector(".header__inner");
	const nav = node.querySelector(".header__nav");
	const actions = node.querySelector(".header__actions");
	const burger = node.querySelector(".header__burger");
	const mobile = node.querySelector(".header__mobile");
	const mobileNav = node.querySelector(".header__mobile-nav");
	const mobileBottom = node.querySelector(".header__mobile-bottom");
	const mobileClose = node.querySelector(".header__mobile-close");

	/* Мобильное меню */
	const openMenu = () => {
		node.classList.add("opened");
		document.documentElement.classList.add("no-scroll");
	};

	const closeMenu = () => {
		node.classList.remove("opened");
		document.documentElement.classList.remove("no-scroll");
	};

	/* Перенос навигации в мобильное меню */
	const mq = window.matchMedia("(max-width: 960px)");

	const moveMobile = () => {
		if (mq.matches) {
			mobileNav?.appendChild(nav);
			mobileBottom?.appendChild(actions);
		} else {
			inner.insertBefore(nav, burger);
			inner.insertBefore(actions, burger);
			closeMenu();
		}
	};

	moveMobile();
	mq.addEventListener("change", moveMobile);

	burger?.addEventListener("click", () => {
		node.classList.contains("opened") ? closeMenu() : openMenu();
	});

	mobileClose?.addEventListener("click", closeMenu);

	mobile?.addEventListener("click", (e) => {
		if (e.target.closest("a, button")) closeMenu();
	});

	document.addEventListener("click", (e) => {
		if (node.classList.contains("opened") && !e.target.closest(".header")) closeMenu();
	});

	/* Тень и сворачивание панели при прокрутке (с гистерезисом) */
	let ticking = false;

	const onScroll = () => {
		if (ticking) return;
		ticking = true;

		requestAnimationFrame(() => {
			const y = window.scrollY;

			if (y > 24) {
				node.classList.add("is-scrolled");
			} else if (y < 4) {
				node.classList.remove("is-scrolled");
			}

			ticking = false;
		});
	};

	onScroll();
	window.addEventListener("scroll", onScroll, { passive: true });
};
