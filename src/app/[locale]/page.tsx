import React, { type FC } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const f = '⇒ page.tsx (HomePage):'

const HomePage: FC = () => {
  const t = useTranslations('Index')
  return (
    <div>
      <h1>{t('homePage')}</h1>
      <h2>Just Next-INTL</h2>
    </div>
  )
}
export default HomePage
