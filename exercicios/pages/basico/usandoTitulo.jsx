import Titulo from "@/components/Titulo";

export default function usandoTitulo() {
  return (
    <>
      <Titulo
        principal="Página de cadastro"
        secundario="Incluir, alterar e exluir"
      />
      <Titulo
        principal="Página de login"
        secundario="Informe seu e-mail e senha"
        pequeno
      />
    </>
  );
}
