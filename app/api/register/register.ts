import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, password, firstName, lastName } = await req.json()

  if (!email || !password) {
    return new Response('Missing required fields', { status: 400 })
  }

  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) {
    return new Response('Email already exists', { status: 400 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      // role: "CUSTOMER" // กำหนด role ถ้าต้องการ
    }
  })

  return Response.json({ user: { id: user.id, email: user.email, role: user.role } })
}
