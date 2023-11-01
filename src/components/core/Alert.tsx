import { ComponentProps } from 'react'

type alertProps = ComponentProps<'div'> 

export const Alert = ({ children, className }: alertProps) => {
  return (
    <div className={className}>
      <div
        className=" rounded-xl p-5 bg-[#f3e9ff] shadow-alert relative"
      >
        <div className="absolute rounded-full w-6 h-6 outline outline-4 outline-white bg-[#cfbbe7] -top-3 -left-3 text-white flex justify-center p-1">
          <i className="fa-solid fa-info"></i>
        </div>

        <div className="text-base font-semibold text-grey">
          {children}
        </div>
      </div>
    </div>
  )
}
