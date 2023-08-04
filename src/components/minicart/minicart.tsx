import { Sidebar } from 'components/core'
import { useMinicart } from 'hooks/use-minicart'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { formatCurrency } from 'utils/currency'
import { MinicartCard } from '.'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Minicart = ({ isOpen, onClose }: Props) => {
  const minicart = useMinicart()

  return (
    <Sidebar
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center gap-2">
          <HiOutlineShoppingCart className="w-5 h-5" />
          <span className="font-bold">Carrinho</span>
        </div>
      }
    >
      <div className="mt-4 overflow-y-auto h-[80vh]">
        {minicart.products.length ? (
          minicart.products.map(product => {
            return (
              <MinicartCard
                key={product.productId}
                product={product}
                onDelete={() => minicart.removeProduct(product.productId)}
              />
            )
          })
        ) : (
          <div className="text-center flex flex-col items-center gap-2 mt-32">
            <h2 className="text-xs font-bold">Seu carrinho está vazio :(</h2>
            <button
              className="text-xs bg-neutral-900 hover:bg-neutral-600 text-neutral-100 p-2 rounded w-max"
              onClick={onClose}
            >
              Continuar comprando
            </button>
          </div>
        )}
      </div>
      <div className="flex items-end z-10 p-4 absolute bottom-0 w-full shadow-[12px_0_12px_0] shadow-neutral-300">
        <div className="flex items-center gap-2">
          <span className="font-bold">Total:</span>
          <span className="font-bold">{formatCurrency(minicart.total)}</span>
        </div>
      </div>
    </Sidebar>
  )
}

export default Minicart
