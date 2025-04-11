import { CSSProperties } from "react";

import { Chicken1Svg } from "~/components/paaske/chicken1Svg";
import { Chicken2Svg } from "~/components/paaske/chicken2Svg";
import { Egg1Svg } from "~/components/paaske/egg1Svg";
import { Egg2Svg } from "~/components/paaske/egg2Svg";
import { Egg3Svg } from "~/components/paaske/egg3Svg";
import { Egg4Svg } from "~/components/paaske/egg4Svg";
import { Egg5Svg } from "~/components/paaske/egg5Svg";
import { Egg6Svg } from "~/components/paaske/egg6Svg";
import { Egg7Svg } from "~/components/paaske/egg7Svg";
import { Egg8Svg } from "~/components/paaske/egg8Svg";
import { Egg9Svg } from "~/components/paaske/egg9Svg";
import { Egg10Svg } from "~/components/paaske/egg10Svg";
import { Egg11Svg } from "~/components/paaske/egg11Svg";
import { Egg12Svg } from "~/components/paaske/egg12Svg";
import { EggBasketSvg } from "~/components/paaske/eggBasketSvg";
import { Kanin1Svg } from "~/components/paaske/kanin1Svg";

const svgComponents = [
  { Component: Egg1Svg, type: "egg" },
  { Component: Egg2Svg, type: "egg" },
  { Component: Egg3Svg, type: "egg" },
  { Component: Egg4Svg, type: "egg" },
  { Component: Egg5Svg, type: "egg" },
  { Component: Egg6Svg, type: "egg" },
  { Component: Egg7Svg, type: "egg" },
  { Component: Egg8Svg, type: "egg" },
  { Component: Egg9Svg, type: "egg" },
  { Component: Egg10Svg, type: "egg" },
  { Component: Egg11Svg, type: "egg" },
  { Component: Egg12Svg, type: "egg" },
  { Component: EggBasketSvg, type: "basket" },
  { Component: EggBasketSvg, type: "basket" },
  { Component: EggBasketSvg, type: "basket" },
  { Component: Chicken1Svg, type: "chicken" },
  { Component: Chicken2Svg, type: "chicken" },
  { Component: Chicken1Svg, type: "chicken" },
  { Component: Chicken2Svg, type: "chicken" },
  { Component: Chicken1Svg, type: "chicken" },
  { Component: Chicken2Svg, type: "chicken" },
  { Component: Chicken1Svg, type: "chicken" },
  { Component: Chicken2Svg, type: "chicken" },
  { Component: Chicken1Svg, type: "chicken" },
  { Component: Chicken2Svg, type: "chicken" },
  { Component: Chicken1Svg, type: "chicken" },
  { Component: Chicken2Svg, type: "chicken" },
  { Component: Kanin1Svg, type: "kanin" },
  { Component: Kanin1Svg, type: "kanin" },
  { Component: Kanin1Svg, type: "kanin" },
  { Component: Kanin1Svg, type: "kanin" },
  { Component: Kanin1Svg, type: "kanin" },
];

function createRandomStyle(type: string): CSSProperties {
  const topPosition = Math.floor(Math.random() * 100); // 0% to 100% from top
  const leftPosition = Math.floor(Math.random() * 100); // 0% to 100% from left
  const rotation = Math.floor(Math.random() * 360); // 0 to 360 degrees
  const scale =
    type === "egg"
      ? 0.7 + Math.random() * 0.6 // 0.7 to 1.3 for eggs
      : 0.6 + Math.random() * 0.4; // 0.6 to 1 for others

  let transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;

  if (type === "chicken") {
    const flip = Math.random() > 0.5 ? -1 : 1;
    transform = `translate(-50%, -50%) rotate(${(rotation % 60) - 30}deg) scaleX(${flip}) scale(${scale})`;
  }

  if (type === "kanin") {
    transform = `translate(-50%, -50%) rotate(${(rotation % 40) - 20}deg) scale(${scale})`;
  }

  if (type === "basket") {
    transform = `translate(-50%, -50%) rotate(${(rotation % 20) - 10}deg) scale(${scale})`;
  }

  const zIndex = Math.floor(Math.random() * 10);

  return {
    position: "absolute",
    top: `${topPosition}%`,
    left: `${leftPosition}%`,
    transform,
    zIndex,
  };
}

const componentWithStyles = svgComponents.map((item) => ({
  ...item,
  style: createRandomStyle(item.type),
}));

export function Paaske() {
  return (
    <div className="w-full h-15 bg-yellow-50 relative">
      {componentWithStyles.map((item, index) => {
        const { Component, style } = item;
        return (
          <div key={index} style={style}>
            <Component />
          </div>
        );
      })}
    </div>
  );
}
