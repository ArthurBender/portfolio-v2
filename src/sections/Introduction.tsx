import programmingImg from "../assets/programming.jpg"

const Introduction = () => {
  return (
    <div className="relative py-20">
      <img src={programmingImg} alt="Programming" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-dark via-dark via-20% to-transparent"></div>

      <div className="flex flex-col md:flex-row gap-12 section z-10 relative">
        <div className="md:flex-1 flex flex-col gap-6 md:gap-12 text-light text-center my-auto">
          <h1 className="text-5xl md:text-8xl font-bold">Arthur Bender</h1>
          <h3 className="text-3xl md:text-4xl">Full Stack Developer</h3>

          <div className="flex gap-3 mx-auto text-4xl md:text-5xl items-center hero-tech-list h-20 w-75 justify-center">
            <i className="devicon-rails-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-docker-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
          </div>
        </div>

        <div className="md:flex-1 max-w-170 bg-background/70 text-text border border-text shadow-lg p-6 rounded-xl h-fit my-auto">
          I'm a full-stack developer with more than 8 years of experience in the field, passionate about technology and development. I really enjoy learning and I am a lively and positive person, facilitating teamwork.<br /><br />
          I have solid knowledge of Ruby on Rails, having worked with the framework for over 6 years. Recently, I have been working on projects using React, improving my Frontend skills. I have also used technologies such as Python, Android, PHP, and Docker in various projects.<br /><br />
          My goal is to continue growing professionally, learning new languages and technologies, or deepening my expertise in those I already master, contributing with efficient and innovative solutions to the projects I work on.
        </div>
      </div>
    </div>
  )
}

export default Introduction;