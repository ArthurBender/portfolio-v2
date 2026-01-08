import programmingImg from "../assets/programming.jpg"

const Introduction = () => {
  return (
    <div className="relative">
      <img src={programmingImg} alt="Programming" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black via-20% to-transparent"></div>

      <div className="flex gap-4 section z-10">
        <div className="flex-1 flex flex-col gap-5 text-white text-center my-auto z-2">
          <h1 className="text-5xl font-bold">Arthur Bender</h1>
          <h3 className="text-2xl">Full Stack Developer</h3>

          <div className="flex gap-3 mx-auto text-4xl items-center hero-tech-list h-20">
            <i className="devicon-rails-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-docker-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
          </div>
        </div>

        <div className="flex-1 bg-background text-white border border-white shadow-lg p-6 overflow-hidden rounded-xl opacity-70">
          I'm a full-stack developer with more than 8 years of experience in the field, passionate about technology and development. I really enjoy learning and I am a lively and positive person, facilitating teamwork.<br /><br />
          I have solid knowledge of Ruby on Rails, having worked with the framework for over 6 years. Recently, I have been working on projects using React, improving my Frontend skills. I have also used technologies such as Python, Android, PHP, and Docker in various projects.<br /><br />
          My goal is to continue growing professionally, learning new languages and technologies, or deepening my expertise in those I already master, contributing with efficient and innovative solutions to the projects I work on.
        </div>
      </div>
    </div>
  )
}

export default Introduction;