import {
	isHex,
	isPercentage,
	isViewport,
	stripBrackets,
	toPercentage,
	pxToRem,
	hasBrackets,
	isREMKey,
} from "./helpers.js";

export const formatValue = (value, propKey) => {
	if (!value) return "";

	// 1. Handle HEX Colors (e.g., chai-bg-[#fff000])
	if (isHex(value)) return stripBrackets(value);

	// 2. Handle Percentages (e.g., chai-w-50p -> 50%)
	if (isPercentage(value)) return toPercentage(value);

	// 3. Handle Viewport Units (e.g., chai-h-100vh -> 100vh)
	if (isViewport(value)) return value;

	// 4. Flex direction helpers
	if (propKey === "flex-row")
		return value === "reverse" ? "row-reverse" : "row";
	if (propKey === "flex-col")
		return value === "column" || value === "col" || value === "reverse"
			? value === "reverse"
				? "column-reverse"
				: "column"
			: "column";

	// 5. Convert numeric values to rem for supported keys
	if (!isNaN(value) && isREMKey(propKey)) return pxToRem(value);

	// 6. Handle custom values in brackets (e.g., [300px], [1.5em])
	if (hasBrackets(value)) return stripBrackets(value);

	// 7. Fallback for strings (e.g., chai-align-center)
	return value;
};
