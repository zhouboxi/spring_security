CREATE TABLE mesext_user(
  id int NOT NULL,
  username varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE mesext_role (
  id int NOT NULL ,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
)
CREATE TABLE mesext_permission (
  id int NOT NULL ,
  name varchar(50) NOT NULL,
	description varchar(150) NOT NULL,
  PRIMARY KEY (id)
)
CREATE TABLE mesext_user_role (
  id int NOT NULL ,
  role_id int NOT NULL,
	user_id int NOT NULL,
  PRIMARY KEY (id)

)
CREATE TABLE mesext_role_permission (
  id int NOT NULL ,
  role_id int NOT NULL,
	permission_id int NOT NULL,
  PRIMARY KEY (id)
	)
ALTER TABLE mesext_user_role ADD CONSTRAINT FK_user_role_role FOREIGN KEY(role_id ) REFERENCES mesext_role(id) ON DELETE CASCADE;
ALTER TABLE mesext_user_role ADD CONSTRAINT FK_user_role_user FOREIGN KEY(user_id ) REFERENCES mesext_user(id) ON DELETE CASCADE;
ALTER TABLE mesext_role_permission ADD CONSTRAINT FK_role_permission_role FOREIGN KEY(role_id ) REFERENCES mesext_role(id) ON DELETE CASCADE;
ALTER TABLE mesext_role_permission ADD CONSTRAINT FK_role_permission_permission FOREIGN KEY(permission_id ) REFERENCES mesext_permission(id) ON DELETE CASCADE;