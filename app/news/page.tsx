import Link from "next/link";
import { use } from "react";
import Heading from "../components/Heading";

type News = {
    id: number;
    title: string;
    content: string;
    isImportant: boolean;
    createdAt: string;
    updatedAt: string;
}

async function getNews() {
    const res = await fetch('http://localhost:3000/api/news');
    if (!res.ok) {
        throw new Error('お知らせデータの取得に失敗しました。');
    }

    const data = await res.json();
    console.warn(data);
    return data.posts as News[];
}

export default function News() {
    const newsList = use(getNews());
    return (
        <div className="c-news">
            <Heading text="お知らせ" />
            <ul>
                {newsList.map((news) => (
                    <li key={news.id}>
                        <Link href={`/news/${news.id}`}>{news.title}</Link>
                    </li>
                ))}
            </ul>
            <Link href="/">Homeへ</Link>
        </div>
    );
}