import clientPromise from '../lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Resume } from './schema';
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const client = await clientPromise;
  const db = client.db("cvfoundry");

  switch (req.method) {
    case 'POST':
      try{
        const newResume: Resume = req.body;
        await db.collection('resumes').insertOne(newResume);
        res.status(201).json(newResume);
      }
      catch(e){
        res.status(500).json({error: 'Unable to create resume'});
      }
  }
}