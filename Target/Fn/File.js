var a=async t=>{if(t.split(".").pop()==="ts"){const{options:i}=(await import("typescript")).convertCompilerOptionsFromJson((await(await import("./JSON.js")).default("../Notation/TypeScript.json",import.meta.url))?.compilerOptions,".");(await import("typescript")).createProgram([t],i,(await import("typescript")).createCompilerHost(i)).emit(),await(await import("fs/promises")).writeFile(t.replace(".ts",".js"),(await import("typescript")).transpile((await(await import("fs/promises")).readFile(t,"utf-8")).toString(),i))}return(await import((await import("url")).fileURLToPath(t).toString().replace(".ts",".js"))).default};export{a as default};
