import React from 'react'
import { ComponentProps, ReactElement, useState } from 'react'

type ElementType = ReactElement<ComponentProps<'div'>>

//?  ❓ Why I preferred render prop over cloneElement?
//*  ✨ render prop gives more flexibility and control to the user of the component, makes the data flow more explicit and easier to trace, avoids potential performance issues and warnings. cloneElement creates a new React element every time it is called, which can cause unnecessary re-rendering and memory allocation.

interface Props {
  render: (props: ComponentProps<'div'>) => ElementType
  tooltipText: string
}

export const Tooltip = ({ render, tooltipText }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="relative mx-auto"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {render({})}
      {showTooltip && (
        <div className="w-40 absolute top-full -left-1/3 translate-y-3 bg-black text-white p-1 rounded-lg text-[11px] font-medium">
          {tooltipText}
        </div>
      )}
    </div>
  )
}
