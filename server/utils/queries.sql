-- Users table
CREATE TABLE users (
	user_id serial NOT NULL PRIMARY KEY, 
	email varchar(45) NOT NULL UNIQUE,
	password varchar(100) NOT NULL,
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
	date varchar(45) NOT NULL,
	development varchar(45) NOT NULL,
	description text NOT NULL,
	done text NOT NULL, 
	todo text NOT NULL, 
	img_small varchar(200),
	img_big varchar(200),
	github varchar(200),
	site varchar(200),
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	ON DELETE CASCADE
);

-- Insert users
INSERT INTO users(
	email, password, photo, firstname, lastname, curse, github)
	VALUES 	('saana.toivonen@example.com', 'saana.toivonen@example.com',
			'https://randomuser.me/api/portraits/women/77.jpg', 
			'Saana', 'Toivonen', '22-09', 'https://github.com/Saana'),
			('debra.rodriquez@example.com', 'debra.rodriquez@example.com',
			'https://randomuser.me/api/portraits/women/35.jpg', 
			'Debra', 'Rodriquez', '22-09', 'https://github.com/Debra'),
			('aaron.toivonen@example.com', 'aaron.toivonen@example.com',
			'https://randomuser.me/api/portraits/men/70.jpg', 
			'Aaron', 'Fetcher', '23-01', 'https://github.com/Aaron'),
			('sandrine.toivonen@example.com', 'sandrine.toivonen@example.com',
			'https://randomuser.me/api/portraits/women/50.jpg', 
			'Sandrine', 'Lambert', '23-01', 'https://github.com/Sandrine'),
			('michal.toivonen@example.com', 'michal.toivonen@example.com',
			'https://randomuser.me/api/portraits/women/77.jpg', 
			'Michal', 'Toivonen', '23-01', 'https://github.com/Michal'),
			('becabecks3@gmail.com', 'becabecks3@gmail.com', 
			'https://avatars.githubusercontent.com/u/101715001?v=4',
			'Rebeca', 'Arrogante', '23-04', 'https://github.com/becabecks3');
