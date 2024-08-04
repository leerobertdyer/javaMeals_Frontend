
type PropsDefinition = {
    title: string;
    onClick: () => void;
}

export default function Button({ title, onClick }: PropsDefinition) {
    return (
        <button
        className="
        w-[10rem]
        rounded-lg 
        border border-white 
        p-4 
        text-javaRed-light"
        onClick={onClick}>
            {title}
        </button>
    )

}