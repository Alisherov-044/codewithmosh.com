import { prisma } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const statistics = await prisma.statistics.findMany();
      res.status(200).json(statistics);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      const statistic = await prisma.statistics.create({ data });
      res.status(201).json(statistic);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
