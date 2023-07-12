const projectQueries = {
    getAllProjects: `
    SELECT * FROM projects`,
    getProjectByID: `
    SELECT project_id, 
        user_id, title, 
        description, 
        todo, 
        img_small, 
        img_big, 
        github, 
        site
	FROM public.projects
	WHERE project_id=$1`,
    getProjectsByUser: `
    SELECT project_id, 
        user_id, title, 
        description, 
        todo, 
        img_small, 
        img_big, 
        github, 
        site
	FROM public.projects
	WHERE user_id=$1`,
    createProject: `
    INSERT INTO public.projects(
        user_id, 
        title, 
        description, 
        todo, 
        img_small, 
        img_big, 
        github, 
        site)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    deleteProject: `
    DELETE FROM public.projects
	WHERE project_id=$1`
}

module.exports = projectQueries;