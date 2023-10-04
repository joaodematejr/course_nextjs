import Image from "next/image";
import { Inter } from "next/font/google";
import Questao from "@/components/Questao";
import RespostaModel from "@/model/resposta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const questaoTeste = new Questao(1, "Melhor cor?", [
    RespostaModel.errada("Vermelho"),
    RespostaModel.errada("Verde"),
    RespostaModel.certa("Azul"),
  ]);
  return <Questao valor={questaoTeste} />;
}
