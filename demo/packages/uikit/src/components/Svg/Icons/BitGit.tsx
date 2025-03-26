import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="40.000000px"
      height="40.000000px"
      viewBox="0 0 640.000000 640.000000"
      preserveAspectRatio="xMidYMid meet"
      style={{ background: "cyan" }}
    >
      <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path
          d="M2480 4743 c-992 -1001 -967 -976 -981 -1020 -27 -91 -37 -79 494
-605 l482 -477 460 -1 459 0 -430 433 c-501 502 -594 598 -594 608 0 7 806
810 1173 1169 81 79 147 147 147 152 0 4 -213 8 -472 8 l-473 0 -265 -267z"
        />
        <path
          d="M3040 3672 c0 -4 230 -237 510 -517 281 -280 510 -515 510 -521 0
-10 -1265 -1266 -1301 -1292 -11 -7 -19 -17 -19 -23 0 -5 181 -9 468 -9 l467
0 616 618 c340 339 622 627 628 639 17 34 13 114 -7 144 -9 14 -231 238 -492
497 l-475 471 -452 1 c-249 0 -453 -3 -453 -8z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
