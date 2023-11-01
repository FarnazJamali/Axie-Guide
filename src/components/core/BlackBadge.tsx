import { HTMLAttributes } from 'react'

export const BlackBadge = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        `bg-grey px-[6px] py-[2px] rounded-md text-center ` +
        (className ? `${className}` : '')
      }
    >
      <p className="text-white text-base font-semibold">{children}</p>
    </div>
  )
}
