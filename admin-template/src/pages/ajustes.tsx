import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Ajustes() {
  return (
    <Layout
      titulo="Ajustes e Configurações"
      subtitulo={"Aqui você ira gerenciar as suas notificações"}
    >
      <h3 className="text-white">000000</h3>
    </Layout>
  );
}
