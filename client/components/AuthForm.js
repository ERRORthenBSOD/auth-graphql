import React, { Component } from 'react';


export default class AuthForm extends Component {
    constructor(props){
        super(props)
        this.state = {email: '', password: ''}
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div className='row'>
                <form onSubmit={this.onSubmit.bind(this)} className='col s4'>
                    <div className='input-field'>
                        <input 
                            value={this.state.email} 
                            onChange={ e => this.setState({email: e.target.value})}
                            placeholder='Email'    
                        />
                    </div>
                    <div className='input-field'>
                    <input 
                        value={this.state.password} 
                        onChange={ e => this.setState({password: e.target.value})}
                        placeholder='Password'     
                    />
                    </div>
                    <div className="errors" style={{color:"red"}}>
                        {this.props.errors.map(err=> <div key={err}>{err}</div>)}
                    </div>

                    <button className='btn'>Submit</button>
                </form>
            </div>
        )
    }
};

