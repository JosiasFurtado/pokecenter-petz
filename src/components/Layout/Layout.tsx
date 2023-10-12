import React from 'react'
import Meta from '../Meta'
import Footer from '../Footer'
import Toolbar from '../Header'

interface Props {
  templateTitle?: string
  className?: string
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({
  children,
  templateTitle,
  className,
}) => {
  return (
    <div className={className}>
      <Meta templateTitle={templateTitle} />
      <Toolbar />
      {children}
      <Footer />
    </div>
  )
}

Layout.displayName = 'Layout'
export type LayoutProps = Props
export default Layout
