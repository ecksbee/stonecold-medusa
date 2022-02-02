// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, SignUp } from '@prisma/client'
import { verifyCsrfToken, tokenKey } from '../../lib/csrf'

type Data = {
  firstName: string
  lastName: string
  email: string
  phone: string
  reason: string
}
const prisma = new PrismaClient()

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SignUp>
) => {
  const headers : any = req.headers
  if (!verifyCsrfToken(headers[tokenKey.toLowerCase()])) {
    res.status(403)
    res.end('Invalid CSRF token')
    return
  }
  const data = req.body as Data
  const result = await prisma.signUp.create({
    data: data
  })
  res.status(200).json(result)
}

export default handler