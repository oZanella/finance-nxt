import { notFound } from "next/navigation"

interface ReviewsParams {
  params: {
    productId: number
    reviewsId: string
  }
}

export default function reviewsId({ params }: ReviewsParams) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound()
  }

  return (
    <>
      <p>Produto {params.productId}</p>
      <p>Review {params.reviewsId}</p>
    </>
  )
}