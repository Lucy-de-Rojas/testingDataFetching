// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { DataModel } from '@/dataModel';




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataModel[]>
) {

        let data:DataModel[] = [
                {
                        id: 3,
                        name: 'benji'
                },{
                id: 1,
                name: 'lucy',
        }, {
                id: 2,
                name: 'papa',
        }];


  res.status(200).json(data)
}
