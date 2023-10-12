import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout className="flex flex-col h-screen">
      <div
        className="bg-center bg-cover flex flex-1 items-center justify-center"
        style={{ backgroundImage: 'url(/images/pokemon-hero.jpg)' }}
      >
        <h1 className="font-bold text-3xl max-w-lg text-white mx-auto px-2">
          Cuidamos bem do seu pokémon, para ele cuidar bem de você
        </h1>
      </div>
    </Layout>
  )
}
