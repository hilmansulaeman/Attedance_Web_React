import React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={clsx(
        'bg-[#219EBC] text-white', // Perbaikan pada penulisan 'text-white'
        'py-2 px-8 leading-6',
        'rounded-full',
        'font-semibold tracking-wide',
        'cursor-pointer',
        'inline-flex items-center justify-center', // Perbaikan pada penulisan 'items-center'
        'relative shadow',
        // Hover
        'transition',
        'hover:bg-indigo-600 hover:shadow-md',
        // focus
        'outline-none',
        'ring-indigo-500/70 ring-offset-2',
        'focus-visible:ring-2 focus:scale-[0.98]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
