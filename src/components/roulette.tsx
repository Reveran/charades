"use Client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

import "./roulette.css";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import ChartData from "@/models/chartData";

interface RouletteProps {
  chartData: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

function testRange(angle: number, range: number[]): boolean {
  return range[0] < angle && range[1] >= angle;
}

function getPlayer(angle: number, data: ChartData): string {
  const ranges = genRanges(data.datasets[0].data);
  const index = ranges.filter((range) => testRange(angle, range))[0][2];

  return `${data.labels[index]}`;
}

function genRanges(spans: number[]) {
  const entries = spans.reduce((prev, current) => prev + current);
  const range = 360.0 / entries;
  let last = 0;
  let index = 0;
  let ranges = [];
  for (const span of spans) {
    ranges.push([last, last + range * span, index]);
    last = last + range * span;
    index++;
  }
  return ranges;
}

function Roulette({ chartData }: RouletteProps) {
  const [springs, api] = useSpring(() => ({
    from: { rotate: 0 },
  }));

  const [selected, setSelected] = useState("Persona Seleccionada");

  const handleClick = () => {
    setSelected("");
    const angle = Math.floor(Math.random() * 360);
    api.start({
      from: {
        rotate: 0,
      },
      to: {
        rotate: 1440 + angle,
      },
    });
    setSelected(getPlayer(360 - angle, chartData));
  };

  return (
    <div>
      <div className="ratio ratio-1x1 w-100 position-relative">
        <animated.div
          className="Roulette"
          style={{
            ...springs,
          }}
        >
          <Doughnut data={chartData} />
        </animated.div>

        <a href="#" onClick={handleClick} className="SpinButton">
          <span>GIRAR</span>
        </a>
      </div>
      <div
        className="alert alert-primary mt-4 border-glow placeholder-glow"
        role="alert"
      >
        <h4 className="alert-heading">Y el Mimo es...</h4>
        <h5
          className={selected === "Persona Seleccionada" ? "placeholder" : ""}
        >
          {selected}
        </h5>
        <hr />
        <a
          href="/role"
          className={
            (selected === "Persona Seleccionada" ? "invisible " : "visible ") +
            "mb-0 alert-link fs-5"
          }
        >
          Escoge un papel.
        </a>
      </div>
    </div>
  );
}

export default Roulette;
