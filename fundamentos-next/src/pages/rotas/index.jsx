import Link from "next/link";
import router, { useRouter } from "next/router";

export default function rotas() {
  function navegacaoSimples(url) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: "Ana",
      },
    });
  }

  return (
    <div>
      <h1>Rotas index</h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=joao">
          <li>Params</li>
        </Link>
        <Link href="/rotas/params?id=12&nome=joao">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/params?id=12&nome=joao">
          <li>João</li>
        </Link>
      </ul>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/joao")}>
          João
        </button>
        <button onClick={() => navegacaoComParams()}>
          Params
        </button>
      </div>
    </div>
  );
}
