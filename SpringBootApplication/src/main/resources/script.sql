INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_COMPANY');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

-- Default admin password: admin
INSERT INTO public.users(email, name, password, username)
	VALUES ('admin', 'mail@mail.com', '$2a$10$Ybr0BDjBODyYBLWfwTUSFuD26Q5V0y7oPBzy8EmV2LrYISp9sXyXq', 'admin');
COMMIT;

-- Set admin role_admin
INSERT INTO public.user_roles(
	user_id, role_id)
	VALUES (1, 1);
COMMIT;


