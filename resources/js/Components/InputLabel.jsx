export default function InputLabel({
    value,
    className = "",
    children,
    htmlFor,
    ...props
}) {
    return (
        <label
            {...props}
            htmlFor={htmlFor}
            className={`text-base block mb-2` + className}
        >
            {value ? value : children}
        </label>
    );
}
