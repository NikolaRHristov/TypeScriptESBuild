/**
 * @module TypeDoc
 *
 */
export default class _Class
	extends (await import("typedoc")).DefaultThemeRenderContext
	implements Type
{
	constructor(
		Theme: DefaultTheme,
		Page: PageEvent<Reflection>,
		Option: Options
	) {
		super(Theme, Page, Option);

		this.init();
	}

	init() {}
}

import type Type from "../../Interface/TypeDoc/Context.js";

import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";
