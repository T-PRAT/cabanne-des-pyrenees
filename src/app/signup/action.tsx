'use server'

import { db } from 'db'
import { users } from 'db/schema'
import { z } from 'zod'
import bcrypt from 'bcrypt'

export const SignupFormSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit comporter au moins 2 caractères.' }).trim(),
  email: z.string().email({ message: 'Veuillez entrer un email valide.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Doit comporter au moins 8 caractères.' })
    .regex(/[a-zA-Z]/, { message: 'Doit contenir au moins une lettre.' })
    .regex(/[0-9]/, { message: 'Doit contenir au moins un chiffre.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Doit contenir au moins un caractère spécial.'
    })
    .trim()
})

export async function signup(state, formData) {
  const validateResult = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  })
  if (!validateResult.success) {
    return {
      errors: validateResult.error.flatten().fieldErrors
    }
  }

  const hashedPassword = await bcrypt.hash(validateResult.data.password, 10)
  const data = await db
    .insert(users)
    .values({
      name: validateResult.data.name,
      email: validateResult.data.email,
      password: hashedPassword
    })
    .returning({ id: users.id })
  const user = data[0]
}
