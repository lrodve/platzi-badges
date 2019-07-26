import React, { Component } from 'react'

export default class BadgeForm extends Component {

    /* state = {}; */

   /*  handleChange = (e) => {
        console.log({
            name : e.target.name,
            value:  e.target.value
            })
        this.setState({
            [e.target.name]: e.target.value,
        })
    } */

    handleClick = (e) => {
        e.preventDefault()
        console.log("boton encendido :)")
    }

    /* handleSubmit = (e) => {
        e.preventDefault()
        console.log("boton encendido :)")
        console.log(this.state)
    } */
    render() {

        //State
        //const { firstName,lastName, email, jobTitle, twitter } = this.state 

        //Methods
        //const { handleSubmit } = this

        //Props 
        const { onChange, onSubmit, formValues, error } = this.props 


        return (
            <div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={onChange} className="form-control" type="text" name="firstName" value={formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={onChange} className="form-control" type="text" name="lastName" value={formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={onChange} className="form-control" type="email" name="email" value={formValues.email} />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={onChange} className="form-control" type="text" name="jobTitle" value={formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label>Twitter Account</label>
                        <input onChange={onChange} className="form-control" type="text" name="twitter" value={formValues.twitter} />
                    </div>

                    <button type="submit" className="btn btn-success">Save</button>
                    {error && (
                        <p className="text-danger ">Error: {error.message}</p>
                    )}
                </form>
            </div>
        )
    }
}