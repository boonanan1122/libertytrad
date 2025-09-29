import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return new Response('Invalid email or password', { status: 400 })
  }

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) {
    return new Response('Invalid email or password', { status: 400 })
  }

  // สำหรับ dev/demo: คืน user (จริงๆ production ควร return JWT หรือ set cookie session)
  return Response.json({
    user: { id: user.id, email: user.email, role: user.role }
  })
}
