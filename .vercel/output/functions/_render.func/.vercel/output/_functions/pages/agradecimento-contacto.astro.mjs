/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderComponent, b as createAstro } from '../chunks/astro/server_BybFMsjH.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$CpFtDefault } from '../chunks/logo_CrzMtBz0.mjs';
import { $ as $$CpHdLandpages } from '../chunks/CpHdLandpages_CQX3EGFP.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

function CpAgradecimento() {
  function shareOnInstagram() {
    const url = "https://www.instagram.com/advogadaamandaferraz/";
    window.open(url, "_blank");
  }
  function shareOnYoutube() {
    const url = "https://www.youtube.com/@draamandaferraz487";
    window.open(url, "_blank");
  }
  function WhatsAppCall() {
    const url = "https://wa.link/9rfxxp";
    window.open(url, "_blank");
  }
  return /* @__PURE__ */ jsxs("section", { className: "h-full flex justify-center items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "h-[800px] flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-2xl text-center p-2", children: "RECEBEMOS A SUA MENSAGEM" }),
        /* @__PURE__ */ jsx("p", { className: "text-normal text-lg text-center px-2 desktop:px-0", children: "Fique atento as suas mensagens do whatsApp ou email, você será contactado em breve!" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-xl text-center p-2", children: "SEU ASSUNTO É URGENTE?" }),
          /* @__PURE__ */ jsx("p", { className: "text-center max-w-4xl py-2 px-2 desktop:px-0", children: "Se sua demanda é urgente, contacte-nos agora mesmo atráves do whatsApp, a minha equipe de atendimento analisará seu pedido com maior brevidade." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center gap-2 py-4", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-green-500 w-fit p-2 rounded-full flex gap-1 justify-center items-center cursor-pointer",
            whileHover: { scale: 1.1 },
            transition: { type: "spring", stiffness: 400, damping: 10 },
            onClick: WhatsAppCall,
            children: [
              /* @__PURE__ */ jsx("div", { className: "i-fa:whatsapp w-24px h-24px", style: { color: "#fff" } }),
              /* @__PURE__ */ jsx("p", { className: "text-white", children: "Contactar Agora!" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx("h2", { className: "font-bold text-xl text-center p-2", children: "COMPARTILHE COM SEUS AMIGOS" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-2 py-4", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "bg-#a57c59 h-16 w-16 rounded-full flex justify-center items-center",
              whileHover: { scale: 1.1 },
              transition: { type: "spring", stiffness: 400, damping: 10 },
              children: /* @__PURE__ */ jsx("a", { onClick: shareOnInstagram, className: "cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "i-fa:instagram w-24px h-24px", style: { color: "#fff" } }) })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "bg-#a57c59 h-16 w-16 rounded-full flex justify-center items-center",
              whileHover: { scale: 1.1 },
              transition: { type: "spring", stiffness: 400, damping: 10 },
              children: /* @__PURE__ */ jsx("a", { onClick: shareOnYoutube, className: "cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "i-fa:youtube-play w-24px h-24px", style: { color: "#fff" } }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-[80px] lg:hidden block" })
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="PT-br"> <head><meta charset="utf-8"><link rel="icon" type="image/ico" href="/icon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Usando Astro.generator no .astro --><title>Políticas e Privacidade | Advogada Amanda Ferraz</title><meta name="description" content="Advogada Amanda Ferraz atua predominantemente nas áreas de Nacionalidade Portuguesa, Vistos de Residência, Regularização de Imigrantes em território Português e Direito Imobiliário.">${renderHead()}</head> <body class="relative"> <main> <section class="min-h-screen bg-gradient-to-t from-[#6c7c77] to-[#7f948e]"> ${renderComponent($$result, "CpHdLandpages", $$CpHdLandpages, {})} ${renderComponent($$result, "CpAgradecimento", CpAgradecimento, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/react/CpAgradecimento.jsx", "client:component-export": "default" })} </section> </main> ${renderComponent($$result, "CpFtDefault", $$CpFtDefault, {})} </body></html>`;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/agradecimento-contacto/index.astro", void 0);

const $$file = "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/pages/agradecimento-contacto/index.astro";
const $$url = "/agradecimento-contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
