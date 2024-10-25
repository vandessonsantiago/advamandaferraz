/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderComponent, b as createAstro, d as renderHead, g as renderSlot } from '../chunks/astro/server_BybFMsjH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { $ as $$CpContactos } from '../chunks/CpContactos_DmCeqQyk.mjs';
import { l as logo, $ as $$CpFtDefault } from '../chunks/logo_CrzMtBz0.mjs';
/* empty css                                 */
import { useMotionValue, useTransform, motion, animate } from 'framer-motion';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$CpAjuda = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="whats-click hidden desktop:block"> <div class="whats-click bg-green-500 w-fit p-2 rounded-full flex gap-1 justify-center items-center fixed bottom-6 right-4 cursor-pointer z-50"> <div class="i-ic:baseline-whatsapp w-24px h-24px whats-click" style="color: white;"></div> <p id="whats-click" class="text-white whats-click">Precisa de Ajuda?</p> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpAjuda.astro", void 0);

const BannerNacionalidade = new Proxy({"src":"/_astro/banner-nacionalidade.D_cbp7fr.png","width":1029,"height":443,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/banner-nacionalidade.png";
							}
							
							return target[name];
						}
					});

const BannerMobile = new Proxy({"src":"/_astro/banner_amanda_mobile.DWOiEwhx.png","width":440,"height":456,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/banner_amanda_mobile.png";
							}
							
							return target[name];
						}
					});

const $$CpBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="modal-element" class="hidden bg-banner fixed p-2 tablet:p-100px h-full w-full z-50" data-astro-cid-z7t2onrf> <div class="absolute top-8 right-6 z-100 cursor-pointer" id="hide-modal" data-astro-cid-z7t2onrf> <div class="i-ic:round-close w-32px h-32px" style="color: #efece8;" data-astro-cid-z7t2onrf></div> </div> <div class="h-full flex justify-center items-center" data-astro-cid-z7t2onrf> <div data-astro-cid-z7t2onrf><a href="/nacionalidade-portuguesa" data-astro-cid-z7t2onrf> <img class="rounded-lg cursor-pointer block tablet:hidden"${addAttribute(BannerMobile.src, "src")} alt="Banner Nacionalidade" data-astro-cid-z7t2onrf> <img class="hidden tablet:block rounded-lg cursor-pointer"${addAttribute(BannerNacionalidade.src, "src")} alt="Banner Nacionalidade" data-astro-cid-z7t2onrf> </a> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpBanner.astro", void 0);

const query = `query {
      posts {
          edges {
            node {
              title
              excerpt
              date
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            tags {
              edges {
                node {
                  name
                }
              }
            }
              content
            }
          }
        }
      }`;
const headers = {
  "Content-Type": "application/json"
  // Adicione cabeçalhos CORS se necessário
};
function BlogComponnent() {
  const urlApi = "https://blog.advogadaamandaferraz.com/graphql";
  console.log(urlApi);
  const [allposts, setAllPosts] = useState();
  useEffect(() => {
    async function GetPosts() {
      const response = await fetch(urlApi, {
        headers,
        method: "POST",
        body: JSON.stringify({
          query
        })
      });
      const data = await response.json();
      console.log(data);
      setAllPosts(data?.data);
    }
    GetPosts();
  }, []);
  return /* @__PURE__ */ jsx("div", { children: allposts && allposts.posts.edges.length > 0 && /* @__PURE__ */ jsx("div", { className: "bg-greenColor bg-opacity-40 py-4", children: /* @__PURE__ */ jsx("div", { className: "mx-auto desktop:max-w-5xl desktop:flex gap-8 mb-10", children: allposts.posts.edges.slice(0, 3).map((post, index) => /* @__PURE__ */ jsx("a", { href: `/blog/${post.node.slug}`, children: /* @__PURE__ */ jsxs("div", { className: "mx-4 desktop:mb-0 mb-4 transition-transform transform hover:scale-105", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative desktop:w-80 h-40", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: post.node.featuredImage.node.sourceUrl,
          alt: post.node.title,
          className: "rounded-t-lg w-full h-full object-none absolute inset-0 mx-auto",
          style: { objectFit: "cover", objectPosition: "center" }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: " absolute w-full bottom-[-38px] flex justify-center z-20 p-2", children: /* @__PURE__ */ jsx("div", { className: "bg-#7f948e rounded-full p-1", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "../src/images/logo-blog.png",
          alt: "Logo Blog",
          className: "rounded-t-lg w-52px h-52px"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative desktop:w-80 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose", children: post.node.categories.edges.map((category) => /* @__PURE__ */ jsx("span", { children: category.node.name }, category.node.id)) }),
      /* @__PURE__ */ jsx("div", { className: "border-b-2 border-primary-500 w-8" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 uppercase text-gray-600 italic font-semibold text-xs", children: format(new Date(post.node.date), "dd/MM/yyyy") }),
      /* @__PURE__ */ jsx("h2", { className: " mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300", children: post.node.title })
    ] })
  ] }) }, index)) }) }) });
}

