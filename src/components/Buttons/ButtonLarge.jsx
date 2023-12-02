import React from 'react'

function ButtonLarge({
    label,
    type = 'submit',
    className = '',
    ...props
}) {
    return (
        <button
            type="submit"
            className={`inline-flex ${className} items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80`}
            {...props}
        >
            {label}{" "}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
            >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </button>
    )
}

export default ButtonLarge