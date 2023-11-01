import { HTMLAttributes } from 'react'

export const TextBox = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        'rounded-3xl p-6 shadow-textbox' +
        (className ? ` ${className}` : '')
      }
    >
      {children}
    </div>
  )
}
