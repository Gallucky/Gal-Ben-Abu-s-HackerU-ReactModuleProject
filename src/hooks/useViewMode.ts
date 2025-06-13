import { useState } from "react";
import { ViewMode } from "../enums/ViewModes.Enum";

const useViewMode = () => {
  const getViewMode = (width: number) => {
    if (width < ViewMode.Tablet) return ViewMode.Mobile;
    if (width < ViewMode.PCAndLarger) return ViewMode.Tablet;
    return ViewMode.PCAndLarger;
  };

  const [viewMode, setViewMode] = useState(getViewMode(window.innerWidth));

  const isMobile = viewMode === ViewMode.Mobile;
  const isTablet = viewMode === ViewMode.Tablet;
  const isPCAndLarger = viewMode === ViewMode.PCAndLarger;

  return {
    viewMode,
    setViewMode,
    isMobile,
    isTablet,
    isPCAndLarger,
    getViewMode,
  };
};

export default useViewMode;
