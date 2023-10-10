import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url={"/"} text={"Inicio"} icon={undefined} />
        <MenuItem url={"/ajustes"} text={"Ajustes"} icon={undefined} />
        <MenuItem url={"/notificacoes"} text={"Notificações"} icon={undefined} />
      </ul>
    </aside>
  );
}
