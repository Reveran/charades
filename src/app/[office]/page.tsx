"use client";
import data from "@/services/offices";
import Roulette from "@/components/roulette";
import Player from "@/models/player";
import PlayersTable from "@/components/playersTable";

interface PlayerProps {
  params: { office: string };
}

let colors = [
  "#FF5733",
  "#FFB533",
  "#FFDD33",
  "#33FF57",
  "#33FFC9",
  "#33D1FF",
  "#334BFF",
  "#5733FF",
  "#A933FF",
  "#FF33DD",
  "#FF336D",
  "#FF336D",
  "#FF3387",
  "#333333",
  "#666666",
  "#999999",
  "#FF3387",
  "#33FFD1",
  "#FFD133",
  "#33FF78",
];

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function PlayerPage({ params }: PlayerProps) {
  let staff: Player[] = data.filter(
    (office) => office.office == params.office
  )[0].staff;

  const chartData = {
    labels: staff.map((player) => player.name),
    datasets: [
      {
        data: staff.map((player) => player.entries),
        backgroundColor: colors,
      },
    ],
  };

  return (
    
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="row container mt-5">
        <div className="col-2"></div>
        <div className="col-5">
          <Roulette chartData={chartData} />
        </div>
        <div className="col-5">
          <PlayersTable data={chartData} />
        </div>
      </div>
    </div>
  );
}
