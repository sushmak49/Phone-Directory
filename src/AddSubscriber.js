import React, { Component } from 'react'
import Header from './Header'
import './common/common.css'

class AddSubscriber extends Component {
    render() {
        return (
            <div>
                <Header heading="Add Subscriber" />
                <button className="custom-btn back-btn">Back</button>
                <div className="component-body-container">
                    <form style={{marginBottom:"20px"}}>
                        <label htmlFor="name" className="label-control">Name:</label><br />
                        <input type="text" className="input-control" name="name"></input> <br />
                        <label htmlFor="name" className="label-control">Phone:</label> <br />
                        <input type="text" className="input-control" name="phone"></input> <br />
                    </form>
                    <div className="to-add-subscriber">
                        <div>Subscriber to be added</div>
                        <div>Name:</div>
                        <div>Phone:</div>
                    </div>
                </div>
                <button type="submit" className="custom-btn add-btn">Add</button>
            </div>
        )
    }
}

export default AddSubscriber