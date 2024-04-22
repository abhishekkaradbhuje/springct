import React, { Component } from 'react'
import axios from 'axios';

class AddCompnay extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            city: '',
            success: false,
            error: false
        }
    }

    async createCompany(event) {
        event.preventDefault();

        this.setState({
            success: false,
            error: false
        })

        await axios.post('http://localhost:8000/api/company', {
            name: this.state.name,
            city: this.state.city
        })
        .then((response) => {
            this.setState({
                success: true
            })
        })
        .catch((error) => {
            this.setState({
                error: true
            })
        });
    }

    handleCompanyInput(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleCityInput(event) {
        this.setState({
            city: event.target.value
        });
    }

    render() {
        return (
        <>
            <h1>Create Company</h1>
            { this.state.success ? <div className="alert alert-success" role="alert">Successfully Added company</div> : null }
            { this.state.error ? <div className="alert alert-danger" role="alert">Failed to add company</div> : null }
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="compnay">Company Name</label>
                    <input id="company"
                        type="text"
                        className="form-control"
                        name="company"
                        value={this.state.name}
                        placeholder="Enter Compnay"
                        onChange={(event) => this.handleCompanyInput(event) }/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="city">Company Name</label>
                    <input id="city"
                        type="text"
                        className="form-control"
                        name="city"
                        value={this.state.city}
                        placeholder="Enter City"
                        onChange={(event) => this.handleCityInput(event) }/>
                </div>
                <button className="btn btn-primary" type="submit" onClick={(event) => this.createCompany(event) }>Create Company</button>
            </form>
        </>
        )
    }
}

export default AddCompnay