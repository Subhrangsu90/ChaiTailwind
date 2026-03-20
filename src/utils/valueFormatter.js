import {
	isHex,
	isPercentage,
	isViewport,
	stripBrackets,
	toPercentage,
	pxToRem,
} from "./helpers.js";

export const formatValue = (value, propKey) => {
	if (!value) return "";

	// 1. Handle HEX Colors (e.g., chai-bg-[#fff000])
	if (isHex(value)) return stripBrackets(value);

	// 2. Handle Percentages (e.g., chai-w-50p -> 50%)
	if (isPercentage(value)) return toPercentage(value);

	// 3. Handle Viewport Units (e.g., chai-h-100vh -> 100vh)
	if (isViewport(value)) return value;

	if (propKey === "flex-row")
		return value === "reverse" ? "row-reverse" : "row";
	if (propKey === "flex-col")
		return value === "column" || value === "col" || value === "reverse"
			? value === "reverse"
				? "column-reverse"
				: "column"
			: "column";

	// 4. The REM Engine
	const remKeys = [
		"p",
		"m",
		"fs",
		"rounded",
		"w",
		"h",
		"gap",
		"pt",
		"pb",
		"mt",
		"mb",
		"px",
		"py",
	];
	if (!isNaN(value) && remKeys.includes(propKey)) return pxToRem(value);

	// 5. Fallback for strings (e.g., chai-align-center)
	return value;
};
