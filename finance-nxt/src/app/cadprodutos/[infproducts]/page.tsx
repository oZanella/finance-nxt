interface Infoparams {
  params: {
    infproducts: number
  }
}

export default function infproducts({ params }: Infoparams) {
  return (
    <div>
      <p>Informações do produto {params.infproducts}</p>
    </div>
  )
}
