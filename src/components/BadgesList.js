import React, { useState, useMemo } from 'react'
import Gravatar from '../components/Gravatar'
import { Link } from 'react-router-dom'


function useSearchBadges(badges){
    const {state, setState} = useState(null)
    const [query, setQuery] = useState('')
    const [filteredBadges, setfilteredBadges] = useState(badges) 
    
    useMemo( () =>{
        const result =  badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase())  
        })
        setfilteredBadges(result)
    },[badges, query])
    
    return {query, setQuery, filteredBadges}
}

export default function BadgesList(props) {
    const { badges } = props
    const {query, setQuery, filteredBadges} = useSearchBadges(badges)
   
    if (filteredBadges.length === 0) {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label class="font-weight-bold">Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <h2>No Badges found</h2>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <label class="font-weight-bold">Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <div className="container shadow-sm mb-4 badge_card_container">
                                    <div className="row">
                                        <div className="col-3 d-flex align-items-center justify-content-center ">
                                            <Gravatar email={badge.email} />
                                        </div>
                                        <div className="col">
                                            <h5><strong> {badge.firstName} {badge.lastName}</strong> </h5>
                                            <h6 className="font-weight-light">Twitter: {badge.twitter}</h6>
                                            <h6 className="font-weight-light">{badge.jobTitle}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )

                })}
            </ul>
        </React.Fragment>
    )

}