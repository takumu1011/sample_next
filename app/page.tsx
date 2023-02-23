'use client';
import Link from "next/link";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <>
      <Heading text="Home" />
      <ul className="link-list">
        <li><Link href="/news">お知らせへ</Link></li>
        <li><Link href="/about">Aboutへ</Link></li>
      </ul>
      <style jsx>{`
        .link-list {
          list-style: none;
        }
      `}</style>
    </>
  );
}
