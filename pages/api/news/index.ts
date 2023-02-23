import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await delay(1500);
    const news = JSON.parse(fs.readFileSync("news.json", "utf8"));
    news.posts.sort((a: any, b: any) => {
        return new Date(b.createdAt).valueOf() - new Date(a.createAt).valueOf();
    });
    res.status(200).json(news);
}