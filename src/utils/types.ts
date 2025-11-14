export type FaqProps = {
  title: string
  text: string
}

export type ItemProps = {
  curOpen: number | null
  setcurOpen: (num: number | null) => void
  title: string
  num: number
}
