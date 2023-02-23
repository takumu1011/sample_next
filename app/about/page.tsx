'use client';
import Link from "next/link";
import Heading from "../components/Heading";
import Counter from "./components/Counter";


export default function About() {
    return (
        <div className="c-about">
            <Heading text="About" />
            <Counter />
            <Link href="/">Homeへ</Link>
            <style jsx>{`
                .c-about {
                    text-align: center;
                }
            `}</style>
        </div>
    );
}