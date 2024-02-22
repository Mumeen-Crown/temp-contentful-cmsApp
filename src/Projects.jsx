import useFetchProjects from './FetchProject.jsx'
const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if(loading) {
    return <section className="projects">
      <h2>Loading...</h2>
    </section>;
  }
  return (
    <section className='projects'>
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
        <div className="projects-center">
          {projects.map((project) => {
            const {id, url, imgUrl, title} = project;
            return <a href={url} key={id} target='_blank' rel='noreferrer' className='project'>
              <img src={imgUrl} alt={title}  className='img'/>
              <h5>{title}</h5>
            </a>
          })}
        </div>
      </div>
    </section>
  )
}
export default Projects