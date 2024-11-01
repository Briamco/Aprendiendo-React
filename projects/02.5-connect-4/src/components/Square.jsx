// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'bg-sky-500': ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={`${className} w-[100px] h-[100px] border-2 rounded-md grid place-items-center cursor-pointer text-5xl`}>
      {children}
    </div>
  )
}