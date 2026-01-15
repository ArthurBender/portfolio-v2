import { useTranslation } from "react-i18next";

import programmingImg from "../assets/programming.jpg"

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pt-20 pb-30 -mb-12">
      <img src={programmingImg} alt="Programming" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-dark via-dark via-20% to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-14 bg-background"></div>

      <div className="flex flex-col md:flex-row gap-12 section z-10 relative">
        <div className="md:flex-1 flex flex-col gap-6 md:gap-12 text-light text-center my-auto">
          <h1 className="text-5xl md:text-8xl font-bold">Arthur Bender</h1>
          <h3 className="text-3xl md:text-4xl">{t("introduction.subtitle")}</h3>

          <div className="flex gap-3 mx-auto text-4xl md:text-5xl items-center hero-tech-list h-20 w-75 justify-center">
            <i className="devicon-rails-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-docker-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
          </div>
        </div>

        <div className="md:flex-1 max-w-170 bg-background/70 text-text border border-text shadow-lg p-6 rounded-xl h-fit my-auto">
          {t("introduction.aboutMe").split('\n').map((paragraph, i) => (
            <p key={i} className="not-last:mb-4 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Introduction;