const $$CpBlog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Desktop -->${maybeRenderHead()}<div class="hidden tablet:block p-100px h-full w-full "> <div class="py-8"> <div class="pb-16 flex flex-col gap-2 items-center"> <h3 id="title-blog" class="text-#b0604b playfair-display-bold antialiased text-2xl desktop:text-48px text-center mx-auto">Perspectivas Jurídicas</h3> <p id="subtitle-blog" class="pt-4px playfair-display-bold text-24px text-#efece8 text-center">Soluções Legais Inteligentes.</p> </div> <div> ${renderComponent($$result, "BlogComponnent", BlogComponnent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/react/CpBlog.jsx", "client:component-export": "default" })} </div> <div class="flex justify-center pt-8"> <p id="text-blog" class="playfair-display-bold text-18px text-#efece8 text-center">Informações importantes e atualizadas sobre Nacionalidade Portuguesa, Vistos de <br> Residência, Regularização de Imigrantes em território Português e Direito Imobiliário.</p> </div> </div> </div> <!-- Mobile --> <div class="p-2px h-full w-full tablet:hidden"> <div class="py-8"> <div class="pb-16 flex flex-col gap-2 items-center"> <h3 id="title-blog" class="text-#b0604b playfair-display-bold antialiased text-2xl desktop:text-48px text-center">Perspectivas Jurídicas</h3> <p id="subtitle-blog" class="pt-4px playfair-display-bold text-24px text-#efece8 text-center">Soluções Legais Inteligentes.</p> </div> <div> ${renderComponent($$result, "BlogComponnent", BlogComponnent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/react/CpBlog.jsx", "client:component-export": "default" })} </div> <div class="flex justify-center pt-8"> <p id="text-blog" class="playfair-display-bold text-18px text-#efece8 text-center">Informações importantes e atualizadas sobre Nacionalidade Portuguesa, Vistos de <br> Residência, Regularização de Imigrantes em território Português e Direito Imobiliário.</p> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpBlog.astro", void 0);

const image1$1 = new Proxy({"src":"/_astro/ambiente.C_Z5uSfz.png","width":440,"height":380,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/ambiente.png";
							}
							
							return target[name];
						}
					});

const image2 = new Proxy({"src":"/_astro/estudos.D8bsE8k3.png","width":440,"height":380,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/estudos.png";
							}
							
							return target[name];
						}
					});

