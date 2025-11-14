import Item from "./Item"
import { faqs } from "../utils/faqs"
import { useState } from "react"

const Accordion = () => {
  const [curOpen, setcurOpen] = useState<number | null>(null)

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <Item
          curOpen={curOpen}
          setcurOpen={setcurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </Item>
      ))}
    </div>
  )
}

export default Accordion
