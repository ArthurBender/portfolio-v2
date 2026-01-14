import programmingImg from "../assets/programming.jpg"

const Introduction = () => {
  return (
    <div className="relative py-20">
      <img src={programmingImg} alt="Programming" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black via-20% to-transparent"></div>

      <div className="flex gap-12 section z-10">
        <div className="flex-1 flex flex-col gap-12 text-white text-center my-auto z-2">
          <h1 className="text-8xl font-bold">Arthur Bender</h1>
          <h3 className="text-4xl">Full Stack Developer</h3>

          <div className="flex gap-3 mx-auto text-5xl items-center hero-tech-list h-20 w-75">
            <i className="devicon-rails-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-docker-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
          </div>
        </div>

        <div className="flex-1 max-w-170 bg-background/70 text-white border border-white shadow-lg p-6 rounded-xl z-1 h-fit my-auto">
          I'm a full-stack developer with more than 8 years of experience in the field, passionate about technology and development. I really enjoy learning and I am a lively and positive person, facilitating teamwork.<br /><br />
          I have solid knowledge of Ruby on Rails, having worked with the framework for over 6 years. Recently, I have been working on projects using React, improving my Frontend skills. I have also used technologies such as Python, Android, PHP, and Docker in various projects.<br /><br />
          My goal is to continue growing professionally, learning new languages and technologies, or deepening my expertise in those I already master, contributing with efficient and innovative solutions to the projects I work on.
        </div>
      </div>
    </div>
  )
}

export default Introduction;