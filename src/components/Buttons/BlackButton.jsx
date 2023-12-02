import React from 'react'

function BlackButton({
    children,
    type = 'button',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`${className} mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
            {...props}
        >
            {children}
        </button>
    )
}

export default BlackButton