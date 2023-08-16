const projectQueries = {
  getAllProjects: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, development, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id`,
  getProjectByID: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, development, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
	WHERE project_id=$1`,
  getProjectsByUser: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, development, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
	WHERE p.user_id=$1`,
  getProjectsByEmail: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, development, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
	WHERE u.email=$1`,
  getProjectsDateOrder: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, development, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
	ORDER BY date DESC`,
  getProjectsCurseOrder: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, development, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
	ORDER BY curse DESC`,
  getProjectsDevelopmentOrder: `
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
	title, date, development, description, done, todo, img_small, img_big, p.github, site
	FROM projects AS p
	INNER JOIN users AS u ON p.user_id=u.user_id
	ORDER BY development`,
  // getProjecsByKeyword: `
  // SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
  // title, date, development, description, done, todo, img_small, img_big, p.github, site
  // FROM projects AS p
  // INNER JOIN users AS u ON p.user_id=u.user_id
  // WHERE LOWER ( title ) LIKE '%${keyword}%'
  //   OR LOWER (development) LIKE '%${keyword}%'
  //   OR LOWER (description) LIKE '%${keyword}%'
  //   OR LOWER (u.firstname) LIKE '%${keyword}%'
  //   OR LOWER (u.lastname) LIKE '%${keyword}%'`,
  createProject: `
    INSERT INTO public.projects(
        user_id,
        title,
        date,
        development,
        description,
        done,
        todo,
        img_small,
        img_big,
        github,
        site)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
  deleteProject: `
    DELETE FROM public.projects
	WHERE project_id=$1`,
};

module.exports = projectQueries;
