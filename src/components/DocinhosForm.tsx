// src/components/DocinhosForm.tsx
import React, { useState } from 'react';

const DocinhosForm: React.FC = () => {
  const [quantidadeTradicionais, setQuantidadeTradicionais] = useState(0);
  const [quantidadeEspeciais, setQuantidadeEspeciais] = useState(0);

  const valorTotal = quantidadeTradicionais * 1.5 + quantidadeEspeciais * 2.0;

  const enviarPedido = () => {
    const mensagem = `Pedido de docinhos:
Tradicionais: ${quantidadeTradicionais}
Especiais: ${quantidadeEspeciais}
Total: R$${valorTotal.toFixed(2)}`;

    const linkWhatsapp = `https://wa.me/SEUNUMERODOTELEFONE/?text=${encodeURIComponent(
      mensagem
    )}`;
    window.location.href = linkWhatsapp;
  };

  return (
    <div>
      <h2>Escolha a quantidade de docinhos:</h2>
      <div>
        <label>Tradicionais (R$1.50 cada):</label>
        <input
          type="number"
          value={quantidadeTradicionais}
          onChange={(e) => setQuantidadeTradicionais(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Especiais (R$2.00 cada):</label>
        <input
          type="number"
          value={quantidadeEspeciais}
          onChange={(e) => setQuantidadeEspeciais(Number(e.target.value))}
        />
      </div>
      <div>
        <h3>Valor Total: R${valorTotal.toFixed(2)}</h3>
        <button onClick={enviarPedido}>Enviar Pedido via WhatsApp</button>
      </div>
    </div>
  );
};

export default DocinhosForm;
