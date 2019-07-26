import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import '../styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'


import api from '../api'

export default class BadgeDetails extends Component {
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
            <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col BadgeDetails__hero-attendant-name">
                                <h1>{data.firstName} {data.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Badge 
                            name={data.firstName}
                            lastName={data.lastName}
                            email={data.email}
                            twitter ={data.twitter}
                            jobTitle={data.jobTitle}
                            avatar = {data.avatarUrl}
                            />
                        </div>
                        <div className="col-md-3 d-flex flex-column justify-content-center ">
                            <h2 className="text-center">Actions</h2>
                            <div className="mt-2">
                                <Link className="btn btn-success btn-block" to={`/badges/${data.id}/edit`}>Edit</Link>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-danger btn-block">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )

    }
}

