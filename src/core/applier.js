import { utilityMap } from "../config/defaultConfig.js";
import { formatValue } from "../utils/valueFormatter.js";

export const applyStyleToElement = (el, propKey, propValue) => {
	const cssProperties = utilityMap[propKey];
	if (cssProperties) {
		const finalValue = formatValue(propValue, propKey);
		// Ensure we handle both strings and arrays for safety
		const props = Array.isArray(cssProperties)
			? cssProperties
			: [cssProperties];
		props.forEach((prop) => {
			el.style[prop] = finalValue;
		});
	}
};
