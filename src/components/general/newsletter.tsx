import { useNewsletter } from 'hooks/use-newsletter'

const Newsletter = () => {
  const { handleChange, subscribe, errors, requestData, isSubscribed, reset } =
    useNewsletter()

  return (
    <article className="flex justify-center py-8 base:px-4 lg:px-0 bg-neutral-200">
      {isSubscribed ? (
        <section className="flex flex-col items-center">
          <h2 className="text-sm font-bold">
            Seu e-mail foi cadastrado com sucesso!
          </h2>
          <h4 className="text-xs mb-4">
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </h4>
          <button
            onClick={reset}
            className="lg:w-[328px] base:w-full p-4 flex bg-neutral-900 hover:bg-neutral-600 justify-center text-neutral-100 rounded"
          >
            Cadastrar novo e-mail
          </button>
        </section>
      ) : (
        <section className="w-full max-w-[1024px] flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold">
            Participe de nossas news com promoções e novidades!
          </h2>
          <div className="flex items-start gap-2 base:flex-col md:flex-row base:w-full md:w-max">
            <div className="flex flex-col gap-2 w-full">
              <label
                className={`base:w-full lg:w-[280px] p-4 bg-neutral-100 font-bold rounded ${
                  errors.name ? 'border border-red-500' : ''
                }`}
              >
                <input
                  className="text-xs"
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={handleChange}
                  name="name"
                  value={requestData.name}
                />
              </label>
              {errors.name && (
                <span className="text-red-500 text-xs">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className={`base:w-full lg:w-[280px] p-4 bg-neutral-100 font-bold rounded ${
                  errors.email ? 'border border-red-500' : ''
                }`}
              >
                <input
                  className="text-xs"
                  type="text"
                  placeholder="Digite seu email"
                  onChange={handleChange}
                  name="email"
                  value={requestData.email}
                />
              </label>
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>
            <button
              onClick={() => subscribe()}
              className="flex base:w-full lg:w-full lg:min-w-[140px] h-[57px] items-center bg-neutral-900 hover:bg-neutral-600 justify-center text-sm text-neutral-100 rounded p-4"
            >
              Eu quero!
            </button>
          </div>
        </section>
      )}
    </article>
  )
}

export default Newsletter
