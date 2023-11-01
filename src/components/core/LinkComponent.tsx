import Link, { LinkProps } from 'next/link'

type LinkComponentProps = {
  href: string
  className?: string
  children?: any
} & LinkProps
export const LinkComponent = ({
  href,
  children,
  className,
}: LinkComponentProps) => {
  return (
    <Link
      className={
        'hover:underline hover:cursor-pointer text-pink' +
        (className ? ` ${className}` : '')
      }
      href={href}
    >
      {children}
    </Link>
  )
}
