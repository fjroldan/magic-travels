#!/bin/bash
set -e
psql -U postgres <<-EOSQL
	-- Create the database user
	create database $NAME_DB;
	-- Create the user
	create user $USER_DB with encrypted password '$PASS_DB';
	-- Grant privileges to the user
	grant all privileges on database $NAME_DB to $USER_DB;
	-- Connect to the newly created database
	\c $NAME_DB;
	-- Grant usage and create privileges on the public schema
	GRANT USAGE ON SCHEMA public TO $USER_DB;
	GRANT CREATE ON SCHEMA public TO $USER_DB;
	-- Grant all privileges on existing tables in the public schema
	GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $USER_DB;
	-- Grant all privileges on existing sequences in the public schema
	GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO $USER_DB;
	-- Grant all privileges on existing functions in the public schema
	GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO $USER_DB;
	-- Optionally, set default privileges for future objects in the public schema
	ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO $USER_DB;
	ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO $USER_DB;
	ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO $USER_DB;
EOSQL