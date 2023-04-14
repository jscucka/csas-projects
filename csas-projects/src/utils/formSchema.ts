import { z, ZodType } from 'zod';

export const formSchema: ZodType = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'Jméno musí mít aspoň 2 znaky' })
      .max(20, { message: 'Jméno musí být menší než 20 znaků.' }),
    lastName: z
      .string()
      .min(2, { message: 'Příjmení musí mít aspoň 2 znaky' })
      .max(20, { message: 'Příjmení musí být menší než 20 znaků.' }),
    email: z.string().email({ message: 'Nevalidní email.' }).optional(),
    age: z.number().min(18, { message: 'Musí ti bý 18.' }),
    password: z
      .string()
      .min(4, { message: 'Heslo musí být delší než 3 znaky.' }),
    confirmPassword: z
      .string()
      .min(4, { message: 'Heslo musí být delší než 3 znaky.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Hesla se neshodují',
    path: ['confirmPassword'],
  });
