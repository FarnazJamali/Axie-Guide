import Image, { ImageProps } from 'next/image'

export const RotatedImage = ({ src, width, height, alt, className, children,...others }: ImageProps) => {
  return (
    <div className={` ${className}`} {...others}>
      <Image src={src} width={width} height={height} alt={alt} className='rounded-2xl '/>
      {children}
    </div>
  )
}
