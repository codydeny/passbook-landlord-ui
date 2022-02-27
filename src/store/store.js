import axios from 'axios';
import React from 'react';
import { withSnackbar } from 'notistack';
import {Auth, Firestore as db} from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const StoreContext = React.createContext();

// Then create a provider Component
class StoreProvider extends React.Component {
  constructor(props){
    super(props);
    // Application Global State
    this.state = {
        // State Examples
        mongoAPIKey : "",
        isLoggedIn : localStorage.getItem('token') ? true : false,
        user : [],
        data : "I am Loaded From Global State",
        errors : {},
        firestore : {},
        marketData : {},
        pairsToTrack : [],
        loading : false,
        inProgressRentees : {
          9026272824 : 9026272824
        },
        rentalSore : {}
    }
}

  render() {
    return (
      <StoreContext.Provider value = {{ 
        state: this.state,

        submitForm : (e, extras={}) => {
          e.preventDefault();
          let formData = new FormData(e.target);
          formData = Object.fromEntries(formData)
          formData = {...formData, ...extras}
          console.log(formData)
        },

        createLease : (e, extras={}) => {
          e.preventDefault();
          let formData = new FormData(e.target);
          formData = Object.fromEntries(formData)
          formData = {...formData, ...extras}
          this.setState({ loading : true });
          axios.post(`/api/v1/lease/creation`, formData).then((res)=> {
            this.setState({ loading : false });
            this.setState({ lease : res.data });
          })
          
        },

        getRentalScore : (tenantId) => {
          this.setState({ loading : true });
          axios.get(`/api/v1/rentalscore/${tenantId}`).then((res)=> {
            this.setState({ loading : false });
            this.setState({ rentalSore : res.data });
          })
        },





        addInProgressRentee : (rentee) => {
          this.setState({
            inProgressRentees : {
              [rentee] : rentee,
              ...this.state.inProgressRentees
            }
          })
        },

        removeInProgressRentee : (rentee) => {
          let temp = this.state.inProgressRentees
          delete temp[rentee]
          this.setState({
            inProgressRentee : temp
          })
        },
        // Actions
        // State Mutations
        changeState :(data)=> {
            // change state
            // this.setState({
            //     token : "",
            //     isLoggedIn : true
            //   })
        }, 
      }} 	
        >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export {StoreContext};

export default withSnackbar(StoreProvider);