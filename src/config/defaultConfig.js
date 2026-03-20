import { typography } from "../utilities/typography.js";
import { background } from "../utilities/background.js";
import { spacing } from "../utilities/spacing.js";
import { border } from "../utilities/border.js";
import { layout } from "../utilities/layout.js";
import { sizing } from "../utilities/sizing.js";
import { flexGrid } from "../utilities/flex_grid.js";

export const utilityMap = {
	...layout,
	...spacing,
	...sizing,
	...typography,
	...background,
	...border,
	...flexGrid,
};
