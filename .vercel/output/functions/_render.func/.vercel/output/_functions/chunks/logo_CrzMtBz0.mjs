import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BybFMsjH.mjs';
import 'kleur/colors';
import 'clsx';

const $$CpFtDefault = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-contrast-color flex justify-center items-center"> <div class="p-4"> <p id="text1" class="text-white text-12px text-center playfair-display-regular">Esse site não faz parte do Google LLC nem do Facebook Inc. e não oferecemos nenhum tipo de serviço official do governo. Trabalhamos exclusivamente com assessoria jurídica.</p> <p id="text2" class="text-white text-12px text-center playfair-display-regular">Este site respeita o estatuto da Ordem dos Advogados.</p> <p id="text3" class="text-white text-12px text-center playfair-display-regular">Dra. Amanda Ferraz • 60010P • OAB/MG 138358</p> <div class="w-full flex items-center justify-center gap-1 py-2"> <p class="text-white text-12px text-center playfair-display-regular">© 2024 todos os direitos reservados.</p> <a href="/politicas-e-privacidade"> <span class="text-white text-12px text-center playfair-display-regular">Politicas e Privacidade.</span></a> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpFtDefault.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.DXDQOan1.png","width":1465,"height":741,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/logo.png";
							}
							
							return target[name];
						}
					});

export { $$CpFtDefault as $, logo as l };
