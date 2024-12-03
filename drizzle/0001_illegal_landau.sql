CREATE TABLE IF NOT EXISTS "hut" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hut_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"latitude" integer NOT NULL,
	"longitude" integer NOT NULL
);
