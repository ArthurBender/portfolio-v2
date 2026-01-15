import { useTranslation } from "react-i18next";

import type { JSX } from "react";
import type { SwitchType } from "../types";

import { AiOutlineRadarChart } from "react-icons/ai";
import { FaCircleNotch } from "react-icons/fa";

interface SkillSwitchProps {
  switchData: SwitchType;
  value: string;
  setValue: (value: string) => void;
  vertical?: boolean;
}

const iconMapping: Record<string, JSX.Element> = {
  "facirclenotch": <FaCircleNotch />,
  "aioutlineradarchart": <AiOutlineRadarChart />,
}

const SkillSwitch = ({ switchData, value, setValue, vertical }: SkillSwitchProps) => {
  const { t } = useTranslation();

  const formatLabel = (option: { value: string; label: string; labelType: "key" | "icon" }) => {
    if (option.labelType === "key") {
      return <span className="uppercase">{t(option.label)}</span>;
    } else {
      return <span className="text-2xl">{iconMapping[option.label]}</span>;
    }
  }

  const checked = value === switchData.options[1].value;
  const checkedLabelContent = checked ? switchData.options[1] : switchData.options[0];

  const checkedLabel = formatLabel(checkedLabelContent);

  let handleClasses = "absolute bg-primary text-surface rounded-lg transition-all! flex justify-center items-center";
  if (vertical) {
    handleClasses += " left-1 right-1 h-1/2";
    handleClasses += checked ? " translate-y-full -top-1" : " translate-y-0 top-1"
  } else {
    handleClasses += " top-1 bottom-1 w-1/2";
    handleClasses += checked ? " translate-x-full -left-1" : " translate-x-0 left-1"
  }

  const handleClick = () => {
    setValue(checked ? switchData.options[0].value : switchData.options[1].value);
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg text-text">{t(switchData.nameKey)}</h2>
      <div className={`cursor-pointer grid gap-6 w-fit border border-primary text-primary rounded-lg p-2 relative select-none ${vertical ? "grid-rows-2" : "grid-cols-2"}`} onClick={handleClick}>
        <div className={handleClasses}>
          {checkedLabel}
        </div>

        <div className="text-center">{formatLabel(switchData.options[0])}</div>
        <div className="text-center">{formatLabel(switchData.options[1])}</div>
      </div>
    </div>
  )
}

export default SkillSwitch;