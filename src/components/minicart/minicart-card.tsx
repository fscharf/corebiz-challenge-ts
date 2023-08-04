import { IProduct } from 'models/product'
import { HiOutlineTrash } from 'react-icons/hi2'
import { formatCurrency } from 'utils/currency'

type Props = {
  product: IProduct
  onDelete: () => void
}

const MinicartCard = ({ product, onDelete }: Props) => {
  return (
    <article className="flex items-center p-2 gap-4 hover:bg-neutral-200 transition-colors duration-300">
      <img
        className="w-16 h-16"
        src={product.imageUrl}
        alt={product.productName}
      />
      <section className="flex flex-col  w-full gap-2">
        <h4 className="text-xs font-semibold">{product.productName}</h4>
        <article className="flex items-center gap-4 justify-between">
          <section>
            <button
              className="flex items-center text-red-500 hover:text-red-400"
              onClick={onDelete}
            >
              <HiOutlineTrash />
            </button>
          </section>
          <section>
            {product.listPrice ? (
              <p className="text-neutral-500 line-through text-xs">
                {formatCurrency(product.listPrice)}
              </p>
            ) : null}
            <p className="text-xs font-bold">{formatCurrency(product.price)}</p>
          </section>
        </article>
      </section>
    </article>
  )
}

export default MinicartCard
