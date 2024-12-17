/* eslint-disable react/prop-types */
import { Children, useEffect, useState } from "react"
import { EVENTS } from "../consts"
import { match } from "path-to-regexp"
import { getCurrentPath } from "../utils"

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
  useEffect(() => {
    const onLocalChange = () => {
      setCurrentPath(getCurrentPath())
    }
    
    window.addEventListener(EVENTS.PUSHSTATE, onLocalChange)
    window.addEventListener(EVENTS.POPSTATE, onLocalChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocalChange)
    window.removeEventListener(EVENTS.POPSTATE, onLocalChange)
    }
  }, [])

  let routeParams = {}

  const routesFormChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFormChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matchedUrl = match(path, { decode: decodeURIComponent })
    const matched = matchedUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true

  })?.Component

  return Page 
  ? <Page routeParams={routeParams} /> 
  : <DefaultComponent routeParams={routeParams} />
}