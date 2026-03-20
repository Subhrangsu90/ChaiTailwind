import { parseChaiClass } from "./parser.js";
import { applyStyleToElement } from "./applier.js";

export const chaiEngine = {
	init() {
		const elements = document.querySelectorAll('[class*="chai-"]');

		elements.forEach((el) => {
			const chaiClasses = [...el.classList].filter((c) =>
				c.startsWith("chai-"),
			);

			chaiClasses.forEach((className) => {
				const { propKey, propValue } = parseChaiClass(className);
				if (!propKey) return;
				applyStyleToElement(el, propKey, propValue);

				// Remove class
				el.classList.remove(className);
			});
		});
	},
};
