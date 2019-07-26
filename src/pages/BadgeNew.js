import React, {Component} from 'react'

import '../styles/BadgeNew.css'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'

import header from '../images/badge-header.svg'
import yuumi from '../images/yuumi.png'
import api from '../api'

export default class BadgeNew extends Component{
    state = { 
        loading: false,
        error: null,
        form: {
            firstName : '',
            lastName : '',
            email : '',
            jobTitle : '',
            twitter : ''  
    } };

  /*  Forma 1 para agregar datos al state
    handleChange = (e) => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value
        this.setState({
            form: nextForm
        })
    } */

    handleChange = (e) => {
      
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
      e.preventDefault()
      this.setState({loading: true, error: null})

      try{
          await api.badges.create(this.state.form)
          this.setState({loading: false})
          this.props.history.push('/badges')
      }catch(error){
          this.setState({loading: false, error:error})
      }
    }

    render(){
        
        //State
        const { form, loading, error } = this.state

        //Methods
        const { handleChange, handleSubmit } = this

        if(loading){
            return <PageLoading/>
        }

        return(
            <React.Fragment>
               
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className=" col-md-6  ">
                            <Badge 
                            name={form.firstName || 'Luis Miguel'}
                            lastName={form.lastName || 'Rodriguez'}
                            avatar={yuumi}
                            jobTitle={form.jobTitle || 'Fronted Engineer'}
                            twitter={form.twitter || 'lrodve'}
                            email={form.email || 'inf.lrodriguez@gmail.com' }
                            />
                        </div>

                        <div className=" col-md-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                            onChange={handleChange} 
                            onSubmit={handleSubmit} 
                            formValues={form}
                            error={error} /> 
                        </div>

                    
                    </div>
                </div>
            </React.Fragment>
        )

    }
}