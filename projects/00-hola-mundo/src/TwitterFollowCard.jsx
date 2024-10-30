import { useState } from "react"

export function TwitterFollowCard({children, userName, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
  ? 'tw-followCard-btn is-following' 
  : 'tw-followCard-btn'

  const handelClick = () => {
      setIsFollowing(!isFollowing)
  }

  return (
    <article className="flex text-white items-center text-[.8rem] justify-between">
      <header className="flex items-center gap-1">
        <img 
          className="w-12 h-12 rounded-full" 
          alt={`El avatar de ${userName}`} 
          src={`https://unavatar.io/x/${userName}`} />
        <div className="flex flex-col">
          <strong className="block">{children}</strong>
          <span className="opacity-60">@{userName}</span>
        </div>
      </header>
      
      <aside>
        <button className={buttonClassName} onClick={handelClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard--stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}