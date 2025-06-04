import { notFound } from "next/navigation"

interface Infoparams {
  params: {
    productId: string,
  }
}

export default function productId({ params }: Infoparams) {
  if (parseInt(params.productId) > 1000) {
    notFound()
  }

  return (
    <div>
      <p>Informação do produto {params.productId}</p>
    </div>
  )
}