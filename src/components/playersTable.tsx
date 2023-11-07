import ChartData from "@/models/chartData";

interface PlayersTableProps {
  data: ChartData;
}

function cardColor(color: string) {
  return {
    backgroundColor: color,
  };
}

function columns(data: ChartData) {
  return data.labels.map((player, index) => {
    return (
      <tr key={player}>
        <th scope="row">
          <div
            className="card p-3"
            style={cardColor(data.datasets[0].backgroundColor[index])}
          ></div>
        </th>
        <td>{player}</td>
        <td>{data.datasets[0].data[index]}</td>
      </tr>
    );
  });
}

export default function PlayersTable({ data }: PlayersTableProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Color</th>
          <th scope="col">Nombre</th>
          <th scope="col">Entradas</th>
        </tr>
      </thead>
      <tbody>{columns(data)}</tbody>
    </table>
  );
}
