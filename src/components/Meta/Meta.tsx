import Head from 'next/head'
import { useRouter } from 'next/router'

const defaultMeta = {
  title: 'Centro Pokémon | Agende seu horário',
  siteName: 'Centro Pokémon',
  description: 'Cuidamos bem do seu pokémon, para ele cuidar bem de você',
  url: 'https://pokecenter.vercel.app',
  type: 'website',
  robots: 'follow, index',
  image: '/images/pokemon-hero.jpg',
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
]

type Props = {
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

export const Meta: React.FC<Props> = (props) => {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta
            name="author"
            property="article:author"
            content="Josias Furtado"
          />
        </>
      )}

      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta
        name="theme-color"
        content="#E5E7EB"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#111827"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
  )
}

Meta.displayName = 'Meta'
export type MetaProps = Props
export default Meta
