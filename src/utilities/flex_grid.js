export const flexGrid = {
	// Direction & Wrap
	"flex-row": ["flexDirection"],
	"flex-col": ["flexDirection"],
	wrap: ["flexWrap"], // chai-wrap-wrap

	// Alignment
	justify: ["justifyContent"], // chai-justify-center
	items: ["alignItems"], // chai-items-center
	self: ["alignSelf"], // chai-self-end

	// Sizing & Spacing
	flex: ["flex"], // chai-flex-1
	grow: ["flexGrow"], // chai-grow-1
	shrink: ["flexShrink"], // chai-shrink-0
	gap: ["gap"], // chai-gap-16 (REM scaling)
};