const image3 = new Proxy({"src":"/_astro/comunica.-SA2kBEs.png","width":440,"height":380,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/comunica.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$CpConduta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CpConduta;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-20px tablet:p-100px w-full flex items-center justify-center" data-astro-cid-v3rknbde> <div class="w-full flex flex-col items-center justify-center" data-astro-cid-v3rknbde> <div class="py-8 tablet:pb-16 flex justify-center" data-astro-cid-v3rknbde> <h3 id="section-title-conduta" class="text-[#a57c59] playfair-display-bold font-bold antialiased text-[28px] tablet:text-2xl desktop:text-[48px] text-center w-fit mx-auto" data-astro-cid-v3rknbde>
Conduta Professional
</h3> </div> <div class="flex flex-wrap gap-14 justify-items-center py-2" data-astro-cid-v3rknbde> <div id="card1" class="tablet:max-w-340px" data-astro-cid-v3rknbde> <h3 id="toast-view" class="uppercase text-#6c7c77 text-[19px] playfair-display-bold py-2 text-center tablet:text-left" data-astro-cid-v3rknbde>Expertise Atualizada</h3> <img class="grayscale-0 shadow-lg w-full"${addAttribute(image2.src, "src")} alt="Estudos" data-astro-cid-v3rknbde> <p class="playfair-display-bold text-[16px] pt-4 text-#675f5e text-center tablet:text-left" data-astro-cid-v3rknbde>Estamos sempre atualizados com as mais recentes mudanças legais, garantindo que nossos clientes recebam orientações precisas e relevantes. Esse compromisso com a atualização constante nos permite oferecer soluções que estão em sintonia com as práticas jurídicas atuais.</p> </div> <div id="card2" class="tablet:max-w-[370px]" data-astro-cid-v3rknbde> <h3 class="uppercase text-[#6c7c77] text-[19px] playfair-display-bold py-2 text-center tablet:text-left" data-astro-cid-v3rknbde>Diálogo Claro</h3> <img class="grayscale-0 shadow-lg w-full"${addAttribute(image3.src, "src")} alt="comunica" data-astro-cid-v3rknbde> <p class="playfair-display-bold text-[16px] pt-4 text-#675f5e text-center tablet:text-left" data-astro-cid-v3rknbde>Priorizamos a comunicação simples e direta, garantindo que nossos clientes entendam cada etapa do processo. Explicamos todos os detalhes de maneira acessível, eliminando dúvidas e promovendo um entendimento claro.</p> </div> <div id="card3" class="tablet:max-w-[370px]" data-astro-cid-v3rknbde> <h3 class="uppercase text-[#6c7c77] text-[19px] playfair-display-bold py-2 text-center tablet:text-left" data-astro-cid-v3rknbde>Engajamento Pessoal</h3> <img class="grayscale-0 shadow-lg w-full"${addAttribute(image1$1.src, "src")} alt="ambiente" data-astro-cid-v3rknbde> <p class="playfair-display-bold text-[16px] pt-4 text-#675f5e text-center tablet:text-left" data-astro-cid-v3rknbde>Unimos nosso conhecimento atualizado com uma comunicação transparente para oferecer um serviço jurídico eficiente. Garantimos que os clientes estejam bem informados e seguros em todas as decisões tomadas.</p> </div> </div> </div> </div> <!-- Toast Container --> <div id="toast-container" class="fixed bottom-20 right-4 space-y-4 z-50" data-astro-cid-v3rknbde> <!-- Toast 1 --> <div id="toast-1" class="toast hidden flex items-center bg-white p-4 rounded-lg shadow-lg transition-opacity duration-500 max-w-350px" data-astro-cid-v3rknbde> <img id="toast-1-photo" src="" alt="Client Photo" class="w-12 h-12 rounded-full mr-4" data-astro-cid-v3rknbde> <div data-astro-cid-v3rknbde> <div id="toast-1-name" class="text-sm font-bold" data-astro-cid-v3rknbde>name do Cliente 1</div> <div class="flex items-center" data-astro-cid-v3rknbde> <span id="toast-1-stars" class="text-yellow-500" data-astro-cid-v3rknbde>⭐⭐⭐⭐⭐</span> <span id="toast-1-date" class="text-xs text-gray-500 ml-2" data-astro-cid-v3rknbde>Há um mês</span> </div> <div id="toast-1-comment" class="text-14px" data-astro-cid-v3rknbde>Comentário do cliente 1...</div> </div> </div>  <!-- Client-side script --> </div>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpConduta.astro", void 0);

const $$CpHdDefault = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Desktop -->${maybeRenderHead()}<div class="tablet:px-100px relative"> <div id="home" class="section absolute top-8 right-0"></div> <div class="tablet:px-24 max-h-60px tablet:max-h-124px"> <div class="flex justify-center items-center"> <div class="absolute left-0 ml-6 z-50"> <div class="flex flex-col gap-2"> <div class="flex gap-2"><div class="fi fi-us text-xl cursor-pointer"></div><p class="hidden tablet:block text-xs text-#efece8">English Version</p></div> <div class="flex gap-2"><div class="fi fi-br text-xl cursor-pointer"></div><p class="hidden tablet:block text-xs text-#efece8">Portuguese Version</p></div> </div> </div> <div class="py-4 max-w-120px tablet:max-w-180px"> <img${addAttribute(logo.src, "src")} alt="Logo Adv. Amanda Ferraz"> </div> <div class="fixed right-0 mr-6 z-50 flex items-center gap-2" id="menu-trigger"> <div><p id="menu-text" class="playfair-display-bold text-white hidden">Home</p></div> <div class="bg-#a57c59 rounded-full p-2"> <div id="menu-icon" class="i-ic:round-menu w-32px h-32px" style="color: #efece8;"></div> </div> </div> </div> </div> </div>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpHdDefault.astro", void 0);

const bannerMentoria = new Proxy({"src":"/_astro/banner-mentoria.D6eR1FHQ.gif","width":640,"height":640,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/banner-mentoria.gif";
							}
							
							return target[name];
						}
					});

const $$CpHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Desktop -->${maybeRenderHead()}<div class="hidden tablet:p-100px tablet:flex justify-center items-center h-full" data-astro-cid-bvfs2xbu> <div class="flex flex-wrap w-full" data-astro-cid-bvfs2xbu> <div class="w-full desktop:w-1/2 mb-8 desktop:flex desktop:flex-col desktop:content-center desktop:justify-center" data-astro-cid-bvfs2xbu> <p class="text-[#efece8] playfair-display-bold text-32px pb-2 pr-10 antialiased hero-title" data-astro-cid-bvfs2xbu>
Oferecemos suporte completo para ajudar você a viver de forma legal e tranquila em Portugal, além de solucionar qualquer problema jurídico que possa surgir ao longo do caminho.
</p> <p class="text-[#efece8] playfair-display-regular text-18px pb-2 pr-10 tracking-wide hero-subtitle" data-astro-cid-bvfs2xbu>
Nossa equipe de advogados está preparada para atender às mais diversas demandas em Portugal, combinando conhecimento teórico atualizado com experiência prática.
</p> <button id="contact-button" class="uppercase font-bold px-6 py-4 bg-[#a57c59] text-[#efece8] text-22px my-2 rounded-lg max-w-350px hero-button" data-astro-cid-bvfs2xbu>
Entre em Contato
</button> </div> <div class="w-full desktop:w-1/2 flex justify-center" data-astro-cid-bvfs2xbu> <div id="Banner-hero" class="relative max-w-full desktop:max-w-[640px] flex flex-col items-center" data-astro-cid-bvfs2xbu> <!-- Aqui começa a alternância de imagens --> <img id="hero-img" class="drop-shadow-2xl ring ring-white ring-offset-4 animate-bounce-alternate"${addAttribute(bannerMentoria.src, "src")} alt="fotografia adv. amanda ferraz" data-astro-cid-bvfs2xbu> <!-- Botão que só aparece com o GIF --> <button id="button-banner" class="absolute bottom-4 uppercase font-bold px-6 py-4 bg-[#f59e0b] text-[#efece8] text-22px my-2 rounded-lg max-w-350px hero-button animate-pulse hidden" data-astro-cid-bvfs2xbu> <a id="btn-banner" href="/#mentoria" data-astro-cid-bvfs2xbu>SAIBA MAIS</a> </button> </div> </div> </div> </div> <!-- Mobile --> <div class="px-2 py-22 flex justify-center items-center h-full tablet:hidden" data-astro-cid-bvfs2xbu> <div class="flex flex-wrap w-full" data-astro-cid-bvfs2xbu> <div class="w-full flex flex-col justify-center items-center" data-astro-cid-bvfs2xbu> <p class="text-[#efece8] playfair-display-bold text-24px antialiased hero-title text-center" data-astro-cid-bvfs2xbu>
Oferecemos suporte completo para ajudar você a viver de forma legal e tranquila em Portugal, além de solucionar qualquer problema jurídico que possa surgir ao longo do caminho.
</p> <p class="text-[#efece8] playfair-display-regular text-18px tracking-wide hero-subtitle text-center" data-astro-cid-bvfs2xbu>
Nossa equipe de advogados está preparada para atender às mais diversas demandas em Portugal, combinando conhecimento teórico atualizado com experiência prática.
</p> <div class="w-full flex justify-center py-4" data-astro-cid-bvfs2xbu> <button id="contact-button" class="uppercase font-bold px-6 py-4 bg-[#a57c59] text-[#efece8] text-22px my-2 rounded-lg max-w-350px hero-button" data-astro-cid-bvfs2xbu>
Entre em Contato
</button> </div> </div> <div class="py-4 px-2 w-full flex justify-center" data-astro-cid-bvfs2xbu> <div id="Banner-hero" class="relative max-w-full desktop:max-w-[640px] flex flex-col items-center" data-astro-cid-bvfs2xbu> <!-- Aqui começa a alternância de imagens --> <img id="hero-img" class="drop-shadow-2xl ring ring-white ring-offset-4 animate-bounce-alternate"${addAttribute(bannerMentoria.src, "src")} alt="fotografia adv. amanda ferraz" data-astro-cid-bvfs2xbu> <!-- Botão que só aparece com o GIF --> <button id="button-banner" class="absolute bottom-4 uppercase font-bold px-6 py-4 bg-[#f59e0b] text-[#efece8] text-22px my-2 rounded-lg max-w-350px hero-button animate-pulse hidden" data-astro-cid-bvfs2xbu> <a href="/#mentoria" data-astro-cid-bvfs2xbu>SAIBA MAIS</a> </button> </div> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpHero.astro", void 0);

const perfil = new Proxy({"src":"/_astro/amanda-instagram.Cufx_68I.jpg","width":150,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/amanda-instagram.jpg";
							}
							
							return target[name];
						}
					});

