import { HTMLAttributes } from "react"

export const LightBackground = ({ children}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="bg_light_pattern_background w-full">
          <div className="bg_decorative_pattern -mb-4 "></div>
          {children}
    </div>
  )
}
