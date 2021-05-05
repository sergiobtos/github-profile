import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = { 
            userInfo : this.props.profile,
            editing : false,
            error : false
        }
    }


   componentDidMount(){
      this.props.fetchProfile();
   }

   UNSAFE_componentWillReceiveProps(nextProps){
      this.setState({
          userInfo : nextProps.profile
      }) 
   }

   updateValue(type, event){
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState({userInfo: userInfoCopy});
   }

   saveProfile(){
       this.props.saveProfile(this.state.userInfo)
   }

    render() {
        return(
            
            <div className="container">
                <div>
                    <Button variant="outline-primary" onClick={()=> this.setState({editing: !this.state.editing})}>
                        {this.state.editing ? 'Cancel Edit': 'Edit'}
                    </Button>
                </div>
                <hr/>
                {this.state.editing ? 
                    <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Name should be here"
                            className={this.state.error&&this.state.userInfo.name==='' ? 'red-border' : ''}
                            value={this.state.userInfo.name}
                            onChange={this.updateValue.bind(this, 'name')} />
                    </Form.Group>
                    <Form.Group controlId="formGroupBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Bio should be here"
                            className={this.state.error&&this.state.userInfo.bio==='' ? 'red-border' : ''}
                            value={this.state.userInfo.bio}
                            onChange={this.updateValue.bind(this, 'bio')} />
                    </Form.Group>
                    <Form.Group controlId="formGroupLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Location should be here"
                            className={this.state.error&&this.state.userInfo.location==='' ? 'red-border' : ''}
                            value={this.state.userInfo.location}
                            onChange={this.updateValue.bind(this, 'location')} />
                    </Form.Group>
                    <Form.Group controlId="formGroupCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Company should be here"
                            className={this.state.error&&this.state.userInfo.company==='' ? 'red-border' : ''}
                            value={this.state.userInfo.company}
                            onChange={this.updateValue.bind(this, 'company')} />
                            <Button bsstyle="info" onClick={this.saveProfile.bind(this)}>Save</Button>
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