import Image, { ImageProps } from 'next/image'

export const IntroBanner = ({
  src,
  width,
  height,
  alt,
  className,
  children,
}: ImageProps& { height: number }) => {
  return (
    <div
      className={
        `shadow-banner rounded-3xl h-[${height}px] ` +
        (className ? `${className}` : '')
      }
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="w-full h-full rounded-3xl object-cover object-center"
      />
      {children}
    </div>
  )
}
