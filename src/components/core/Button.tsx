import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  full?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const YellowButton = ({
  full,
  className,
  children,
  ...others
}: ButtonProps) => {
  return (
    <button
      className={
        'btn bg-yellowButton border-none text-pink hover:text-white font-bold hover:btn-error shadow-button lowercase ' +
        (full ? 'btn-block' : '') +
        (className ? `${className}` : '')
      }
      {...others}
    >
      {children}
    </button>
  )
}

export const BlueButton = ({
  full,
  className,
  children,
  ...others
}: ButtonProps) => {
  return <button
      className={
        'btn border-none bg-[#189ecf] text-white hover:bg-[#5b6ed6] shadow-button lowercase ' +
        (full ? 'btn-block' : '') +
        (className ? `${className}` : '')
      }
      {...others}
    >
      {children}
    </button>
}
