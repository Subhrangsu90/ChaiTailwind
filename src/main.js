import { chaiEngine } from "./core/engine.js";

export default chaiEngine;

if (typeof window !== "undefined") {
	if (document.readyState === "loading") {
		window.addEventListener("DOMContentLoaded", () => chaiEngine.init());
	} else {
		chaiEngine.init();
	}
}
