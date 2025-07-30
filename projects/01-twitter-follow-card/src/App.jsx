import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard 
                isFollowing 
                userName='midudev'>
                    Miguel Angel Duran
                </TwitterFollowCard>
    
            <TwitterFollowCard 
                isFollowing={false}
                userName='frantoledo'>
                    Franco Toledo
                </TwitterFollowCard>

            <TwitterFollowCard 
                isFollowing={false}
                userName='juanar'>
                    Juan Carlos lorenzo
                </TwitterFollowCard>
            
            <TwitterFollowCard 
                isFollowing 
                userName='leomessi'>
                    Messirve
                </TwitterFollowCard>
        </section>
    )
}