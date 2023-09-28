import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/porta";
import { useEffect, useState } from "react";
import styles from "../../../styles/Jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo() {
  const router = useRouter();
  const [valido, setValido] = useState<boolean>(false);
  const [portas, setPortas] = useState([]);

  router.query.portas;
  router.query.temPresente;

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    const qtdePortasValidas = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;
    setValido(qtdePortasValidas && temPresenteValido);
  }, [portas]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  function renderizarPortas() {
    return valido && portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
