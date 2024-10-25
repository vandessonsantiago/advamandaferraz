import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useForm as hookForm } from "react-hook-form"
import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function ContactoComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm()



  const Submit = async (dataRegister) => {
    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)

    const formData = {
      id: uuid(),
      dataEnvio: new Date(),
      nomeCompleto: dataRegister.nomeCompleto,
      email: dataRegister.email,
      tipoRelacao: dataRegister.tipoRelacao,
      descricaoCaso: dataRegister.mensagem,
      numeroWhatsapp: dataRegister.phone,
    }

    try {
      const response = await fetch("https://sheetdb.io/api/v1/1mig5e3kpe30p", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(formData),
      })
      console.log(response)
      if (response.status === 201 || response.ok) {
        window.location.href = "/agradecimento-contacto"
      } else {
        setIsSubmitting(false)
      }
    } catch (error) {
      console.log("Error na requisição de envio do formulário, tente novamente mais tarde.")
    }
  }

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <div className="flex flex-col mx-2 my-4">
        <label
          htmlFor="nomeCompleto"
          className="playfair-display-bold text-#a57c59"
        >
          <span data-i18n="fullName">Nome Completo</span>:
        </label>
        <input
          {...register("nomeCompleto", {
            required: true,
            minLength: 2,
            maxLength: 100,
          })}
          id="nomeCompleto"
          className="border border-gray-400 p-2 rounded"
        />
        {errors.nomeCompleto?.type === "required" && (
          <span className="text-red-400">Este campo é obrigatório</span>
        )}
        {errors.nomeCompleto?.type === "minLength" && (
          <span className="text-red-400">Insira um nome válido</span>
        )}
        {errors.nomeCompleto?.type === "maxLength" && (
          <span className="text-red-400">
            O nome deve ter no máximo 100 caracteres
          </span>
        )}
      </div>

      <div className="flex flex-col mx-2 my-4">
        <label htmlFor="email" className="playfair-display-bold text-#a57c59">
          <span data-i18n="email">Email</span>:
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          id="email" className="border border-gray-400 p-2 rounded" />
      </div>
      {errors.email?.type === "required" && (
        <span className="text-red-400">Este campo é obrigatório</span>
      )}
      {errors.email?.type === "pattern" && (
        <span className="text-red-400">Insira um email válido</span>
      )}

      <div className="flex flex-col mx-2 my-4">
        <label
          htmlFor="phoneNumber"
          className="playfair-display-bold text-#a57c59"
        >
          <span data-i18n="whatsappNumber">Número do WhatsApp</span>:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="border border-gray-400 p-2 rounded:width"
          placeholder="BR +55 11 9456-7890"
          inputMode="numeric"
          maxLength="12"
          {...register("phone", {
            required: true,
          })}


        />
        {errors.phoneNumber && (
          <span className="text-red-400">Este campo é obrigatório</span>
        )}
      </div>

      <div className="flex flex-col mx-2 my-4">
        <label
          htmlFor="tipo-relacao"
          className="playfair-display-bold text-#a57c59"
        >
          <span data-i18n="relationshipType">Selecione o tipo de relação</span>:
        </label>
        <select
          {...register("tipoRelacao", { required: true })}
          id="tipo-relacao"
          className="border border-gray-400 p-2 rounded"
        >
          <option value="selecione">
            <span data-i18n="caseType">Selecione conforme o seu caso</span>
          </option>
          <option value="Nacionalidade">
            <span data-i18n="nationality">Nacionalidade Portuguesa</span>
          </option>
          <option value="Outros">
            <span data-i18n="otherServices">Outros Serviços</span>
          </option>
        </select>
        {errors.tipoRelacao && (
          <span className="text-red-400">Este campo é obrigatório</span>
        )}
      </div>

      <div className="flex flex-col mx-2 my-4">
        <label
          htmlFor="mensagem"
          className="playfair-display-bold text-#a57c59"
        >
          <span data-i18n="caseDescription">
            Descreva brevemente o seu caso
          </span>
          :
        </label>
        <textarea
          {...register("mensagem", {
            required: true,
            maxLength: 750, // Adicionando a validação de limite de caracteres
          })}
          id="mensagem"
          className="border border-gray-400 p-2 rounded h-48"
        ></textarea>
        {errors.mensagem?.type === "required" && (
          <span className="text-red-400">Este campo é obrigatório</span>
        )}
        {errors.mensagem?.type === "maxLength" && (
          <span className="text-red-400">
            Limite máximo de 750 caracteres
          </span>
        )}
      </div>

      <div className="flex justify-center my-8">
        <button
          type="submit"
          role="link"
          className={`py-2 px-10 border-2 border-#a57c59 rounded-md cursor-pointer playfair-display-bold text-#a57c59 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span data-i18n="button">INICIAR ATENDIMENTO</span>
        </button>
      </div>
    </form>
  );
}
