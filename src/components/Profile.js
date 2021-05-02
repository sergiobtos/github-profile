import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = { 
            userInfo : {},
            editing : false
        }
    }


   componentDidMount(){
       var token = "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";
       let header = new Headers({"Content-Type":"application/json", "Authorization":"token "+token});
       fetch('https://api.github.com/users/sergiobtos', {
           method: 'GET',
           headers: header
       })
       .then(response => response.json())
       .then(json => {
           console.log(json)
           this.setState({
               userInfo : json
           })
       })
       .catch(error => {
           console.log(error)
       });
   }

   updateValue(type, event){
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState({userInfo: userInfoCopy});
        console.log(this.state.userInfo);
   }

    render() {
        return(
            
            <div className="container">
                <div>
                    <Button variant="outline-primary" onClick={()=> this.setState({editing: !this.state.editing})}>Edit</Button>
                </div>
                <hr/>
                {this.state.editing ? 
                    <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Name should be here"
                            value={this.state.userInfo.name}
                            onChange={this.updateValue.bind(this, 'name')} />
                    </Form.Group>
                    <Form.Group controlId="formGroupBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Bio should be here"
                            value={this.state.userInfo.bio}
                            onChange={this.updateValue.bind(this, 'bio')} />
                    </Form.Group>
                    <Form.Group controlId="formGroupLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Location should be here"
                            value={this.state.userInfo.location}
                            onChange={this.updateValue.bind(this, 'location')} />
                    </Form.Group>
                    <Form.Group controlId="formGroupCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Company should be here"
                            value={this.state.userInfo.company}
                            onChange={this.updateValue.bind(this, 'company')} />
                    </Form.Group>
                    </Form>
                :
                <div>
                    <p><strong>Name: </strong>{this.state.userInfo.name}</p>
                    <p><strong>Bio: </strong>{this.state.userInfo.bio}</p>
                    <p><strong>Location: </strong>{this.state.userInfo.location}</p>
                    <p><strong>Company: </strong>{this.state.userInfo.company}</p>
                </div>
                }
               
            </div>
        );
    }
}

export default Profile;