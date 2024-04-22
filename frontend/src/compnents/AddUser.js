import React, { Component } from 'react'
import axios from 'axios';

class AddUser extends Component {
    constructor() {
        super();

        this.state = {
            success: false,
            error: false,
            user: {
                name: '',
                phone: '',
                email: ''
            }
        }
    }

    async addUser(event) {
        event.preventDefault();

        this.setState({
            success: false,
            error: false
        })

        await axios.post('http://localhost:8000/api/user', {
            name: this.state.user.name,
            phone: this.state.user.phone,
            email: this.state.user.email
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

    handleInputField(event) {
        let tempState = this.state.user;
        tempState[event.target.name] = event.target.value
        console.log({
            user: tempState
        });
        this.setState({
            user: tempState
        });
    }

    render() {
        return (
        <>
            <h1>Create User</h1>
            { this.state.success ? <div className="alert alert-success" role="alert">Successfully Added user</div> : null }
            { this.state.error ? <div className="alert alert-danger" role="alert">Failed to add user</div> : null }
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="compnay">User Name</label>
                    <input id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.user.name}
                        placeholder="Enter Name"
                        onChange={(event) => this.handleInputField(event) }/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email"
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.user.email}
                        placeholder="Enter Email"
                        onChange={(event) => this.handleInputField(event) }/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input id="phone"
                        type="text"
                        className="form-control"
                        name="phone"
                        value={this.state.user.phone}
                        placeholder="Enter Pone"
                        onChange={(event) => this.handleInputField(event) }/>
                </div>
                <button className="btn btn-primary" type="submit" onClick={(event) => this.addUser(event) }>Add User</button>
            </form>
        </>
        )
    }
}

export default AddUser