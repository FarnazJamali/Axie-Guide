import { ComponentProps } from 'react'

type RedPillProps = ComponentProps<'div'>

export const RedPill = ({ children, className }: RedPillProps) => {
  return (
    <div
      className={`${className} p-2 rounded-3xl bg-pink text-white text-xs font-bold`}
    >
      {children}
    </div>
  )
}
