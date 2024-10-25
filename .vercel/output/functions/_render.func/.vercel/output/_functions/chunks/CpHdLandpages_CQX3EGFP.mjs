import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, s as spreadAttributes, b as createAstro } from './astro/server_BybFMsjH.mjs';
/* empty css                         */
import { l as logo } from './logo_CrzMtBz0.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$CpHdLandpages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CpHdLandpages;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="px-100px relative"> <div id="home" class="section absolute top-8 right-0"></div> <div class="px-24 max-h-124px"> <div class="flex justify-center items-center"> <div class="absolute left-0 ml-6 z-50"> <div class="flex flex-col gap-2"> <div class="flex gap-2"></div> <div class="flex gap-2"><div class="fi fi-br text-xl cursor-pointer"></div><p class="text-xs text-#efece8">Portuguese Version</p></div> </div> </div> <div class="py-4 max-w-180px"> <img${addAttribute(logo.src, "src")} alt="Logo Adv. Amanda Ferraz"> </div> <div class="absolute right-0 mr-6 z-50 flex items-center gap-2" id="menu-trigger"> <div><p id="menu-text" class="playfair-display-bold text-white cursor-pointer"><a href="/">Ir para o site</a></p></div> <div class="bg-#a57c59 rounded-full p-2"> <div id="menu-icon" class="cursor-pointer"> <a href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"${spreadAttributes(props)}> <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"></path></g></svg></a> </div> </div> </div> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpHdLandpages.astro", void 0);

export { $$CpHdLandpages as $ };
