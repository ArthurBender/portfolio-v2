import Image from "next/image";

import { useTranslations } from 'next-intl';

import type { Experience } from "../../../types";

const ExperienceTooltipContent = ({ experience }: { experience: Experience | null}) => {
  const t = useTranslations();

  return (
    <>
      {experience && <div className="flex flex-col gap-4 border border-text text-text p-4 rounded-xl bg-surface max-w-[90vw] lg:max-w-150">
        <div className="flex gap-4">
          <Image src={experience.image} alt={experience.company} width={48} height={48} className="h-12 w-auto" />
          
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