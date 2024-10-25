/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderHead, e as renderComponent, b as createAstro } from '../chunks/astro/server_BybFMsjH.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$CpContactos } from '../chunks/CpContactos_DmCeqQyk.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$CpFtDefault } from '../chunks/logo_CrzMtBz0.mjs';
import { $ as $$CpHdLandpages } from '../chunks/CpHdLandpages_CQX3EGFP.mjs';
export { renderers } from '../renderers.mjs';

const heroimg = new Proxy({"src":"/_astro/amanda_img.C3Y9JJE_.jpeg","width":1066,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/amanda_img.jpeg";
							}
							
							return target[name];
						}
					});

const $$CpHeroNacionalidade = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-100px flex justify-center items-center h-full"> <div class="flex flex-wrap w-full max-w-1200px"> <div class="w-full desktop:w-1/2 mb-8 desktop:flex desktop:flex-col desktop:content-center desktop:justify-center gap-2"> <p class="text-[#efece8] playfair-display-bold text-38px pb-2 pr-10 antialiased hero-title">
Sua jornada rumo à nacionalidade portuguesa.</p> <p class="text-[#efece8] playfair-display-regular text-22px pb-2 pr-10 tracking-wide hero-subtitle">
Se você é filho ou neto de português, não perca a oportunidade de reviver a história da sua família em Portugal, por meio da obtenção da nacionalidade portuguesa. </p> <button id="contact-button" class="font-bold px-6 py-4 bg-[#a57c59] text-[#efece8] text-22px my-2 rounded-md max-w-350px hero-button">
CONTRATAR AGORA
</button> </div> <div class="w-full desktop:w-1/2 flex justify-center"> <div class="max-w-full desktop:max-w-[450px]"> <img class="drop-shadow-2xl ring ring-white ring-offset-4 animate-bounce-alternate"${addAttribute(heroimg.src, "src")} alt="fotografia adv. amanda ferraz"> </div> </div> </div> </div>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpHeroNacionalidade.astro", void 0);

const videoNacionalidade = "/_astro/video-nacionalidade_new.CRgPWdjb.mp4";

const $$CpVideoNacionalidade = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-100px h-full" data-astro-cid-x5kdwpr5> <div class="max-w-1200px m-auto h-full" data-astro-cid-x5kdwpr5> <div data-astro-cid-x5kdwpr5> <div data-astro-cid-x5kdwpr5> <h1 class="text-base playfair-display-bold antialiased leading-12 text-2xl desktop:text-4xl text-center mx-auto py-12" data-astro-cid-x5kdwpr5>Um trabalho focado em auxiliary pessoas a conquistar a nacionalidade portuguesa</h1> </div> <div class="max-w-600px m-auto" data-astro-cid-x5kdwpr5> <!-- Video player --> <video class="border border-4" id="myVideo" width="100%" height="100%" controls data-astro-cid-x5kdwpr5> <source${addAttribute(videoNacionalidade, "src")} type="video/mp4" data-astro-cid-x5kdwpr5>
Your browser does not support the video tag.
</video> </div> <div class="w-full p-6 m-auto flex flex-col items-center gap-2" data-astro-cid-x5kdwpr5> <button class="bg-#6c7c77 py-4 px-6 text-white rounded-md" data-astro-cid-x5kdwpr5>CONTRATAR AGORA</button> <p class="playfair-display-bold text-#efece8 text-18px text-center max-w-800px" data-astro-cid-x5kdwpr5>Não deixe para depois a oportunidade de conquistar a nacionalidade portuguesa. Entre em contato hoje mesmo e dê o primeiro passo rumo a uma nova vida cheia de possibilidades em Portugal e na União Europeia.</p> </div> </div> </div> </div>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpVideoNacionalidade.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="PT-br"> <head><meta charset="utf-8"><link rel="icon" type="image/ico" href="/icon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Usando Astro.generator no .astro --><title>Nacionalidade Portuguesa | Advogada Amanda Ferraz</title><meta name="description" content="Advogada Amanda Ferraz atua predominantemente nas áreas de Nacionalidade Portuguesa, Vistos de Residência, Regularização de Imigrantes em território Português e Direito Imobiliário.">${renderHead()}</head> <body class="relative"> <main> <section class="min-h-screen bg-gradient-to-t from-[#6c7c77] to-[#7f948e]"> ${renderComponent($$result, "CpHdLandpages", $$CpHdLandpages, {})} ${renderComponent($$result, "CpHeroNacionalidade", $$CpHeroNacionalidade, {})} </section> <section class="min-h-screen bg-#a57c59"> ${renderComponent($$result, "CpVideoNacionalidade", $$CpVideoNacionalidade, {})} </section> <section class="min-h-screen"> ${renderComponent($$result, "CpContactos", $$CpContactos, {})} </section> </main> ${renderComponent($$result, "CpFtDefault", $$CpFtDefault, {})} </body></html>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/nacionalidade-portuguesa/index.astro", void 0);

const $$file = "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/nacionalidade-portuguesa/index.astro";
const $$url = "/nacionalidade-portuguesa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
