import Image from "next/image";
import { Inter } from "next/font/google";
import Questao from "@/components/Questao";
import RespostaModel from "@/model/resposta";
import QuestaoModel from "@/model/questao";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Vermelho"),
  RespostaModel.errada("Verde"),
  RespostaModel.certa("Azul"),
]);

export default function Home() {
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);

  
  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao valor={questao} respostaFornecida={respostaFornecida} />
    </div>
  );
}
