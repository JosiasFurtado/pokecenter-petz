import Layout from '@/components/Layout'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Layout className="flex flex-col h-screen">
      <div className="bg-gray-900 flex flex-1 flex-col items-center justify-center">
        <h1 className="font-bold text-3xl max-w-lg text-white mx-auto px-2 mb-10">
          Não era para você estar aqui...
        </h1>
        <Link href="/" className="text-white">
          {`<- Voltar`}
        </Link>
      </div>
    </Layout>
  )
}
