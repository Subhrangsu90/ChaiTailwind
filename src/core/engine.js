import { parseChaiClass } from "./parser.js";
import { applyStyleToElement } from "./applier.js";
import { startScanner } from "./scanner.js";

function processElement(el) {
	const chaiClasses = [...el.classList].filter((c) =>
		c.startsWith("chai-")
	);

	chaiClasses.forEach((className) => {
		const { propKey, propValue } = parseChaiClass(className);
		if (!propKey) return;
		applyStyleToElement(el, propKey, propValue);
		el.classList.remove(className);
	});
}

export const chaiEngine = {
	init() {
		startScanner(processElement);
	},
};