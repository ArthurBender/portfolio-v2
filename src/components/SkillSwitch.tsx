import type { JSX } from "react";

interface SwitchType {
  name: string;
  value: string;
  setValue: (value: string) => void;
  options: {
    value: string;
    label: JSX.Element;
  }[];
}

interface SkillSwitchProps {
  switchData: SwitchType;
  vertical?: boolean;
}


const SkillSwitch = ({ switchData, vertical }: SkillSwitchProps) => {
  const checked = switchData.value === switchData.options[1].value;
  const checkedLabel = checked ? switchData.options[1].label : switchData.options[0].label;

  let handleClasses = "absolute bg-primary text-white rounded-lg transition-all duration-200 flex justify-center items-center";
  if (vertical) {
    handleClasses += " left-1 right-1 h-1/2";
    handleClasses += checked ? " translate-y-full -top-1" : " translate-y-0 top-1"
  } else {
    handleClasses += " top-1 bottom-1 w-1/2";
    handleClasses += checked ? " translate-x-full -left-1" : " translate-x-0 left-1"
  }

  const handleClick = () => {
    switchData.setValue(checked ? switchData.options[0].value : switchData.options[1].value);
  }

  return (
    <div className={`flex gap-6 w-fit border border-white text-white rounded-lg p-2 relative select-none ${vertical && "flex-col"}`} onClick={handleClick}>
      <div className={handleClasses}>
        {checkedLabel}
      </div>

      <div className="flex-1">{switchData.options[0].label}</div>
      <div className="flex-1">{switchData.options[1].label}</div>
    </div>
  )
}

export default SkillSwitch;