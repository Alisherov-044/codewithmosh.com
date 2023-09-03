import { prisma } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const courses = await prisma.courses.findMany();
      return res.status(200).json(courses);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await prisma.courses.create({ data });
      const courses = await prisma.courses.findMany();
      return res.status(201).json(courses);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "PATCH") {
    const {
      id,
      name,
      description,
      image,
      price,
      forMonth,
      discount,
      link,
      duration,
    } = req.body;

    try {
      await prisma.courses.update({
        where: { id },
        data: {
          name,
          price,
          description,
          forMonth,
          discount,
          image,
          link,
          duration,
        },
      });
      const courses = await prisma.courses.findMany();
      return res.status(201).json(courses);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      await prisma.courses.delete({ where: { id } });
      const courses = await prisma.courses.findMany();
      return res.status(200).json(courses);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
