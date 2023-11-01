import { HTMLAttributes } from 'react'

export const YellowMenu = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`bg-[#fff3c3] rounded-2xl ${className}`}>
      <div className="flex items-center p-3 gap-3">
        <i className="fa-solid fa-play text-pink"></i>
        <div>{children}</div>
      </div>
    </div>
  )
}