const perfil2 = new Proxy({"src":"/_astro/perfil-mariana.QvZC9NqT.jpg","width":150,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/perfil-mariana.jpg";
							}
							
							return target[name];
						}
					});

const video = "/_astro/video-mentoria_new.BM8wvL8g.mp4";

const $$CpMentoria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-2 tablet:p-100px h-full w-full flex justify-center items-center" data-astro-cid-gamstben> <div class="w-full" data-astro-cid-gamstben> <div class="w-full pt-8 tablet:py-0" data-astro-cid-gamstben> <h1 id="section-title-mentoria" class="text-titles playfair-display-bold antialiased leading-12 text-28px desktop:text-4xl text-center" data-astro-cid-gamstben>Turma II: Fortaleça Sua Carreira com <br data-astro-cid-gamstben> Quem Entende do Assunto!</h1> </div> <div class="flex flex-col justify-center items-center py-12" data-astro-cid-gamstben> <div class="w-full max-w-1200px h-full tablet:flex tablet:flex-row-reverse justify-between items-center gap-8 pb-24" data-astro-cid-gamstben> <div class="min-w-[376px] flex flex-col items-center justify-center" data-astro-cid-gamstben> <div class="w-full h-full rounded-lg max-w-[380px] bg-white shadow-2xl" data-astro-cid-gamstben> <div class="p-3 flex gap-1 border-black border-b-2" data-astro-cid-gamstben> <div class="i-bi:circle-fill w-14px h-14px" style="color: #e11d48;" data-astro-cid-gamstben></div> <div class="i-bi:circle-fill w-14px h-14px" style="color: #f59e0b;" data-astro-cid-gamstben></div> <div class="i-bi:circle-fill w-14px h-14px" style="color: #22c55e;" data-astro-cid-gamstben></div> </div> <div class="p-2" data-astro-cid-gamstben> <div class="" data-astro-cid-gamstben> <!-- Video player --> <video id="myVideo" width="100%" height="100%" controls data-astro-cid-gamstben> <source${addAttribute(video, "src")} type="video/mp4" data-astro-cid-gamstben>
Your browser does not support the video tag.
</video> </div> </div> </div> <div class="my-4 p-2 w-full flex flex-col items-start border-black border-2" data-astro-cid-gamstben> <div class="w-full" data-astro-cid-gamstben> <h2 id="t20" class="text-subtitle text-xl text-center" data-astro-cid-gamstben>Investimento</h2> </div> <div class="flex flex-col justify-center items-center w-full" data-astro-cid-gamstben> <p class="text-base" data-astro-cid-gamstben>€850,00</p> <p class="text-base" data-astro-cid-gamstben>R$5.300,00</p> <p id="t21" class="text-base" data-astro-cid-gamstben>À vista ou em até 6x.</p> <p id="t22" class="text-base py-2" data-astro-cid-gamstben>Início: 17/09/2024</p> </div> </div> <div class="py-4" data-astro-cid-gamstben> <button id="button-mentoria" class="bg-#6c7c77 py-4 px-6 text-white rounded-md cursor-pointer" data-astro-cid-gamstben>INSCRIÇÕES ABERTAS</button> </div> <p id="t24" class="max-w-380px text-base text-xs" data-astro-cid-gamstben>Exclusivo para Advogados(as) inscritos na Ordem dos Advogados de Portugal, que querem aperfeiçoar sua prática jurídica.</p> </div> <div class="py-4 px-2" data-astro-cid-gamstben> <div class="w-full flex flex-col justify-center" data-astro-cid-gamstben> <div data-astro-cid-gamstben> <h2 id="t1" class="text-titles playfair-display-bold antialiased text-[22px]" data-astro-cid-gamstben>MENTORIA ADVOGADAS EM AÇÃO</h2> <p id="t2" class="text-base text-center tablet:text-start" data-astro-cid-gamstben>Aprenda a prática jurídica em imigração e nacionalidade portuguesa com duas especialistas.</p> </div> <div data-astro-cid-gamstben> <h2 id="t3" class="text-titles playfair-display-bold antialiased text-[22px] py-4 text-center tablet:text-start" data-astro-cid-gamstben>O Que Você vai Aprender?</h2> <div class="tablet:flex gap-4" data-astro-cid-gamstben> <div class="w-full max-w-350px" data-astro-cid-gamstben> <div data-astro-cid-gamstben> <div class="flex items-center justify-center tablet:justify-start py-2" data-astro-cid-gamstben> <div class="relative w-10 h-10" data-astro-cid-gamstben> <img class="w-full h-full rounded-full"${addAttribute(perfil2.src, "src")} alt="Profile Image" data-astro-cid-gamstben> <div class="absolute inset-0 rounded-full ring-4 ring-pink-500/50" data-astro-cid-gamstben></div> </div> <div id="toast-1-name" class="ml-2 text-xs font-bold" data-astro-cid-gamstben>marianatozoni.adv</div> <div class="i-ic:baseline-verified w-4 h-4" style="color: #0095f6;" data-astro-cid-gamstben></div> </div> <h2 id="t4" class="text-subtitle playfair-display-bold antialiased text-[16px] text-center tablet:text-start" data-astro-cid-gamstben>Vistos e Regularização:</h2> <div class="max-w-350px flex flex-col justify-center items-center tablet:justify-start tablet:items-start" data-astro-cid-gamstben> <p id="t5" class="text-14px text-center tablet:text-start" data-astro-cid-gamstben>Captação de clientes e redes sociais</p> <p id="t6" class="text-14px text-center tablet:text-start" data-astro-cid-gamstben>Vistos D7, Nômade Digital e Acompanhamento Familiar</p> <p id="t7" class="text-14px text-center tablet:text-start" data-astro-cid-gamstben>Regularização sem visto e proteção de direitos no tribunal</p> </div> </div> </div> <div class="w-full max-w-350px" data-astro-cid-gamstben> <div data-astro-cid-gamstben> <div class="flex items-center justify-center tablet:justify-start py-2" data-astro-cid-gamstben> <div class="relative w-10 h-10" data-astro-cid-gamstben> <img class="w-full h-full rounded-full"${addAttribute(perfil.src, "src")} alt="Profile Image" data-astro-cid-gamstben> <div class="absolute inset-0 rounded-full ring-4 ring-pink-500/50" data-astro-cid-gamstben></div> </div> <div id="toast-1-name" class="ml-2 text-xs font-bold" data-astro-cid-gamstben>advogadaamandaferraz</div> <div class="i-ic:baseline-verified w-4 h-4" style="color: #0095f6;" data-astro-cid-gamstben></div> </div> <h2 id="t8" class="text-subtitle playfair-display-bold antialiased text-[16px] text-center tablet:text-start" data-astro-cid-gamstben>Nacionalidade Portuguesa:</h2> </div> <div class="max-w-350px" data-astro-cid-gamstben> <p id="t9" class="text-14px text-center tablet:text-start" data-astro-cid-gamstben>Legislação e processos comuns</p> <p id="t10" class="text-14px text-center tablet:text-start" data-astro-cid-gamstben>Transcrição de casamento, nacionalidade por atribuição e aquisição</p> </div> </div> </div> <div data-astro-cid-gamstben></div> </div> </div> <div class="flex flex-col items-center tablet:items-start py-4" data-astro-cid-gamstben> <div data-astro-cid-gamstben> <h2 id="t11" class="text-titles playfair-display-bold antialiased text-[22px] text-center tablet:text-start" data-astro-cid-gamstben>Como Funciona?</h2> </div> <div data-astro-cid-gamstben> <div class="text-center tablet:text-start" data-astro-cid-gamstben> <h2 id="t12" data-astro-cid-gamstben>10 encontros ao vivo</h2> <p id="t13" class="text-base" data-astro-cid-gamstben>Duas vezes por semana, com gravação disponível.</p> </div> <div class="text-center tablet:text-start" data-astro-cid-gamstben> <h2 id="t14" data-astro-cid-gamstben>Materiais completos</h2> <p id="t15" class="text-base" data-astro-cid-gamstben>Modelos de contratos, minutas e propostas.</p> </div> <div class="text-center tablet:text-start" data-astro-cid-gamstben> <h2 id="t16" data-astro-cid-gamstben>Grupo exclusivo no WhatsApp</h2> <p id="t17" class="text-base" data-astro-cid-gamstben>Debate de casos práticos e troca de conhecimentos.</p> </div> </div> </div> <div class="max-w-480px" data-astro-cid-gamstben> <h2 id="t18" class="text-titles playfair-display-bold antialiased text-[22px] text-center tablet:text-start" data-astro-cid-gamstben>Qual o Resultado Esperado?</h2> <p id="t19" class="text-base text-center tablet:text-start" data-astro-cid-gamstben>Atue com segurança e confiança em processos de imigração e nacionalidade, elevando sua carreira jurídica.</p> </div> </div> </div> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpMentoria.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="accordion-container border-4 border-#efece8 tablet:p-2" data-astro-cid-wp7yhrsz> <!-- O conteúdo do acordeão será injetado aqui pelo JavaScript --> <div id="accordion-content" data-astro-cid-wp7yhrsz> <!-- Os items do acordeão serão adicionados aqui pelo JavaScript --> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/Accordion.astro", void 0);

