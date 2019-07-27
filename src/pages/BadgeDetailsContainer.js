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
            data: undefined,
            modalIsOpen: false
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

    handeCloseModal = ()=>{
        this.setState({modalIsOpen: false})
    }

    handeOpenModal = ()=>{
        this.setState({modalIsOpen: true})
    }

    handleDeleteBadge = async () =>{
        this.setState({loading: true, error: null})
        try{
            await api.badges.remove(
                this.props.match.params.badgeId
            )
            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }




    render() {

        const {loading, error, data, modalIsOpen } = this.state
        const { handeCloseModal, handeOpenModal, handleDeleteBadge} = this

        if(loading){
            return <PageLoading/>
        }

        if(error){
            return <PageError error={error}/>
        }

        return (
            <BadgeDetails 
            onCloseModal={handeCloseModal} 
            onOpenModal={handeOpenModal}
            modalIsOpen={modalIsOpen}
            onDeleteBadge={handleDeleteBadge}
            badge={data} />
        )

    }
}

