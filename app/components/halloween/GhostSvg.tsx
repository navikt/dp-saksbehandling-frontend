import type { CSSProperties } from "react";

export interface CustomCSSProperties extends CSSProperties {
  "--rotation"?: number;
  "--size"?: number;
}

export function GhostSvg(props: { style?: CustomCSSProperties }) {
  return (
    <svg
      width="22"
      height="33"
      viewBox="0 0 22 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <g filter="url(#filter0_i_11964_36708)">
        <path
          d="M2.77227 30.5444C3.59635 30.3349 4.29755 29.2497 4.85995 29.1555C7.33999 28.7401 5.67618 33.4012 11.0131 32.0277C12.936 31.5329 13.8666 27.7141 15.8477 29.0061C19.6385 31.4784 21.7611 30.2663 21.5063 27.7974C19.913 12.3596 20.5488 -1.53706 9.41988 0.273043C0.300012 1.75637 2.3877 14.9417 1.1241 23.0178C0.453619 27.303 -0.469132 31.3685 2.77227 30.5444Z"
          fill="#EBEBED"
        />
      </g>
      <path
        d="M13.7051 28.621C13.8083 27.2801 13.3756 23.7313 14.9688 23.5116C16.3423 23.3222 16.0382 27.8621 16.0675 28.8957C16.0767 29.2195 15.5054 28.701 14.8588 28.7309C14.1869 28.7619 13.5952 30.0494 13.7051 28.621Z"
        fill="#D1D2D4"
      />
      <path
        d="M3.54094 29.5004C4.85944 26.3689 3.42156 23.5727 5.01479 23.353C6.38826 23.1636 6.45269 27.6325 6.28779 29.7751C6.26293 30.0981 5.8357 29.031 5.1891 29.0609C4.09037 29.1117 2.92563 30.9618 3.54094 29.5004Z"
        fill="#D1D2D4"
      />
      <ellipse
        cx="1.75805"
        cy="2.2525"
        rx="1.75805"
        ry="2.2525"
        transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 8.10107 6.09668)"
        fill="#2D1925"
      />
      <ellipse
        cx="1.75805"
        cy="2.2525"
        rx="1.75805"
        ry="2.2525"
        transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 15.4629 6.09668)"
        fill="#2D1925"
      />
      <ellipse
        cx="1.04384"
        cy="1.15372"
        rx="1.04384"
        ry="1.15372"
        transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 10.958 13.1289)"
        fill="#2D1925"
      />
      <defs>
        <filter
          id="filter0_i_11964_36708"
          x="0.468262"
          y="0.11377"
          width="21.0586"
          height="32.168"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.879023" dy="0.109878" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.819608 0 0 0 0 0.823529 0 0 0 0 0.831373 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_11964_36708" />
        </filter>
      </defs>
    </svg>
  );
}
