import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
    fill?: string;
    stroke?: string;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <svg
            // width="120"
            viewBox="0 0 1842 850"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-[80px] md:w-[120px]", className)}
        >
            <path
                d="M257.5 63L265.5 41L273 63"
                fill="none"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M201.5 829.5H39.5L32.5 431.5L16 407L39.5 371.5V246.5H80V302H137.5L141.5 241M141.5 241H183L179 160.5M141.5 241H124.5M179 160.5H225.5L228.5 71.5H306.5M179 160.5H163M306.5 71.5H213H316.5H306.5ZM306.5 71.5V139L343 141M363.5 143.5L343 141M343 141L346 226L401.5 220.5M416.5 220.5H401.5M401.5 220.5L399 305L445 303.5M461.5 302L445 303.5M445 303.5L449 390.5L501 387.5M512 387.5H501M501 387.5L498 463.5H519.5M536.5 463.5H519.5M519.5 463.5C516.5 513.167 515.7 610.8 536.5 604C562.5 595.5 591.5 557 587 390.5C587 390.5 602.167 383.667 612 463.5"
                fill="none"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M614 463.5C621.167 456.667 637 431.2 643 384C650.5 325 616 600 654.5 600C693 600 744.5 501 711 489C677.5 477 655 600 698 600C741 600 770 506.5 766 483.5C761.5 514.333 757 575.8 775 575C793 574.2 804.167 513.667 807.5 483.5L803.5 639C802.167 664.833 795.5 712.7 773.5 713.5C746 714.5 741.5 668.5 751 652.5C760.5 636.5 775.295 612.307 841.5 568C906.5 524.5 920 497 942 459C964 421 961 354 939 354C917 354 904.5 404 902 421.5C899.5 439 885 588.5 912 588.5C939 588.5 975.5 560.5 977 489C977 502.333 977 531.6 977 542C977 555 975 575 983 575C991 575 1012.5 572.5 1020.5 489L1017 593.5C1022 560 1036.1 493.5 1052.5 495.5C1073 498 1064.5 574.5 1065 578.5C1065.5 582.5 1068 604 1098.5 582.5C1129 561 1148.5 503 1125.5 501C1102.5 499 1098.5 530 1098.5 546.5C1098.5 570.5 1121 587 1153 587C1185 587 1226 569.5 1228.5 483.5C1229.97 432.846 1229.06 396.701 1228.5 377.5L1264 372.5C1258.5 398.833 1249.7 453.9 1258.5 463.5C1269.14 475.11 1297.1 452.084 1298.91 379.929H1338.5C1364.33 349.952 1422.1 277 1446.5 225L1427.5 202.5L1549.5 156M1549.5 156L1547.49 103.5M1549.5 156L1666 196.427M1546.5 77.5L1547.49 103.5M1547.49 103.5H1517M1547.49 103.5H1575M1683.5 202.5L1666 196.427M1666 196.427L1659.5 217C1667.5 240.167 1692.5 293 1747.5 362.5L1787.5 377.5L1782.5 434.5L1829.5 499V826L1664 832.5"
                fill="none"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="766" cy="447.5" r="13.5" fill="currentColor" />
            <ellipse cx="805.5" cy="450.5" rx="12" ry="13.5" fill="currentColor" />
            <ellipse cx="978.5" cy="462.5" rx="12" ry="12.5" fill="currentColor" />
            <ellipse cx="1238.5" cy="349.5" rx="13" ry="17.5" fill="currentColor" />
            <ellipse cx="1316" cy="355" rx="20.5" ry="20" fill="currentColor" />
            <ellipse cx="1453.5" cy="169" rx="18" ry="20" fill="currentColor" />
            <ellipse cx="1649" cy="168" rx="18.5" ry="21" fill="currentColor" />
            <circle cx="1769.5" cy="353" r="21" fill="currentColor" />
            <ellipse cx="267" cy="23" rx="22.5" ry="23" fill="currentColor" />
            <ellipse cx="58" cy="206" rx="22.5" ry="23" fill="currentColor" />
            <ellipse cx="60" cy="210" rx="20.5" ry="27" fill="currentColor" />
        </svg>
    );
};

export default Logo;
