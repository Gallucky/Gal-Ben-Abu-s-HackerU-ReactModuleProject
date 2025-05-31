// components/CustomIcon.tsx
import { useThemeMode } from "flowbite-react";
import {
  HexColor,
  HSLAColor,
  HSLColor,
  RGBAColor,
  RGBColor,
  TailwindConstantColor,
} from "../../types/color.t";

type LogoIconProps = {
  size?: number;
  color?:
    | HexColor
    | RGBColor
    | RGBAColor
    | HSLColor
    | HSLAColor
    | TailwindConstantColor;
  darkColor?:
    | HexColor
    | RGBColor
    | RGBAColor
    | HSLColor
    | HSLAColor
    | TailwindConstantColor;
  hoverColor?:
    | HexColor
    | RGBColor
    | RGBAColor
    | HSLColor
    | HSLAColor
    | TailwindConstantColor;
  className?: string;
};

const LogoIcon = (props: LogoIconProps) => {
  const {
    size = 32,
    color = "#000000",
    darkColor = "#ffffff",
    hoverColor = "blue",
    className,
  } = props;

  const { mode } = useThemeMode();
  const isDarkMode = mode === "dark";

  return (
    <svg
      viewBox="0 0 584 528"
      width={size}
      height={size}
      fill={isDarkMode ? darkColor : color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      overflow="hidden"
      xmlSpace="preserve"
    >
      <g transform="translate(-460 -591)">
        <path
          d="M18.182 0 363.636 0C383.72 0 400 16.3165 400 36.4445L400 309.778C400 319.841 391.859 328 381.819 328 371.778 328 363.636 319.841 363.636 309.778L363.636 36.4445 18.182 36.4445C8.14036 36.4445 0 28.286 0 18.2224 0 8.15845 8.14036 0 18.182 0Z"
          stroke="#000000"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fillRule="evenodd"
          transform="matrix(-1 0 0 1 863.5 594.5)"
        />
        <path
          d="M18.2274 0 364.545 0C384.679 0 401 16.3165 401 36.4444L401 309.778C401 319.841 392.839 328 382.773 328 372.707 328 364.545 319.841 364.545 309.778L364.545 36.4444 18.2274 36.4444C8.1607 36.4444 0 28.286 0 18.2224 0 8.15844 8.1607 0 18.2274 0Z"
          stroke="#000000"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fillRule="evenodd"
          transform="matrix(-1 0 0 1 938.5 666.5)"
        />
        <g>
          <path d="M968.5 1043.5 666.5 1043.5C635.281 1043.5 609.875 1018.09 609.875 986.875L609.875 798.125C609.875 766.906 635.281 741.5 666.5 741.5L968.5 741.5C999.719 741.5 1025.12 766.906 1025.12 798.125L1025.12 986.875C1025.12 1018.09 999.719 1043.5 968.5 1043.5ZM666.5 779.25C656.1 779.25 647.625 787.725 647.625 798.125L647.625 986.875C647.625 997.275 656.1 1005.75 666.5 1005.75L968.5 1005.75C978.9 1005.75 987.375 997.275 987.375 986.875L987.375 798.125C987.375 787.725 978.9 779.25 968.5 779.25L666.5 779.25ZM779.75 949.125 704.25 949.125C693.812 949.125 685.375 940.669 685.375 930.25 685.375 919.831 693.812 911.375 704.25 911.375L779.75 911.375C790.188 911.375 798.625 919.831 798.625 930.25 798.625 940.669 790.188 949.125 779.75 949.125ZM779.75 873.625 704.25 873.625C693.812 873.625 685.375 865.169 685.375 854.75 685.375 844.331 693.812 835.875 704.25 835.875L779.75 835.875C790.188 835.875 798.625 844.331 798.625 854.75 798.625 865.169 790.188 873.625 779.75 873.625Z" />
          <path d="M930.75 864.187C930.75 885.036 913.849 901.937 893 901.937 872.151 901.937 855.25 885.036 855.25 864.187 855.25 843.339 872.151 826.437 893 826.437 913.849 826.437 930.75 843.339 930.75 864.187Z" />
          <path d="M893 918.094C863.517 918.094 845.812 931.59 845.812 945.067 845.812 951.805 863.517 958.562 893 958.562 920.671 958.562 940.187 951.824 940.187 945.067 940.187 931.59 921.69 918.094 893 918.094Z" />
        </g>
      </g>
    </svg>
  );
};

export default LogoIcon;
