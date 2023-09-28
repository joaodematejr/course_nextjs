import styles from "../styles/Cartao.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao />
      </div>
      <div>
        <Cartao />
        <Cartao bgColor="#28A085">
          <Link href={`/jogo/3/2`}>
            <h2 className={styles.link}>Jogar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
