import{readFile as a}from"fs/promises";import{dirname as i}from"path";import{fileURLToPath as e}from"url";var f=async(t,r)=>JSON.parse((await a(`${r?i(e(r??import.meta.url)):"."}/${t}`,"utf-8")).toString());export{f as default};