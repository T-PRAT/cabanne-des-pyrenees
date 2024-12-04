import { serial, text, pgTable, uniqueIndex, integer, timestamp, varchar } from 'drizzle-orm/pg-core'
import { InferInsertModel } from 'drizzle-orm'

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull()
  },
  users => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email)
    }
  }
)

export const sessions = pgTable('sessions', {
  id: serial('id').primaryKey(),
  userId: integer('userId')
    .references(() => users.id)
    .notNull(),
  expiresAt: timestamp('expires_at').notNull()
})

export const hut = pgTable('hut', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  latitude: integer().notNull(),
  longitude: integer().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
})

export type NewUser = InferInsertModel<typeof users>
export type NewSession = InferInsertModel<typeof sessions>
export type NewHut = InferInsertModel<typeof hut>
