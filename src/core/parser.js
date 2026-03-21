import { utilityMap } from "../config/defaultConfig.js";

export const parseChaiClass = (className) => {
	// Remove the prefix (chai-)
	const parts = className.replace("chai-", "").split("-");

	const twoPartKey = `${parts[0]}-${parts[1]}`;

	if (utilityMap[twoPartKey]) {
		return {
			propKey: twoPartKey,
			propValue: parts.slice(2).join("-") || parts[1],
		};
	}

	if (utilityMap[parts[0]]) {
		return {
			propKey: parts[0],
			propValue: parts.slice(1).join("-"),
		};
	}

	return { propKey: null, propValue: null };
};
