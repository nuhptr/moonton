import react, { useRef, useEffect } from "react";
import propTypes from "prop-types";

Input.propTypes = {
    type: propTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
    className: propTypes.string,
    variant: propTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: propTypes.oneOf(["on", "off"]),
    required: propTypes.bool,
    isFocused: propTypes.bool,
    handleChange: propTypes.func,
    placeholder: propTypes.string,
    isError: propTypes.bool,
};

export default function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange}
                placeholder={placeholder}
                ref={input}
            ></input>
        </div>
    );
}
