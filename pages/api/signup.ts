// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  res.status(200)
}

export default handler