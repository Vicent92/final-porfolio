import { DataBase } from '@/dataBase/skils/back/db'
import { NextApiRequest, NextApiResponse } from 'next'

const allData = async (req: NextApiRequest, res: NextApiResponse) => {
    const service = new DataBase()
    const data = await service.allData()

    res.status(200).json(data)
}

export default allData