import { HiOutlineXMark } from 'react-icons/hi2'

type Props = {
  isOpen: boolean
  onClose?: () => void
  title?: string | React.ReactNode
} & React.PropsWithChildren

const Sidebar = ({ isOpen, children, onClose, title }: Props) => {
  const handleClose = () => {
    if (isOpen && onClose) onClose()
  }

  return (
    <aside
      className={`fixed top-0 right-0 bottom-0 base:w-full md:w-[300px] h-screen z-[99] bg-neutral-100 shadow-md transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {isOpen && (
        <div
          className="bg-neutral-800/80 backdrop-blur w-screen absolute inset-0 -translate-x-full"
          onClick={handleClose}
        ></div>
      )}
      <section className="flex items-center justify-between w-full p-4">
        {title ?? <span>Título</span>}
        <button
          onClick={onClose}
          className=" hover:bg-neutral-200 rounded text-neutral-500"
        >
          <HiOutlineXMark className="w-6 h-6" />
        </button>
      </section>
      {children}
    </aside>
  )
}

export default Sidebar
