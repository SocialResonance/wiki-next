import Link from 'next/link'

export function BlueLink({ href, children }) {
  return (
    <Link href={href} className="text-blue-500 hover:text-blue-700">
      {children}
    </Link>
  )
} 