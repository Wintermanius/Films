import { FC, useState } from "react";
import OneStar from "../../OneStar/OneStar";

const Rating: FC = () => {
  const [activeId, setActiveId] = useState<string>('')
  return (
  <>
    {Array(10).fill('').map((_, index) => <OneStar checked={activeId === `star-${index + 1}`} onChange={setActiveId} key={index} stars={{
      id: `star-${index + 1}`,
      value: `${index + 1}`,
      rating: `${index + 1}`,
      star: `star-${index + 1}`
    }} />).reverse()}
  </>
  )
}

export default Rating