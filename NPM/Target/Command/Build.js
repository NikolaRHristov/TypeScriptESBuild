import{exec as o}from"child_process";import{deepmerge as p}from"deepmerge-ts";import{build as a}from"esbuild";import m from"fast-glob";import c from"../Configuration/esbuild.js";import f from"../Library/File.js";var P=async(s,e)=>{const r=[];for(const i of s)for(const l of await m(i.replaceAll("'","").replaceAll('"',"")))r.push(l);r.reverse();const t=p(c,{entryPoints:Object.fromEntries(r.map(i=>[i.replace("Source/","").split(".").slice(0,-1).join("."),i]))});await a(e?.esbuild?p(t,await f(e?.esbuild)):t),e?.TypeScript?o(`tsc -p ${e?.TypeScript}`):o("tsc")};export{P as default};