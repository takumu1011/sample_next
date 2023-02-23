'use client';
import Link from "next/link";
import { use } from "react";

type propsType = {
    params: {
        id: string;
    }
}

type News = {
    id: number;
    title: string;
    content: string;
    isImportant: boolean;
    createdAt: string;
    updatedAt: string;
}

async function getNews(id: number) {
    const res = await fetch('http://localhost:3000/api/news');
    if (!res.ok) {
        throw new Error('お知らせデータの取得に失敗しました。');
    }
    const data= await res.json();
    
    const newsData = data.posts.find((news: News) => {
        return news.id === id
    })

    return newsData as News;
}

export default function NewsDetail({ params: { id } }: propsType) {
    const newsData = use(getNews(Number(id)));
    return (
        <div>
            <h1>{newsData.title}</h1>
            <p>ニュースID: {id}</p>
            <p>{newsData.content}</p>
            <Link href="/news">ニュース一覧へ戻る</Link>
        </div>
    )
}