function Indice() {
  const countClientes = useMotionValue(20);
  const countAnos = useMotionValue(2);
  const countResolvidos = useMotionValue(30);
  const clientes = useTransform(countClientes, Math.round);
  const anos = useTransform(countAnos, Math.round);
  const resolvidos = useTransform(countResolvidos, Math.round);
  const refToComponentClientes = useRef(null);
  const refToComponentAnos = useRef(null);
  const refToComponentResolvidos = useRef(null);
  const startAnimations = () => {
    animate(countClientes, 690, { duration: 10 });
    animate(countAnos, 12, { duration: 10 });
    animate(countResolvidos, 98, { duration: 10 });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimations();
          }
        });
      },
      { threshold: 0.3 }
      // Inicia quando 30% da seção estiver visível
    );
    if (refToComponentClientes.current) {
      observer.observe(refToComponentClientes.current);
    }
    if (refToComponentAnos.current) {
      observer.observe(refToComponentAnos.current);
    }
    if (refToComponentResolvidos.current) {
      observer.observe(refToComponentResolvidos.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "desktop:mx-auto desktop:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "desktop:flex items-center desktop:mt-8", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: refToComponentClientes,
        className: "desktop:w-1/3 flex justify-center p-4",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-1", children: [
            /* @__PURE__ */ jsxs("h1", { className: "playfair-display-bold antialiased text-#efece8 text-5xl", children: [
              "+ ",
              /* @__PURE__ */ jsx("span", { id: "indiceContent1", children: "de" })
            ] }),
            /* @__PURE__ */ jsx(motion.h1, { className: "text-center playfair-display-bold antialiased text-#efece8 text-5xl", children: clientes })
          ] }),
          /* @__PURE__ */ jsx("h4", { id: "indiceTitle1", className: "playfair-display-bold antialiased text-#efece8", children: "CLIENTES ATENDIDOS" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: refToComponentAnos,
        className: "desktop:w-1/3 flex justify-center p-4",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-1", children: [
            /* @__PURE__ */ jsxs("h1", { className: "playfair-display-bold antialiased text-#efece8 text-5xl", children: [
              "+ ",
              /* @__PURE__ */ jsx("span", { id: "indiceContent2", children: "de" })
            ] }),
            /* @__PURE__ */ jsx(motion.h1, { className: "text-center playfair-display-bold antialiased text-#efece8 text-5xl", children: anos })
          ] }),
          /* @__PURE__ */ jsx("h4", { id: "indiceTitle2", className: "playfair-display-bold antialiased text-#efece8", children: "ANOS DE EXPERIÊNCIA" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: refToComponentResolvidos,
        className: "desktop:w-1/3 flex justify-center p-4",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-1", children: [
            /* @__PURE__ */ jsx(motion.h1, { className: "text-center playfair-display-bold antialiased text-#efece8 text-5xl", children: resolvidos }),
            /* @__PURE__ */ jsx("h1", { className: "playfair-display-bold antialiased text-#efece8 text-3xl", children: "%" })
          ] }),
          /* @__PURE__ */ jsx("h4", { id: "indiceTitle3", className: "playfair-display-bold antialiased text-#efece8", children: "CASOS RESOLVIDOS" })
        ] })
      }
    )
  ] }) });
}

