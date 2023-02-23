'use client';
import { useState } from "react";
import Button from "./Button";

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <div className="c-counter">
                <p>カウント: {count}</p>
                <div className="btn-wrapper">
                    <Button setCount={setCount} />
                    <Button setCount={setCount} isReset={true} />
                </div>
            </div>
            <style jsx>{`
                .c-counter {
                    width: 500px;
                    margin: 0 auto;
                    padding: 10px;
                    border-radius: 10px;
                    text-align: center;
                    color: #333;
                    background: #fff;
                }
                .btn-wrapper {
                    display: flex;
                    justify-content: space-around;
                }
            `}</style>
        </>
    )
}