import { Dispatch, SetStateAction } from "react";
import css from "styled-jsx/css";

type propsType = {
    setCount: Dispatch<SetStateAction<number>>;
    isReset?: boolean;
}

const ButtonStyle = css`
    .btn {
        padding: 10px;
        color: #333;
        background: #ccc;
        border: none;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
    }
    .reset {
        color: #fff;
        background: #ff0000;
    }
`;


export default function Button({ setCount, isReset }: propsType) {
    const reset = () => {
        setCount(0);
    }
    const countUp = () => {
        setCount((prev) => prev + 1);
    }
    if (isReset) {
        return (
            <>
                <button className="btn reset" onClick={reset}>リセット</button>
                <style jsx>{ButtonStyle}</style>
            </>
        );
    }

    return (
        <>
            <button className="btn" onClick={countUp}>カウントアップ</button>
            <style jsx>{ButtonStyle}</style>
        </>
    );
}