import { HiEnvelope, HiPhone } from 'react-icons/hi2'

const Footer = () => {
  return (
    <footer className="flex justify-center py-8 base:px-4 lg:px-0 bg-neutral-900">
      <article className="max-w-[1024px] w-full flex justify-between base:items-start lg:items-center base:flex-col lg:flex-row base:gap-10">
        <section className="flex flex-col gap-6">
          <h2 className="font-black text-xl relative before:content-[''] before:bg-neutral-100 text-neutral-100 before:absolute before:bottom-0 before:translate-y-3 before:w-1/2 before:h-1 w-max">
            Localização
          </h2>
          <address className="text-neutral-100 not-italic flex flex-col gap-2">
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </address>
        </section>
        <section className="flex flex-col gap-4 base:self-center lg:self-auto">
          <button className="flex items-center gap-3 bg-neutral-100 hover:bg-neutral-200 uppercase font-semibold py-3 px-8 justify-center rounded">
            <HiEnvelope className="w-6 h-6" />
            <span>Entre em contato</span>
          </button>
          <button className="flex items-center gap-3 bg-neutral-100 hover:bg-neutral-200 uppercase font-semibold py-3 px-8 justify-center rounded">
            <HiPhone className="w-6 h-6" />
            <span className="leading-none">
              Fale com o nosso <br /> consultor online
            </span>
          </button>
        </section>
        <section className="flex items-center gap-12 base:justify-between lg:justify-normal base:w-full lg:w-auto base:px-8">
          <div className="flex flex-col items-start">
            <span className="text-neutral-100">Created by</span>
            <img
              src="/images/corebiz-logo-light.svg"
              alt="Corebiz Logo"
              className="h-[24px] w-auto"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-neutral-100">Powered by</span>
            <img
              src="/images/vtex-logo.svg"
              alt="VTEX Logo"
              className="h-[24px] w-auto"
            />
          </div>
        </section>
      </article>
    </footer>
  )
}

export default Footer
