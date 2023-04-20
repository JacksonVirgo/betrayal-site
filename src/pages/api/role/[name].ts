import { NextApiRequest as Request, NextApiResponse as Response } from "next";
import { verifyString } from "~/utils/string";

export default function handler(req: Request, res: Response) {
    const queriedName = verifyString(req.query.name);
    if (!queriedName) return res.status(400).json({ error: "Invalid name" });

    const role = getRole(queriedName);
    if (!role) return res.status(404).json({ error: "Role not found" });

    return res.status(200).json(role);
}

function getRole(query: string) {
    return query;
}
