interface ReviewsParams {
  params: {
    productId: number,
    reviewsId: number,
  }
}

export default function reviewsId({ params }: ReviewsParams) {
  return (
    <div>
      <p>Produto {params.productId}</p>
      <p>Review {params.reviewsId}</p>
    </div>
  )
}