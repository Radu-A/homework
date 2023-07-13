const projectQueries = {
    getAllProjects: `
    SELECT project_id, p.user_id, u.firstname, u.lastname, u.curse, u.github,
	title, date, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id`,
    getProjectByID: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
	WHERE project_id=$1`,
    getProjectsByUser: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
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