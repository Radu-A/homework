-- Users table
CREATE TABLE users (
	user_id serial NOT NULL PRIMARY KEY, 
	email varchar(45) NOT NULL UNIQUE,
	photo varchar(100) NOT NULL,
	firstname varchar(45) NOT NULL, 
	lastname varchar(100),
	curse varchar(45),
	github varchar(45)
);
--Projects table
CREATE TABLE projects (
	project_id serial NOT NULL PRIMARY KEY,
	user_id int,
	title varchar(100) NOT NULL,
	description varchar(500) NOT NULL,
	todo varchar(500) NOT NULL, 
	img_small varchar(100),
	img_big varchar(45),
	github varchar(45),
	site varchar(45),
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	ON DELETE CASCADE
);
-- Insert users
INSERT INTO public.users(
	email, photo, firstname, lastname, curse, github)
	VALUES ('saana.toivonen@example.com', 
			'https://randomuser.me/api/portraits/women/77.jpg', 
			'Saana', 'Toivonen', '23-04', 'https://github.com/Saana'),
			('debra.rodriquez@example.com', 
			'https://randomuser.me/api/portraits/women/35.jpg', 
			'Debra', 'Rodriquez', '23-04', 'https://github.com/Debra'),
			('aaron.toivonen@example.com', 
			'https://randomuser.me/api/portraits/men/70.jpg', 
			'Aaron', 'Fetcher', '23-01', 'https://github.com/Aaron'),
			('sandrine.toivonen@example.com', 
			'https://randomuser.me/api/portraits/women/50.jpg', 
			'Sandrine', 'Lambert', '23-01', 'https://github.com/Sandrine'),
			('michal.toivonen@example.com', 
			'https://randomuser.me/api/portraits/women/77.jpg', 
			'Michal', 'Toivonen', '23-01', 'https://github.com/Michal');
-- Insert projects
INSERT INTO public.projects(
	user_id, title, description, todo, img_small, img_big, github, site)
	VALUES (1, 'personal web',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'https://ibb.co/c8h2nSk', 'https://ibb.co/B6vHS3J', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(2, 'form web',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'https://ibb.co/b5nd2rp', 'https://ibb.co/q72V6hH', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(3, 'portfolio',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'https://ibb.co/x58mVvH', 'https://ibb.co/hRnzMDJ', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(4, 'personal web',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'https://ibb.co/c8h2nSk', 'https://ibb.co/B6vHS3J', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(5, 'form web',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'https://ibb.co/b5nd2rp', 'https://ibb.co/q72V6hH',  
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(5, 'portfolio',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'https://ibb.co/x58mVvH', 'https://ibb.co/hRnzMDJ', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/');