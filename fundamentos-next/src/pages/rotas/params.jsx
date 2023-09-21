import Link from "next/link";
import { useRouter } from "next/router";    

export default function params() {
    const router = useRouter();
    //http://localhost:3000/rotas/params/?nome=joao&id=123
    const id = router.query.id;
    const nome = router.query.nome;
    console.log(router)
    return (
      <div>
        <h1>Rotas index / {id} / {nome}</h1>
        <Link href="/rotas">
          <button>Voltar</button>
        </Link>
      </div>
    );
  }
  