import { Minicart } from 'components/minicart'
import { useMinicart } from 'hooks/use-minicart'
import React from 'react'
import {
  HiOutlineBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser
} from 'react-icons/hi2'
import { useMediaQuery, useToggle } from 'usehooks-ts'

const Header = () => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const minicart = useMinicart()
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)

  return (
    <React.Fragment>
      <header className="sticky top-0 left-0 right-0 bg-neutral-100 flex justify-center z-50 shadow shadow-neutral-200">
        <nav className="flex items-center max-w-[1024px] w-full py-4 gap-4 base:flex-col lg:flex-row base:px-4 lg:px-0 relative">
          {isMobile ? (
            <button
              className="absolute top-6 left-4"
              onClick={toggleIsMenuOpen}
            >
              <HiOutlineBars3 className="w-10 h-10" />
            </button>
          ) : null}
          <button>
            <img
              className="w-[180px] h-auto"
              src="/images/corebiz-logo.svg"
              loading="lazy"
              alt="Corebiz Logo"
            />
          </button>
          <div className="flex items-center py-2 border-b-2 border-b-neutral-400 w-full">
            <input
              placeholder="O que está procurando?"
              type="text"
              className="w-full"
            />
            <button className="flex items-center hover:text-neutral-500">
              <span>
                <HiOutlineMagnifyingGlass className="w-6 h-6" />
              </span>
            </button>
          </div>
          <button
            className={`flex items-center whitespace-nowrap gap-2 hover:text-neutral-500 lg:opacity-100 transition-all duration-300 ${
              isMenuOpen && isMobile
                ? 'opacity-100 translate-y-full'
                : 'opacity-0 translate-y-0'
            } ${
              isMobile
                ? 'absolute bottom-0 py-3 -z-10 bg-neutral-100 w-full justify-center'
                : ''
            }`}
          >
            <span>
              <HiOutlineUser className="w-6 h-6" />
            </span>
            <span className="text-neutral-500">Minha Conta</span>
          </button>
          <button
            className="flex items-center whitespace-nowrap gap-1 hover:text-neutral-500 base:absolute base:top-6 base:right-4 lg:relative lg:right-auto lg:top-auto"
            onClick={toggleIsOpen}
          >
            <span>
              <HiOutlineShoppingCart className="base:w-8 base:h-8 lg:w-6 lg:h-6" />
            </span>
            <span className="w-5 h-5 bg-red-500 rounded-full p-2 flex items-center justify-center text-neutral-100">
              <small className="font-bold leading-none">
                {minicart.products.length}
              </small>
            </span>
          </button>
        </nav>
      </header>
      <Minicart isOpen={isOpen} onClose={toggleIsOpen} />
    </React.Fragment>
  )
}

export default Header
