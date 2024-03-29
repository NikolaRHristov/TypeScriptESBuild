/**
 * @module Build
 *
 */
export default (async (...[File, Option]: Parameters<Type>) => {
	for (const _File of File) {
		for (const __File of await (await import("fast-glob")).default(
			_File.replaceAll("'", "").replaceAll('"', ""),
		)) {
			Pipe.push(__File);
		}
	}

	Pipe.reverse();

	const Configuration = Merge(
		(await import("../Variable/ESBuild.js")).default,
		{
			entryPoints: Object.fromEntries(
				Pipe.map((File) => [
					File.replace("Source/", "")
						.split(".")
						.slice(0, -1.0)
						.join("."),
					File,
				]),
			),
		},
	);

	console.log(
		await (await import("esbuild")).analyzeMetafile(
			(
				await (
					await import("esbuild")
				).build(
					Option?.ESBuild
						? Merge(
								Configuration,
								await (
									await import("../Function/File.js")
								).default(Option.ESBuild),
						  )
						: Configuration,
				)
			)?.metafile ?? "",
			{
				verbose: true,
			},
		),
	);

	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
}) satisfies Type as Type;

import type Type from "../Interface/Build.js";

export const { default: Exec } = await import("../Function/Exec.js");

export const { default: Merge } = await import("../Function/Merge.js");

export const { resolve } = await import("path");

export const Pipe: string[] = [];

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url),
);