-- Insert projects
INSERT INTO public.projects(
	user_id, title, date, development, description, done, todo, img_small, img_big, github, site)
	VALUES (1, 'Personal Web', '2023-03-23', 'Front-End',
			'Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'- Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula. Nam nec massa egestas, tristique quam sit amet, maximus lacus.
			- Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper. Aenean rutrum mauris nulla, sit amet finibus diam sagittis a.
			- Nunc at est id nisl imperdiet pulvinar.',
			'- Morbi vitae eleifend lectus, vel rhoncus tortor. Curabitur posuere urna aliquet leo maximus porttitor. Suspendisse potenti. Vivamus aliquam at augue in commodo. Nullam porttitor at mi at vestibulum.
			- In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque.
			- Nunc bibendum faucibus sem vitae aliquet. Vivamus ac lectus nunc. Fusce ac leo id enim sagittis aliquam id at neque.',
			'https://i.ibb.co/6t0DC7r/biografia-small.jpg', 'https://i.ibb.co/VCb0P9G/biografia-big.jpg',
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(2, 'Form Web', '2023-05-01', 'Full-Stack',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed.',
			'- Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.
			- Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.
			- Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'- Morbi vitae eleifend lectus, vel rhoncus tortor. Curabitur posuere urna aliquet leo maximus porttitor. Suspendisse potenti.
			- Vivamus aliquam at augue in commodo. Nullam porttitor at mi at vestibulum. In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque. Nunc bibendum faucibus sem vitae aliquet.
			- Vivamus ac lectus nunc. Fusce ac leo id enim sagittis aliquam id at neque.',
			'https://i.ibb.co/NtGbRf0/contacto-small.jpg', 'https://i.ibb.co/4RxNYjB/contacto-big.jpg', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(3, 'Portfolio', '2022-04-01', 'Back-End',
			'Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'- Nunc lacinia dui sed ex molestie commodo. Nulla eu tellus justo. Etiam scelerisque nunc vitae velit ultrices, quis semper arcu tincidunt. Sed luctus dictum est maximus auctor.
			- Ut pretium ullamcorper dictum. Aenean at urna nec tellus placerat condimentum vitae a ante. Sed quis maximus diam. Suspendisse vel mattis turpis. Nunc non urna sapien. Ut in leo varius, dignissim ex sit amet, egestas nunc.
			- Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet semper justo.',
			'- Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus.
			- Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo.
			- Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'https://i.ibb.co/pXrWCDy/portfolio-small.jpg', 'https://i.ibb.co/zhLv5GT/portfolio-big.jpg', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(4, 'Personal Web', '2023-03-25', 'Full-Stack',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu.',
			'- Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. 
			- Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo.
			- Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'- Nullam hendrerit augue mollis sapien pretium, sit amet congue enim porttitor. Ut quis commodo est, in vestibulum ex. Aenean lobortis rutrum tellus sed porta. 
			- Vivamus nec iaculis orci, sed efficitur arcu. Morbi mollis sit amet elit ut venenatis. Nunc eget mauris lacus. Aenean sem erat, mattis at hendrerit in, bibendum auctor nulla. 
			- Etiam consequat leo vitae consequat tempor. Sed et nibh et metus viverra ornare. Integer vel vehicula massa.',
			'https://i.ibb.co/6t0DC7r/biografia-small.jpg', 'https://i.ibb.co/VCb0P9G/biografia-big.jpg', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(5, 'Form web', '2023-04-21', 'Back-End',
			'Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
			'- Nullam hendrerit augue mollis sapien pretium, sit amet congue enim porttitor. Ut quis commodo est, in vestibulum ex. Aenean lobortis rutrum tellus sed porta. Vivamus nec iaculis orci, sed efficitur arcu.
			- Morbi mollis sit amet elit ut venenatis. Nunc eget mauris lacus. Aenean sem erat, mattis at hendrerit in, bibendum auctor nulla. Etiam consequat leo vitae consequat tempor.
			- Sed et nibh et metus viverra ornare. Integer vel vehicula massa.',
			'- Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.
			- Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.
			- Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
			'https://i.ibb.co/NtGbRf0/contacto-small.jpg', 'https://i.ibb.co/4RxNYjB/contacto-big.jpg',  
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(5, 'Portfolio', '2023-03-19', 'Front-End',
			'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Etiam commodo urna fringilla tellus placerat molestie.',
			'- Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.
			- Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.
			- Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
			'- Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.
			- Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.
			- Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
			'https://i.ibb.co/pXrWCDy/portfolio-small.jpg', 'https://i.ibb.co/zhLv5GT/portfolio-big.jpg', 
			'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/'),
			(6, 'Gigs4You', '2023-06-25', 'Full-Stack',
			'Proyecto final donde se une lo aprendido tanto en Front como en Back. Gigs4You es una apliación web para buscar eventos musicales, tanto por género como por geolocalización.',
			'- Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.
			- Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.
			- Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.',
			'- Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.
			- Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.
			- Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
			'https://github.com/becabecks3/Final-Project-Full-Stack/raw/main/Client/src/assets/screenshots/home.png',
			'https://github.com/becabecks3/Final-Project-Full-Stack/raw/main/Client/src/assets/screenshots/mapa.png',
			'https://github.com/becabecks3/Final-Project-Full-Stack',
			'https://github.com/becabecks3/Final-Project-Full-Stack'
			),
			(6, 'Quizz-Project', '2023-05-15', 'Front-End',
			'This project aims to put into practice knowledge of HTML, CSS, and JavaScript. The JavaScript part, in particular, focuses on form validation, DOM manipulation, and executing user interactions.',
			'- Nullam hendrerit augue mollis sapien pretium, sit amet congue enim porttitor. Ut quis commodo est, in vestibulum ex. Aenean lobortis rutrum tellus sed porta. Vivamus nec iaculis orci, sed efficitur arcu.
			- Morbi mollis sit amet elit ut venenatis. Nunc eget mauris lacus. Aenean sem erat, mattis at hendrerit in, bibendum auctor nulla. Etiam consequat leo vitae consequat tempor.
			- Sed et nibh et metus viverra ornare. Integer vel vehicula massa.', 
			'- Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.
			- Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.
			- Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
			'https://github.com/becabecks3/Quizz-Project/raw/main/assets/screenshots/captura2.png',
			'https://github.com/becabecks3/Quizz-Project/raw/main/assets/screenshots/captura8.png',
			'https://github.com/becabecks3/Quizz-Project',
			'https://github.com/becabecks3/Quizz-Project'
			);

const nowDate = new Date();
let date = ''
if (nowDate.getMonth()+1 < 10) {
  date = nowDate.getFullYear()+'-0'+(nowDate.getMonth()+1)+'-'+nowDate.getDate();
} else {
  date = nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+nowDate.getDate();
}