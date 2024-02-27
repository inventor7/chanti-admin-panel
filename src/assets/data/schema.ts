import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.number(),
    stateId: z.number(),
    cityId: z.number(),
    rating: z.nullable(z.number()),
    categoryId: z.number(),
    language: z.string(),
    verified: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    idVerification: z.string(),
    hasSentVerification: z.string(),
})

export type Task = z.infer<typeof taskSchema>
