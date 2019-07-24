import React, {Component} from 'react'

import '../styles/BadgeNew.css'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg'
import yuumi from '../images/yuumi.png'

export default class BadgeNew extends Component{
    state = { form: {
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

    render(){
        
        //State
        const { form } = this.state

        //Methods
        const { handleChange } = this

        return(
            <React.Fragment>
               
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className=" col-md-6  ">
                            <Badge 
                            name={form.firstName}
                            lastName={form.lastName}
                            avatar={yuumi}
                            jobTitle={form.jobTitle}
                            twitter={form.twitter}
                            email={form.email}
                            />
                        </div>

                        <div className=" col-md-6">
                            <BadgeForm onChange={handleChange} formValues={form} /> 
                        </div>

                    
                    </div>
                </div>
            </React.Fragment>
        )

    }
}