insert into user_table(id,birthdate,name) values (1001, current_date(), 'kuwer');
insert into user_table(id,birthdate,name) values (1002, current_date(), 'Ankur');
insert into user_table(id,birthdate,name) values (1003, current_date(), 'John');

insert into post(id, description, user_id) values (2001, 'learn aws', 1001);
insert into post(id, description, user_id) values (2002, 'learn azure', 1002);
insert into post(id, description, user_id) values (2003, 'learn gcp', 1003);