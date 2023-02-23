type propTypes = {
    text: string;
}
export default function Heading({ text }: propTypes) {
    return (
        <h1>{text}</h1>
    );
}