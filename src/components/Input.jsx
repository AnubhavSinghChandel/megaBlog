import { forwardRef, useId } from 'react'

const Input = forwardRef(function Input({
    type,
    label,
    className,
    ...props
}, reference) {

    const id = useId()

    return (

        <div>
            <div className="flex items-center justify-between">
                {
                    label &&
                    <label className="text-base font-medium text-gray-900">
                        {" "}
                        {label}{" "}
                    </label>
                }
            </div>
            <div className="mt-2">
                <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={type}
                    ref={reference}
                    {...props}
                    id={id}
                />
            </div>
        </div>
    )
})

export default Input