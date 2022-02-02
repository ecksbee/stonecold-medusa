// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyHcaptcha } from '../../lib/hcaptcha'

type Data = {
  response: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = req.body as Data
  const vRes = await verifyHcaptcha(data.response)
  res.status(vRes.status)
  res.send(vRes.body)
}

export default handler