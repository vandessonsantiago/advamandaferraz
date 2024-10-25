/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderComponent, b as createAstro } from '../../chunks/astro/server_BybFMsjH.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$CpFtDefault } from '../../chunks/logo_CrzMtBz0.mjs';
import { $ as $$CpHdLandpages } from '../../chunks/CpHdLandpages_CQX3EGFP.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  Astro2.params;
  return renderTemplate`<html lang="PT-br"> <head><meta charset="utf-8"><link rel="icon" type="image/ico" href="/icon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Usando Astro.generator no .astro --><title>Blog | Advogada Amanda Ferraz</title><meta name="description" content="Advogada Amanda Ferraz atua predominantemente nas áreas de Nacionalidade Portuguesa, Vistos de Residência, Regularização de Imigrantes em território Português e Direito Imobiliário.">${renderHead()}</head> <body class="relative"> <main> <section class="min-h-screen bg-gradient-to-t from-[#6c7c77] to-[#7f948e]"> ${renderComponent($$result, "CpHdLandpages", $$CpHdLandpages, {})} </section> </main> ${renderComponent($$result, "CpFtDefault", $$CpFtDefault, {})} </body></html>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
