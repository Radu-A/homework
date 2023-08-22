const userQueries = {
  getAllUsers: `SELECT * FROM users`,
  getUserById: `
    SELECT * 
        FROM users
        WHERE user_id=$1`,
  getUserByEmail: `
    SELECT * 
        FROM users
        WHERE email=$1`,
  createUser: `
    INSERT INTO public.users(
        email, password, photo, firstname, lastname, curse, github)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
  deleteUser: `
    DELETE FROM public.users
	    WHERE user_id=$1`,
};

module.exports = userQueries;
