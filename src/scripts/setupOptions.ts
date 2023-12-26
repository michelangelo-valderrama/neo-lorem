import { $ } from '../utils'

interface Options {
  counterStart: number
  optionsArray: {
    className: string
    name: string
  }[]
  elementsSelector: {
    reduce: string
    increase: string
    current: string
    content: string
  }
}

export function setupOptions({
  counterStart,
  elementsSelector,
  optionsArray
}: Options) {
  const length = optionsArray.length
  let counter = counterStart

  const reduceElem = $(
    elementsSelector.reduce
  ) as HTMLButtonElement | null

  const increaseElem = $(
    elementsSelector.increase
  ) as HTMLButtonElement | null

  const currentElem = $(
    elementsSelector.current
  ) as HTMLSpanElement | null

  const contentElem = $(
    elementsSelector.content
  ) as HTMLDivElement | null

  setup()

  reduceElem?.addEventListener('click', () => {
    counter--
    setup()
  })

  increaseElem?.addEventListener('click', () => {
    counter++
    setup()
  })

  function setup() {
    optionsArray.forEach((paragraphWidth) => {
      contentElem?.classList.remove(
        paragraphWidth.className
      )
    })
    contentElem?.classList.add(
      optionsArray.at(counter % length)!.className
    )
    if (currentElem !== null) {
      currentElem!.innerText = `0${
        optionsArray.at(counter % length)!.name
      }`
    }
  }
}
