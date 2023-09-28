import styles from "../styles/Cartao.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumeraca";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState<number>(3);
  const [comPresente, setComPresente] = useState<number>(2);
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Quantidade de portas?"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com presente"
            value={comPresente}
            onChange={(novaPortaComPresente) => setComPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao bgColor="#28A085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Jogar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
