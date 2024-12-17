/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { EVENTS } from "../consts";

export function navigate(href) {
  window.history.pushState({}, '', href)
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManagableEvent = target === undefined || target === '_self'
    
    if (isMainEvent && isManagableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}