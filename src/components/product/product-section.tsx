import { Slider } from 'components/core'
import { useMinicart } from 'hooks/use-minicart'
import { useProduct } from 'hooks/use-product'
import { ProductCard } from '.'

const ProductSection = () => {
  const { products } = useProduct()
  const minicart = useMinicart()

  return (
    <article className="flex justify-center py-6 base:px-4 lg:px-0">
      <section className="w-full max-w-[1024px] flex flex-col gap-4">
        <h2 className="font-black text-xl relative before:content-[''] before:bg-neutral-400 before:absolute before:bottom-0 before:translate-y-1 before:w-1/2 before:h-1 w-max">
          Mais Vendidos
        </h2>
        <Slider
          slidesPerView={4}
          spaceBetween={10}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          breakpoints={{
            1024: {
              slidesPerView: 4
            },
            480: {
              slidesPerView: 3
            },
            0: {
              slidesPerView: 2
            }
          }}
        >
          {products.map(product => {
            return (
              <ProductCard
                key={product.productId}
                product={product}
                onClick={() => minicart.addProduct(product)}
                minicartProducts={minicart.products}
              />
            )
          })}
        </Slider>
        <div className="custom-pagination justify-center gap-2 flex cursor-pointer py-2"></div>
      </section>
    </article>
  )
}

export default ProductSection
