
const ProjectCart = (project) => {

    const {project_name,project_img,price,project_type} = project.project;
    console.log(project);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={project_img} alt="Shoes" className="rounded-xl h-52 w-full" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{project_name}</h2>
            <h2 className="card-title">{project_type}</h2>
            <p className="text-xl text-orange-500">Price: {price}</p>
            <div className="card-actions">
                
                    <button className="btn btn-primary">Book Now</button>
               
            </div>
        </div>
    </div>
    );
};

export default ProjectCart;