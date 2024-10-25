// global.d.ts ou qualquer nome de arquivo que você escolheu

// Declaração do módulo global
declare global {
  interface Window {
    SnipcartSettings?: any; // ou substitua 'any' pelo tipo específico, se você souber qual é
  }
}

// Para garantir que o arquivo seja tratado como um módulo
export { };