const $$CpServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Desktop -->${maybeRenderHead()}<div class="tablet:p-100px h-full flex justify-center items-center tablet:p-4"> <div class="max-w-1200px w-full h-full tablet:p-4 tablet:m-4 servicesCP"> <div class="w-full flex flex-col items-center justify-center h-full"> <div class="flex items-center py-8 justify-center tablet:p-4 tablet:m-4"> <h3 id="section-title" class="text-#efece8 playfair-display-bold font-bold antialiased text-28px tablet:text-48px text-center">
Nossos Serviços
</h3> </div> <div class="w-full tablet:p-8 flex flex-col justify-center items-center relative"> ${renderComponent($$result, "Accordion", $$Accordion, {})} ${renderComponent($$result, "Indice", Indice, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/react/CpIndices", "client:component-export": "default" })} </div> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpServices.astro", void 0);

const image1 = new Proxy({"src":"/_astro/amanda-sobre.IuVIvg24.png","width":720,"height":860,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/amanda-sobre.png";
							}
							
							return target[name];
						}
					});

const post1 = new Proxy({"src":"/_astro/post1.D-UdXvTX.jpeg","width":1081,"height":1081,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/images/post1.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$CpSobre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CpSobre;
  Astro2.props;
  return renderTemplate`<!-- Componente Responsivo -->${maybeRenderHead()}<div class="bg-#171b1a relative pr-0 tablet:pr-100px" data-astro-cid-jogprak6> <div class="flex flex-col tablet:flex-row justify-center tablet:h-screen" data-astro-cid-jogprak6> <!-- Imagem desktop e tablet --> <div class="hidden tablet:block desktop:flex desktop:justify-end" data-astro-cid-jogprak6> <img${addAttribute(image1.src, "src")} alt="Fotografia Adv. Amanda Ferraz" data-astro-cid-jogprak6> </div> <!-- Imagem mobile --> <div class="tablet:hidden" data-astro-cid-jogprak6> <img${addAttribute(image1.src, "src")} alt="Fotografia Adv. Amanda Ferraz" data-astro-cid-jogprak6> </div> <div class="flex flex-col justify-center" data-astro-cid-jogprak6> <div class="flex flex-col justify-center items-center content-center" data-astro-cid-jogprak6> <h3 id="section-title-sobre" class="text-[#a57c59] playfair-display-bold font-bold antialiased text-2xl desktop:text-[48px] text-center w-fit mb-6 my-4 mx-auto" data-astro-cid-jogprak6>
Sobre Nós
</h3> <p id="intro-paragraph" class="playfair-display-bold text-#efece8 text-[28px] text-center" data-astro-cid-jogprak6>
Nosso time de advogados está preparado para atender <br class="hidden tablet:block" data-astro-cid-jogprak6> a uma ampla variedade de necessidades.
</p> <p id="lawyer-registration" class="playfair-display-bold text-#efece8 text-[12px] text-center" data-astro-cid-jogprak6>
Dra. Amanda Ferraz • 60010P • OAB/MG 138358
</p> <div class="flex flex-col gap-8 py-16 desktop:flex desktop:flex-row" data-astro-cid-jogprak6> <p id="lawyer-description" class="playfair-display-regular text-#efece8 text-[16px] max-w-[350px] text-center tablet:text-left" data-astro-cid-jogprak6>
Advogada inscrita na Ordem dos Advogados de Portugal e na Ordem dos Advogados do Brasil, atuo no Direito Internacional com ampla experiência. Utilizo meu conhecimento especializado para apoiar estrangeiros que desejam residir e trabalhar legalmente em Portugal, com foco em áreas como Nacionalidade Portuguesa, Vistos de Residência, Regularização de Imigrantes e Direito Imobiliário.
</p> <p id="lawyer-education" class="playfair-display-regular text-#efece8 text-[16px] max-w-[350px] text-center tablet:text-left" data-astro-cid-jogprak6>
Graduada em Direito pela Pontifícia Universidade Católica, sou especialista em Direito do Trabalho pelo Instituto Newton Paiva e mestre em Direito Judiciário pela Universidade do Minho. Busco sempre a eficiência e simplicidade em minha abordagem para oferecer soluções eficazes aos meus clientes.
</p> </div> </div> <div class="flex flex-col items-center gap-2 pb-8" data-astro-cid-jogprak6> <div id="instagram-icon" class="i-fa:instagram w-[34px] h-[34px] cursor-pointer z-10" style="color: #a57c59;" data-astro-cid-jogprak6></div> <p id="instaText1" class="text-#efece8" data-astro-cid-jogprak6>Já me segue no instagram?</p> <p id="instaText2" class="text-center text-#efece8 text-[14px]" data-astro-cid-jogprak6>
Nacionalidade Portuguesa e Imigração. </p> <p id="instaText3" class="text-center text-#efece8 text-[14px]" data-astro-cid-jogprak6>Sua jornada rumo à Nacionalidade Portuguesa.</p> </div> </div> </div> </div> <!-- Toast Container --> <div id="toast-instagram" class="absolute bottom-4 left-4 space-y-4" data-astro-cid-jogprak6> <!-- Toast 1 --> <div id="toast-1-instagram" class="toastInst flex flex-col items-center bg-white p-3 rounded-lg shadow-lg transition-opacity duration-500 max-w-[260px] w-full z-20" data-astro-cid-jogprak6> <div class="w-full flex justify-between items-center" data-astro-cid-jogprak6> <div class="flex items-center" data-astro-cid-jogprak6> <div class="relative w-10 h-10" data-astro-cid-jogprak6> <img class="w-full h-full rounded-full"${addAttribute(perfil.src, "src")} alt="Profile Image" data-astro-cid-jogprak6> <div class="absolute inset-0 rounded-full ring-4 ring-pink-500/50" data-astro-cid-jogprak6></div> </div> <div id="toast-1-name" class="ml-2 text-xs font-bold" data-astro-cid-jogprak6>advogadaamandaferraz</div> <div class="i-ic:baseline-verified w-4 h-4" style="color: #0095f6;" data-astro-cid-jogprak6></div> </div> <div data-astro-cid-jogprak6> <div class="i-ic:baseline-more-horiz w-5 h-5" style="color: black;" data-astro-cid-jogprak6></div> </div> </div> <div class="flex items-center py-3" data-astro-cid-jogprak6> <img class="w-full h-auto rounded-md"${addAttribute(post1.src, "src")} alt="Post Image" data-astro-cid-jogprak6> </div> <div class="w-full flex justify-between items-center" data-astro-cid-jogprak6> <div class="flex gap-2" data-astro-cid-jogprak6> <div class="i-ic:baseline-favorite w-5 h-5" style="color: red;" data-astro-cid-jogprak6></div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="transform: scaleX(-1);" data-astro-cid-jogprak6> <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" data-astro-cid-jogprak6></path> </svg> <div class="i-bi:send w-5 h-5" style="color: black;" data-astro-cid-jogprak6></div> </div> <div data-astro-cid-jogprak6> <div class="i-ic:baseline-turned-in w-5 h-5" style="color: black;" data-astro-cid-jogprak6></div> </div> </div> </div> </div>  `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpSobre.astro", void 0);

const $$Astro = createAstro();
const $$LayoutDefault = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutDefault;
  return renderTemplate`<html lang="PT-br"> <head><meta charset="utf-8"><link rel="icon" type="image/ico" href="/icon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Usando Astro.generator no .astro --><title>Página Inicial | Advogada Amanda Ferraz</title><meta name="description" content="Advogada Amanda Ferraz atua predominantemente nas áreas de Nacionalidade Portuguesa, Vistos de Residência, Regularização de Imigrantes em território Português e Direito Imobiliário.">${renderHead()}</head> <body class="relative"> <!-- Menu Overlay --> <div id="menu-contactos-section" class="hidden absolute z-100 h-screen w-screen bg-initial-hover"> <div class="absolute top-8 right-6 z-100 cursor-pointer" id="menu-close"> <div class="i-ic:round-close w-32px h-32px" style="color: #efece8;"></div> </div> <div class="h-screen flex justify-center items-center content-center relative"> <div class="flex flex-col tablet:flex-row gap-16 h-full justify-center items-center"> <a href="#condutas" class="menu-link"> <div class="flex flex-col items-center"> <div class="i-ic:round-auto-awesome w-45px h-45px" style="color: #efece8;"></div> <span id="menu-contactos-condutas" class="link text-5xl playfair-display-bold text-#efece8">Condutas</span> </div> </a> <a href="#services" class="menu-link"> <div class="flex flex-col items-center"> <div class="i-ic:baseline-balance w-45px h-45px" style="color: #efece8;"></div> <span id="menu-contactos-servicos" class="link text-5xl playfair-display-bold text-#efece8">Serviços</span> </div> </a> <a href="#sobre" class="menu-link"> <div class="flex flex-col items-center"> <div class="i-ic:baseline-portrait w-45px h-45px" style="color: #efece8;"></div> <span id="menu-contactos-sobre" class="link text-5xl playfair-display-bold text-#efece8">Sobre</span> </div> </a> <a href="#blog" class="menu-link"> <div class="flex flex-col items-center"> <div class="i-bi:type-bold w-45px h-45px" style="color: #efece8;"></div> <span id="menu-contactos-blog" class="link text-5xl playfair-display-bold text-#efece8">Blog</span> </div> </a> <a href="#contactos" class="menu-link"> <div class="flex flex-col items-center"> <div class="i-ic:round-phone-in-talk w-45px h-45px" style="color: #efece8;"></div> <span id="menu-contactos-contactos" class="link text-5xl playfair-display-bold text-#efece8">Contactos</span> </div> </a> </div> </div> </div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/layouts/LayoutDefault.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutDefault", $$LayoutDefault, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="overflow-hidden min-h-screen bg-gradient-to-t from-[#6c7c77] to-[#7f948e] relative"> ${renderComponent($$result2, "CpBanner", $$CpBanner, {})} ${renderComponent($$result2, "CpHdDefault", $$CpHdDefault, {})} ${renderComponent($$result2, "CpHero", $$CpHero, {})} </section> <section class="overflow-hidden min-h-screen relative"> <div id="condutas" class="section absolute top-0 right-0"></div> ${renderComponent($$result2, "CpConduta", $$CpConduta, {})} </section> <section class="min-h-screen relative sectionEf"> ${renderComponent($$result2, "CpServices", $$CpServices, {})} <div class="spotlight"></div> <div id="services" class="section absolute top-0 right-0"></div> </section> <section class="min-h-screen relative"> <div id="mentoria" class="section absolute top-0 right-0"></div> ${renderComponent($$result2, "CpMentoria", $$CpMentoria, {})} </section> <section class="min-h-screen relative"> <div id="sobre" class="section absolute top-0 right-0"></div> ${renderComponent($$result2, "CpSobre", $$CpSobre, {})} </section> <section class="hidden min-h-screen bg-gradient-to-t from-[#6c7c77] to-[#7f948e] relative"> <div id="blog" class="section absolute top-0 right-0"></div> ${renderComponent($$result2, "CpBlog", $$CpBlog, {})} </section> <section id="link-button" class="min-h-screen relative"> <div id="contactos" class="section absolute top-0 right-0"></div> ${renderComponent($$result2, "CpContactos", $$CpContactos, {})} </section> </main> <footer> ${renderComponent($$result2, "CpFtDefault", $$CpFtDefault, {})} </footer> ${renderComponent($$result2, "CpAjuda", $$CpAjuda, {})} ` })}  `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/index.astro", void 0);

const $$file = "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
