import Office from "@/models/office";
import data from "@/services/offices";
import Link from "next/link";

interface MenuProps {
  offices: Office[];
}

function Menu({ offices }: MenuProps) {
  return offices.map((item) => (
    <Link
      key={item.office}
      className="btn btn-outline-primary position-relative btn-lg border-glow"
      type="button"
      href={"/" + item.office}
    >
      {item.office}
    </Link>
  ));
}

export default function Home() {
  return (
    <div className="d-grid gap-3 col-8 col-md-6 col-lg-4">
      <h2>Hola!</h2>
      <h4>Vamos a jugar a las Charadas, seleccina tu oficina.</h4>
      <Menu offices={data} />
    </div>
  );
}
