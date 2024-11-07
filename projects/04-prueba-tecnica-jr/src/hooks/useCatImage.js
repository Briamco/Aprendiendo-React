import { useEffect, useState } from "react"

const CAT_PREFIX_RANDOM_IMAGE = 'https://cataas.com/cat'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')
    console.log(threeFirstWord)

    setImageUrl(`${CAT_PREFIX_RANDOM_IMAGE}/says/${threeFirstWord}?fontSize=50&fontColor=white`)
  },[fact])

  return { imageUrl }
}