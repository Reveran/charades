"use client";

import data from "@/services/roles";
import "./page.css";
import Link from "next/link";
import { useRef, useState } from "react";

function genElements(roles: string[]) {
  return roles.map((role, index) => (
    <li className="role" id={"" + index} key={index}>
      {role}
    </li>
  ));
}

export default function RolePage() {
  let internalTimer = 300;
  const [timer, setTimer] = useState(internalTimer);
  const timeOver: HTMLAudioElement = new Audio("/buzzer.mp3");
  const boop: HTMLAudioElement = new Audio("/boop.mp3");

  let interval = useRef<NodeJS.Timeout | undefined>(undefined);

  const startTimer = () => {
    if (interval.current) {
      // Clear any previous interval if it exists
      clearInterval(interval.current);
    }

    internalTimer = 300;
    setTimer(300);

    interval.current = setInterval(() => {
      if (internalTimer < 10) {
        boop.play();
      }
      if (internalTimer === 0) {
        clearInterval(interval.current);
        timeOver.play();
      } else {
        setTimer((prev) => prev - 1);
        internalTimer--;
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  return (
    <div className="container">
      <h1 className="timer text-primary text-center mb-4">
        {"0" + Math.floor(timer / 60)}:
        {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
      </h1>
      <div className="position-relative">
        <div className="topCloud"></div>
        <ul className="list">{genElements(data)}</ul>
        <div className="bottomCloud"></div>
      </div>
      <Link
        href={"#" + Math.round(Math.random() * 200)}
        onClick={startTimer}
        className="w-100 mt-3 btn btn-outline-primary btn-lg border-glow position-relative"
      >
        Seleccionar
      </Link>
      <a
        className="w-100 mt-5 btn btn-outline-primary btn-lg border-glow position-relative"
        onClick={() => window.history.go(-2)}
      >
        Seleccionar otro Mimo
      </a>
    </div>
  );
}
