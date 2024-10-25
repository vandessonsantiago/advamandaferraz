
import { motion } from "framer-motion"

export default function CpAgradecimento() {
  function shareOnInstagram() {
    const url = "https://www.instagram.com/advogadaamandaferraz/" // URL do seu perfil ou conteúdo a ser compartilhado
    window.open(url, "_blank")
  }
  function shareOnYoutube() {
    const url = "https://www.youtube.com/@draamandaferraz487" // URL do seu perfil ou conteúdo a ser compartilhado
    window.open(url, "_blank")
  }
  function WhatsAppCall() {
    const url = "https://wa.link/9rfxxp" // URL do seu perfil ou conteúdo a ser compartilhado
    window.open(url, "_blank")
  }

  return (
    <section className="h-full flex justify-center items-center">
      <div className="h-[800px] flex flex-col justify-center items-center">
        <div>
          <h2 className="font-bold text-2xl text-center p-2">
            RECEBEMOS A SUA MENSAGEM
          </h2>
          <p className="text-normal text-lg text-center px-2 desktop:px-0">
            Fique atento as suas mensagens do whatsApp ou email, você será
            contactado em breve!
          </p>
        </div>
        <div>
          <div className="pt-4">
            <h2 className="font-bold text-xl text-center p-2">
              SEU ASSUNTO É URGENTE?
            </h2>
            <p className="text-center max-w-4xl py-2 px-2 desktop:px-0">
              Se sua demanda é urgente, contacte-nos agora mesmo atráves do
              whatsApp, a minha equipe de atendimento analisará seu pedido com
              maior brevidade.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 py-4">
            <motion.div
              className="bg-green-500 w-fit p-2 rounded-full flex gap-1 justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={WhatsAppCall}
            >
              <div className="i-fa:whatsapp w-24px h-24px" style={{ color: "#fff" }}></div>
              <p className="text-white">Contactar Agora!</p>
            </motion.div>
          </div>
        </div>
        <div>
          <div className="pt-2">
            <h2 className="font-bold text-xl text-center p-2">
              COMPARTILHE COM SEUS AMIGOS
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2 py-4">
            <motion.div
              className="bg-#a57c59 h-16 w-16 rounded-full flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a onClick={shareOnInstagram} className="cursor-pointer">
                <div className="i-fa:instagram w-24px h-24px" style={{ color: "#fff" }}></div>
              </a>
            </motion.div>
            <motion.div
              className="bg-#a57c59 h-16 w-16 rounded-full flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a onClick={shareOnYoutube} className="cursor-pointer">

                <div className="i-fa:youtube-play w-24px h-24px" style={{ color: "#fff" }}></div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-[80px] lg:hidden block"></div>
    </section>
  )
}
