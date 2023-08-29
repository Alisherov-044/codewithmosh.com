import { prisma } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const statistics = await prisma.statistics.findMany();
      return res.status(200).json(statistics);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await prisma.statistics.create({ data });
      const statistics = await prisma.statistics.findMany();
      return res.status(201).json(statistics);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      await prisma.statistics.delete({ where: { id } });
      const statistics = await prisma.statistics.findMany();
      return res.status(200).json(statistics);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
