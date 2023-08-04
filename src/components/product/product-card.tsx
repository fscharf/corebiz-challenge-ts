import { Rating } from 'components/core'
import { IProduct } from 'models/product'
import { useMemo } from 'react'
import { formatCurrency } from 'utils/currency'

type Props = {
  product: IProduct
  onClick: () => void
  minicartProducts: IProduct[]
}

const ProductCard = ({ product, onClick, minicartProducts }: Props) => {
  const isProductOnMinicart = useMemo(
    () =>
      minicartProducts.find(
        minicartProduct => minicartProduct.productId === product.productId
      ),
    [minicartProducts, product.productId]
  )

  return (
    <div className="flex flex-col relative hover:bg-neutral-200 cursor-pointer [&_button]:hover:opacity-100 transition-colors duration-300">
      {product.listPrice && (
        <img
          src="/images/discount-flag.svg"
          className="absolute top-0 right-0"
        />
      )}
      <img src={product.imageUrl} alt={product.productName} />
      <article className="flex flex-col items-center p-4 text-ellipsis min-h-[200px] h-full">
        <h4 className="text-neutral-500 text-xs whitespace-nowrap">
          {product.productName}
        </h4>
        <Rating rating={product.stars} />
        <section className="h-3">
          {product.listPrice ? (
            <p className="text-neutral-500 line-through text-xs">
              de {formatCurrency(product.listPrice)}
            </p>
          ) : null}
        </section>
        <section className="h-3">
          <p className="font-bold text-lg">
            por {formatCurrency(product.price)}
          </p>
          {product.installments.length ? (
            <p className="text-neutral-500 text-xs">
              ou em {product.installments[0].quantity}x de{' '}
              {formatCurrency(product.installments[0].value)}
            </p>
          ) : null}
        </section>
        <button
          onClick={isProductOnMinicart ? () => null : onClick}
          className={`base:opacity-100 lg:opacity-0 w-[125px] uppercase font-bold text-xs rounded text-neutral-100 px-4 py-2 absolute bottom-4 transition-opacity duration-300  ${
            isProductOnMinicart
              ? 'bg-neutral-400 cursor-not-allowed'
              : 'bg-neutral-900 hover:bg-neutral-600'
          }`}
        >
          {isProductOnMinicart ? 'No carrinho' : 'Comprar'}
        </button>
      </article>
    </div>
  )
}

export default ProductCard
