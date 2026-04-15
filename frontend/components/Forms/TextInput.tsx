import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const input = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => input.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                className
            }
            ref={input}
        />
    );
});
