import { makeCarousel } from "../../js/libs/makeCarousel";

export const certs = () => {
	makeCarousel(document.querySelector(".certs__wrap"));

	/* Лайтбокс-галерея (Fancybox) */
	if (window.Fancybox) {
		Fancybox.bind('[data-fancybox="gallery"]', {
			groupAll: true,
			infinite: true,
			Thumbs: { type: "modern" },
			Toolbar: { display: { left: ["infobar"], middle: [], right: ["thumbs", "close"] } },
		});
	}
};
