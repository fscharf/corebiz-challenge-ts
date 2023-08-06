import { useProduct } from 'hooks/use-product'

import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

const SearchBar = () => {
  const { searchValue, handleSearchValue } = useProduct()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchValue(event.target.value)
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center py-2 border-b-2 border-b-neutral-400 w-full base:max-w-auto lg:max-w-[500px]">
        <input
          placeholder="O que está procurando?"
          type="text"
          className="w-full"
          value={searchValue}
          onChange={handleChange}
        />
        <button className="flex items-center hover:text-neutral-500">
          <span>
            <HiOutlineMagnifyingGlass className="w-6 h-6" />
          </span>
        </button>
      </div>
    </div>
  )
}
export default SearchBar
