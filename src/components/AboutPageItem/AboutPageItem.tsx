import React from 'react'

interface AboutItem {
  title: string
  text: string
}

interface Props {
  aboutItem: AboutItem
}

export const AboutPageItem: React.FC<Props> = ({ aboutItem }) => {
  return (
    <div>
      <h3 className="mb-3 font-medium text-base">{aboutItem.title}</h3>
      <p className="mb-4 font-medium text-sm">{aboutItem.text}</p>
    </div>
  )
}

AboutPageItem.displayName = 'AboutPageItem'
export type AboutPageItemProps = Props
export default AboutPageItem
