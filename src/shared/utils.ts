import { marked } from "marked";

async function getDoc(url: string) {
  try {
    const res = await fetchMdFile(url);
    const html = await parseByMarked(res);
    return html;
  } catch (error) {
    console.log(error);
    return "";
  }
}

async function fetchMdFile(url: string) {
  const res = await fetch(`${import.meta.env.BASE_URL}${url}`);
  const md = await res.text();

  // Проверка: если пришёл HTML (а не markdown)
  if (md.trim().startsWith("<!doctype html>")) {
    throw new Error("Not a markdown file or file not found");
  }

  return md;
}

async function parseByMarked(text: string) {
  return marked(text);
}

export { getDoc };
