import axios from 'axios'
import React, { Component } from 'react'

class Users extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
            companies: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/users')
        .then((response) => {
            this.setState({
                users: response.data.data
            })
        })
        .catch((error) => {
            console.log(error)
        });

        axios.get('http://localhost:8000/api/companies')
        .then((response) => {
            this.setState({
                companies: response.data.data
            })
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        console.log(this.state.companies.length);
        return (
            <>
            <h3>List of all users</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Allocated Company</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user) => {
                            return (<tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                {
                                    user.companies.map((company) => {
                                        return company.name + ', '
                                    })
                                }
                                </td>
                                <td>
                                    <input type="button" className="btn btn-primary btn-sm" value="Allocate Company" onClick={() => this.alocateCompany() }/>
                                </td>
                                {
                                    this.state.companies.length == 0 ? <>
                                        <form>
                                            {
                                            this.state.companies.map((compamy) => {
                                                return <input type="checkbox" name="company" value={compamy.id} />
                                            })
                                            }
                                        </form>
                                    </> : null
                                }
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <a href="/createuser" className="btn btn-primary m-2">Create User</a>
            <a href="/createcompany" className="btn btn-primary m-2">Create Company</a>
            </>
        )
    }
}

export default Users