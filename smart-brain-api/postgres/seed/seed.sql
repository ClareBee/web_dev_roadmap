BEGIN TRANSACTION;
INSERT INTO users (name, email, entries, joined) values ('Tim', 'tim@example.com', 5, 2019-01-1);
COMMIT;
