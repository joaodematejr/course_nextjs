import QuestaoModel from "@/model/questao";
import styles from "@/styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

const letras = [
  {
    valor: "A",
    corFundo: "#F2C866",
  },
  {
    valor: "B",
    corFundo: "#F266BA",
  },
  {
    valor: "C",
    corFundo: "#85D4F2",
  },
  {
    valor: "D",
    corFundo: "#BCE596",
  },
];

interface QuestaoProps {
  valor: QuestaoModel;
  respostaFornecida: (indice: number) => void;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  function renderizarResposta() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          valor={resposta}
          key={`${questao.id}-${i}`}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].corFundo}
          respostaFornecida={props.respostaFornecida}
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      {renderizarResposta()}
    </div>
  );
}
