// Clean up brackets for custom values: "[#fff]" -> "#fff"
export const stripBrackets = (str) => {
	if (typeof str !== "string") return str;
	return str.replace(/[\[\]]/g, "");
};

// REM Calculation: 16 -> 1rem
export const pxToRem = (pxValue, base = 16) => {
	const num = parseFloat(pxValue);
	if (isNaN(num)) return pxValue;
	return `${num / base}rem`;
};

export const isViewport = (str) => {
	return str.endsWith("vh") || str.endsWith("vw");
};

// Check if a value is a percentage shorthand: "50p" -> true
export const isPercentage = (str) => {
	return typeof str === "string" && str.endsWith("p");
};

// 4. Convert "50p" to "50%"
export const toPercentage = (str) => {
	return str.replace("p", "%");
};

// Check if it's a Hex color
export const isHex = (str) => {
	return str.startsWith("#") || (str.startsWith("[#") && str.endsWith("]"));
};

// Check if value has brackets (custom value)
export const hasBrackets = (str) => {
	return typeof str === "string" && str.startsWith("[") && str.endsWith("]");
};

// Check if property should use rem
export const isREMKey = (propKey) => {
	const remKeys = [
		"p",
		"m",
		"fs",
		"rounded",
		"gap",
		"w",
		"h",
		"min-w",
		"min-h",
		"max-w",
		"max-h",
		"pt",
		"pb",
		"pl",
		"pr",
		"px",
		"py",
		"mt",
		"mb",
		"ml",
		"mr",
		"mx",
		"my",
		"bw",
	];

	return remKeys.includes(propKey);
};
