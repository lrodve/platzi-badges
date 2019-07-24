import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import '../styles/Badges.css'
import confLogo from '../images/badge-header.svg'

import api from '../api'

export default class Badges extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }

    componentDidMount(){
        this.fetchData()
    }


    fetchData = async () =>{
        this.setState({ loading:true, error:null })

        try{
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }

    
    render() {
        //state
        const { data, loading, error } = this.state


        if(loading){
            return(
                <PageLoading/>
            )
        }   

        if(error){
            return (
                <PageError error={error.message}/>
            )
        } 
      

        return (
            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="" className="Badges_conf-logo" />
                        </div>
                    </div>

                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="./badges/new" className="btn btn-success">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">

                        <BadgesList badges={data} />


                    </div>
                </div>
            </React.Fragment>
        )
    }

}