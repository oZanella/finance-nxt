interface Infoparams {
  params: {
    productId: number,
  }
}

export default function productId({ params }: Infoparams) {
  return (
    <div>
      <p>Info product {params.productId}</p>
    </div>
  )
}