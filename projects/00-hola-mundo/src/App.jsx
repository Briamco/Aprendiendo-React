import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: 'BriamDev',
    name: 'Briam Gonzalez',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: true
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className="flex flex-col gap-2">
      {
        users.map(({userName, name, isFollowing}) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}