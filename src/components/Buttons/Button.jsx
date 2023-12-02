import React from 'react'

function Button({
    children,
    type = 'buton',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`rounded-md ${className} mt-4 bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button