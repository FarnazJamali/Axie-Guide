import { HTMLAttributes } from 'react'

export const BoldableWrapper = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`hover:scale-105 cursor-pointer hover:transform hover:origin-center hover:ease-linear hover:duration-200 ${className}`}
    >
      {children}
    </div>
  )
}
