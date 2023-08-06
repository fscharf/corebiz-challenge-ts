import { Slider } from 'components/core'
import { useMinicart } from 'hooks/use-minicart'
import { useProduct } from 'hooks/use-product'
import { useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ProductCard } from '.'

const ProductSection = () => {
  const { products, isLoading, searchValue } = useProduct()
  const minicart = useMinicart()
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (productsRef.current && searchValue && products.length) {
      window.scrollTo({
        top: productsRef.current.scrollHeight - 300
      })
    }
  }, [products.length, searchValue])

  return (
    <article
      className="flex justify-center py-6 base:px-4 lg:px-0"
      ref={productsRef}
    >
      <section className="w-full max-w-[1024px] flex flex-col gap-4">
        <h2 className="font-black text-xl relative before:content-[''] before:bg-neutral-400 before:absolute before:bottom-0 before:translate-y-1 before:w-1/2 before:h-1 w-max">
          Mais Vendidos
        </h2>
        {products.length ? (
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
              return isLoading ? (
                <Skeleton key={Math.random()} height={320} borderRadius={0} />
              ) : (
                <ProductCard
                  key={product.productId}
                  product={product}
                  onClick={() => minicart.addProduct(product)}
                  minicartProducts={minicart.products}
                />
              )
            })}
          </Slider>
        ) : (
          <div className="flex flex-col py-4">
            <h2>
              Nenhum produto encontrado com o termo{' '}
              <strong>"{searchValue}"</strong>
            </h2>
          </div>
        )}
        <div className="custom-pagination justify-center gap-2 flex cursor-pointer py-2"></div>
      </section>
    </article>
  )
}

export default ProductSection
