interface Reviwsparams {
  params: {
    infproducts: number,
    reviewsId: number
  }
}

export default function infproducts({ params }: Reviwsparams) {
  return (
    <div>
      <p>Informações do produto {params.infproducts}</p>
      <p>Reviews {params.reviewsId}</p>
    </div>
  )
}