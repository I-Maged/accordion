import type { FC, PropsWithChildren } from "react"
import { type ItemProps } from "../utils/types"

type item = PropsWithChildren<ItemProps>

const Item: FC<item> = ({ curOpen, setcurOpen, title, num, children }) => {
  const isOpen = num === curOpen

  function handleToggle() {
    setcurOpen(isOpen ? null : num)
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}

export default Item
