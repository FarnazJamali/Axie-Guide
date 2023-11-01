import { HTMLAttributes } from 'react'

type IntroductionBoxProps = {
  vertical?: boolean
} & HTMLAttributes<HTMLDivElement>

export const IntroductionBox = ({
  vertical = false,
  children,
  className,
  ...others
}: IntroductionBoxProps) => {
  return (
    <div
      className={
        ' rounded-3xl bg-introOuter p-4 mx-auto relative shadow-introbox ' +
        `${className}`
      }
      {...others}
    >
      <div className="rounded-2xl bg-introInner relative">
        {vertical ? (
          <>
            <div className="w-14 h-full absolute left-7 bg_intro-box_pattern-left"></div>
            <div className="w-14 h-full absolute right-7 bg_intro-box_pattern-left rotate-180"></div>
          </>
        ) : (
          <div className="w-full h-5 absolute top-3 bg_introbox_pattern-top"></div>
        )}
        <div className="px-6 py-4 relative flex flex-col justify-center items-center gap-3 mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
