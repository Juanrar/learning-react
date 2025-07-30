import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Fiti Sious',
        isFollowing: false
    },
    {
        userName: 'loremipsum',
        name: 'Lorem Ipsum',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'John Doe',
        isFollowing: true
    },
    {
        userName: 'janesmith',
        name: 'Jane Smith',
        isFollowing: true
    },
    {
        userName: 'mockuser1',
        name: 'Mock User',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className="App">
        {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return(
                    <TwitterFollowCard
                    key = {userName}
                    userName = {userName}
                    initialIsFollowing = {isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>

                )
            })
        }
        </section>
    )
}