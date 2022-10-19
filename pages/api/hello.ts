// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import IData from "../../interfaces/IData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  res.status(200).json({ userName: "Eric" });
}
