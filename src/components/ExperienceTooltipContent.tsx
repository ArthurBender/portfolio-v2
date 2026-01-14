import { useTranslation } from "react-i18next";

import type { Experience } from "../types";

const ExperienceTooltipContent = ({ experience }: { experience: Experience | null}) => {
  const { t } = useTranslation();

  return (
    <>
      {experience && <div className="flex flex-col gap-4 border border-text text-text p-4 rounded-xl bg-surface max-w-[90vw]">
        <div className="flex gap-4">
          <img src={experience.image} alt={experience.company} className="h-12" />
          
          <div className="flex flex-col">
            <span className="text-lg"><b>{experience.company}</b> - {t(experience.positionKey)}</span>
            <span>{experience.start} {experience.end && `- ${experience.end}`}</span>
          </div>
        </div>

        <span>{t(experience.descriptionKey)}</span>
      </div>}
    </>
  )
}

export default ExperienceTooltipContent;