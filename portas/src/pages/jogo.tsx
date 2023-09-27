import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/porta";
import PortaModel from "../model/porta";
import { useState } from "react";
import styles from "../styles/Jogo.module.css";

export default function Jogo() {
  const [p1, setP1] = useState(new PortaModel(1));
 
  const [portas, setPortas] = useState(criarPortas(5, 2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div className={styles.jogo}>
        <div className={styles.portas}>
            {renderizarPortas()}
        </div>
        <div className={styles.botoes}>

        </div>
    </div>
  );
}
