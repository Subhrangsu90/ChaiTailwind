const processed = new WeakSet();
let observer = null;

export function startScanner(processElement) {

	function safeProcess(el) {
		if (processed.has(el)) return;
		processed.add(el);
		processElement(el);
	}

	// Initial scan (one time)
	document.querySelectorAll('[class*="chai-"]').forEach(safeProcess);

	observer = new MutationObserver((mutations) => {

		for (const mutation of mutations) {

			// class attribute changed
			if (mutation.type === "attributes" && mutation.attributeName === "class") {
				safeProcess(mutation.target);
			}

			// new nodes added
			if (mutation.type === "childList") {
				mutation.addedNodes.forEach(node => {

					if (node.nodeType !== 1) return;

					if (node.classList?.value.includes("chai-")) {
						safeProcess(node);
					}
				});
			}
		}

	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ["class"]
	});
}

export function stopScanner() {
	observer?.disconnect();
	observer = null;
}