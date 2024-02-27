import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
        id: z.string(), 
        clientId: z.string(),
        categoryId: z.number(),
        subcategoryId: z.number(),
        urgency: z.string(),
        stateId: z.number(),
        cityId: z.number(),
        description: z.string(),
        status:  z.string(),
        publish: z.number(),
        createdAt: z.string(),
        updatedAt: z.string(),
        name: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        phoneNumber: z.string(),
        password: z.string(),
        rating: z.number().nullable(),
        language: z.string()
})

export type Task = z.infer<typeof taskSchema>

