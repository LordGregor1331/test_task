import React, {useState, useEffect} from 'react'
import Slider from './Slider'

const Pagination =({ projects}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const projectsPerPage = 4

    const lastProjectIndex = currentPage * projectsPerPage
    const firstProjectIndex = lastProjectIndex - projectsPerPage
    const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex)
    
    const totalPages = Math.ceil(projects.length / projectsPerPage)

    useEffect(() => {
      if (currentPage > totalPages) {
        setCurrentPage(1);
      }
    }, [totalPages, currentPage]);
    

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1)
        }
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
        }
    }
    return(
        <div>
            <ul>
                {currentProjects.map((project) => (
                    <li key={project._id} className='project-card'>
                        <h3 className='project-title'>{project.generalInfo.name}</h3>
                        <Slider images={project.images}/>
                        <p><strong>Price:</strong> {project.generalInfo?.price ? `${project.generalInfo.price} €` : ""}</p>
                        <p><strong>Type:</strong> {project.generalInfo?.type}</p>
                        <p><strong>Rooms:</strong> {project.generalInfo?.rooms}</p>
                        <p><strong>Bathrooms:</strong> {project.generalInfo?.bathrooms}</p>
                        <p><strong>Size:</strong> {project.generalInfo?.size ? `${project.generalInfo.size} m²` : "Undefined"}</p>
                    </li>
                ))}
            </ul>
            <div className='pagination'>
                <button onClick={prevPage} disabled={currentPage === 1}>&#8592;</button>
                <span>Page №{currentPage} from {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>&#8594;</button>
            </div>
        </div>
    )
}
export default Pagination