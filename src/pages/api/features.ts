import { prisma } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const features = await prisma.features.findMany();
      return res.status(200).json(features);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await prisma.features.create({ data });
      const features = await prisma.features.findMany();
      return res.status(201).json(features);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "PATCH") {
    const { id, icon, slug, title, description, image, color } = req.body;

    try {
      await prisma.features.update({
        where: { id },
        data: { title, color, description, icon, slug, image },
      });
      const features = await prisma.features.findMany();
      return res.status(201).json(features);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      await prisma.features.delete({ where: { id } });
      const features = await prisma.features.findMany();
      return res.status(200).json(features);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
