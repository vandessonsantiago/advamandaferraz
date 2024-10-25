import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Indice() {
  const countClientes = useMotionValue(20);
  const countAnos = useMotionValue(2);
  const countResolvidos = useMotionValue(30);
  const clientes = useTransform(countClientes, Math.round);
  const anos = useTransform(countAnos, Math.round);
  const resolvidos = useTransform(countResolvidos, Math.round);

  const refToComponentClientes = useRef(null);
  const refToComponentAnos = useRef(null);
  const refToComponentResolvidos = useRef(null);

  // Função para iniciar as animações
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
            startAnimations(); // Inicia as animações quando o componente estiver visível
          }
        });
      },
      { threshold: 0.3 }, // Inicia quando 30% da seção estiver visível
    );

    // Observa os elementos (pode set um único ou múltiplos elementos)
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
      // Desconecta o observer quando o componente for desmontado
      observer.disconnect();
    };
  }, []);

  return (
    <div className="desktop:mx-auto desktop:max-w-6xl">
      <div className="desktop:flex items-center desktop:mt-8">
        <div
          ref={refToComponentClientes}
          className="desktop:w-1/3 flex justify-center p-4"
        >
          <div className="flex flex-col justify-center">
            <div className="flex justify-center gap-1">
              <h1 className="playfair-display-bold antialiased text-#efece8 text-5xl">
                + <span id="indiceContent1">de</span>
              </h1>
              <motion.h1 className="text-center playfair-display-bold antialiased text-#efece8 text-5xl">
                {clientes}
              </motion.h1>
            </div>
            <h4 id="indiceTitle1" className="playfair-display-bold antialiased text-#efece8">
              CLIENTES ATENDIDOS
            </h4>
          </div>
        </div>
        <div
          ref={refToComponentAnos}
          className="desktop:w-1/3 flex justify-center p-4"
        >
          <div className="flex flex-col justify-center">
            <div className="flex justify-center gap-1">
              <h1 className="playfair-display-bold antialiased text-#efece8 text-5xl">
                + <span id="indiceContent2">de</span>
              </h1>
              <motion.h1 className="text-center playfair-display-bold antialiased text-#efece8 text-5xl">
                {anos}
              </motion.h1>
            </div>
            <h4 id="indiceTitle2" className="playfair-display-bold antialiased text-#efece8">
              ANOS DE EXPERIÊNCIA
            </h4>
          </div>
        </div>
        <div
          ref={refToComponentResolvidos}
          className="desktop:w-1/3 flex justify-center p-4"
        >
          <div className="flex flex-col justify-center">
            <div className="flex justify-center items-center gap-1">
              <motion.h1 className="text-center playfair-display-bold antialiased text-#efece8 text-5xl">
                {resolvidos}
              </motion.h1>
              <h1 className="playfair-display-bold antialiased text-#efece8 text-3xl">
                %
              </h1>
            </div>
            <h4 id="indiceTitle3" className="playfair-display-bold antialiased text-#efece8">
              CASOS RESOLVIDOS
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
