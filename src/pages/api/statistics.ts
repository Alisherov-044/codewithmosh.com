import { prisma } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  if (req.method === "GET") {
    const statistics = await prisma.statistics.findMany();
    res.status(200).json(statistics);
  }

  if (req.method === "POST") {
    const statistic = await prisma.statistics.create({ data });
    res.status(201).json(statistic);
  }
};
