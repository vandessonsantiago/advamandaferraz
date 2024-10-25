import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from './astro/server_BybFMsjH.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react-phone-input-2';
/* empty css                         */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { v4 } from 'uuid';

function ContactoComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const Submit = async (dataRegister) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const formData = {
      id: v4(),
      dataEnvio: /* @__PURE__ */ new Date(),
      nomeCompleto: dataRegister.nomeCompleto,
      email: dataRegister.email,
      tipoRelacao: dataRegister.tipoRelacao,
      descricaoCaso: dataRegister.mensagem,
      numeroWhatsapp: dataRegister.phone
    };
    try {
      const response = await fetch("https://sheetdb.io/api/v1/1mig5e3kpe30p", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(formData)
      });
      console.log(response);
      if (response.status === 201 || response.ok) {
        window.location.href = "/agradecimento-contacto";
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log("Error na requisição de envio do formulário, tente novamente mais tarde.");
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(Submit), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-2 my-4", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "nomeCompleto",
          className: "playfair-display-bold text-#a57c59",
          children: [
            /* @__PURE__ */ jsx("span", { "data-i18n": "fullName", children: "Nome Completo" }),
            ":"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          ...register("nomeCompleto", {
            required: true,
            minLength: 2,
            maxLength: 100
          }),
          id: "nomeCompleto",
          className: "border border-gray-400 p-2 rounded"
        }
      ),
      errors.nomeCompleto?.type === "required" && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Este campo é obrigatório" }),
      errors.nomeCompleto?.type === "minLength" && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Insira um nome válido" }),
      errors.nomeCompleto?.type === "maxLength" && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "O nome deve ter no máximo 100 caracteres" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-2 my-4", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "playfair-display-bold text-#a57c59", children: [
        /* @__PURE__ */ jsx("span", { "data-i18n": "email", children: "Email" }),
        ":"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          ...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i
          }),
          id: "email",
          className: "border border-gray-400 p-2 rounded"
        }
      )
    ] }),
    errors.email?.type === "required" && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Este campo é obrigatório" }),
    errors.email?.type === "pattern" && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Insira um email válido" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-2 my-4", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "phoneNumber",
          className: "playfair-display-bold text-#a57c59",
          children: [
            /* @__PURE__ */ jsx("span", { "data-i18n": "whatsappNumber", children: "Número do WhatsApp" }),
            ":"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "tel",
          id: "phone",
          name: "phone",
          required: true,
          className: "border border-gray-400 p-2 rounded:width",
          placeholder: "BR +55 11 9456-7890",
          inputMode: "numeric",
          maxLength: "12",
          ...register("phone", {
            required: true
          })
        }
      ),
      errors.phoneNumber && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Este campo é obrigatório" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-2 my-4", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "tipo-relacao",
          className: "playfair-display-bold text-#a57c59",
          children: [
            /* @__PURE__ */ jsx("span", { "data-i18n": "relationshipType", children: "Selecione o tipo de relação" }),
            ":"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "select",
        {
          ...register("tipoRelacao", { required: true }),
          id: "tipo-relacao",
          className: "border border-gray-400 p-2 rounded",
          children: [
            /* @__PURE__ */ jsx("option", { value: "selecione", children: /* @__PURE__ */ jsx("span", { "data-i18n": "caseType", children: "Selecione conforme o seu caso" }) }),
            /* @__PURE__ */ jsx("option", { value: "Nacionalidade", children: /* @__PURE__ */ jsx("span", { "data-i18n": "nationality", children: "Nacionalidade Portuguesa" }) }),
            /* @__PURE__ */ jsx("option", { value: "Outros", children: /* @__PURE__ */ jsx("span", { "data-i18n": "otherServices", children: "Outros Serviços" }) })
          ]
        }
      ),
      errors.tipoRelacao && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Este campo é obrigatório" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-2 my-4", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "mensagem",
          className: "playfair-display-bold text-#a57c59",
          children: [
            /* @__PURE__ */ jsx("span", { "data-i18n": "caseDescription", children: "Descreva brevemente o seu caso" }),
            ":"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ...register("mensagem", {
            required: true,
            maxLength: 750
            // Adicionando a validação de limite de caracteres
          }),
          id: "mensagem",
          className: "border border-gray-400 p-2 rounded h-48"
        }
      ),
      errors.mensagem?.type === "required" && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Este campo é obrigatório" }),
      errors.mensagem?.type === "maxLength" && /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Limite máximo de 750 caracteres" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center my-8", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        role: "link",
        className: `py-2 px-10 border-2 border-#a57c59 rounded-md cursor-pointer playfair-display-bold text-#a57c59 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`,
        children: /* @__PURE__ */ jsx("span", { "data-i18n": "button", children: "INICIAR ATENDIMENTO" })
      }
    ) })
  ] });
}

const $$CpContactos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-2 desktop:mx-0"> <div class="max-w-4xl mx-2 py-9 desktop:mx-auto"> <div class="w-full flex flex-col justify-center p-2"> <div class="w-full"> <h3 id="section-title-contactos" class="text-[#a57c59] playfair-display-bold font-bold antialiased text-2xl desktop:text-48px text-center w-fit mb-6 my-4 mx-auto">
Contate-nos
</h3> </div> <div> <p id="intro" class="text-[#a57c59] playfair-display-regular text-center text-18px">
Entre em contacto de forma fácil e rápida. Estamos sempre disponíveis para atendê-lo(a).
</p> </div> <div class="pt-8"> ${renderComponent($$result, "ContactoComponent", ContactoComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/react/CpContactos.jsx", "client:component-export": "default" })} </div> </div> </div> </div> `;
}, "/Users/vandessonsantiago/Documents/scaleup-agency/advamandaferraz/src/components/astro/CpContactos.astro", void 0);

export { $$CpContactos as $ };
