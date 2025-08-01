import { notFound } from "next/navigation"

interface Infoparams {
  params: {
    productId: string
  }
}

export default function productId({ params }: Infoparams) {
  if (parseInt(params.productId) > 100) {
    notFound()
  }

  return (
    <>
      <p>Informação do produto {params.productId}</p>
    </>
  )
}