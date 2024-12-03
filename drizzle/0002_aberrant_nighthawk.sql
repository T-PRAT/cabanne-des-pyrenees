ALTER TABLE "hut" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "hut" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;