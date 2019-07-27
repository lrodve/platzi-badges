import React, { Component } from 'react'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'


import BadgeDetails from './BadgeDetails'
import api from '../api'

export default class BadgeDetailsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            loading: true,
            error: null, 
            data: undefined
        }
    }
   
    componentDidMount(){
        this.fetchData()
    }


    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading:false, data: data})

        }catch(error){
            this.setState({loading: false, error: error})
        }
    } 



    render() {

        const {loading, error, data } = this.state

        if(loading){
            return <PageLoading/>
        }

        if(error){
            return <PageError error={error}/>
        }

        return (
            <BadgeDetails badge={data} />
        )

    }
}

