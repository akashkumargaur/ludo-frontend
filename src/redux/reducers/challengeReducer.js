import {createReducer} from '@reduxjs/toolkit'

export const challengeReducer=createReducer({},{
    allChallengeRequest:state=>{
        state.loading=true;
      },
    allChallengeSuccess:(state,action)=>{
        state.loading=false;
        state.requestChallenge=action.payload;
      }, 
    allChallengeFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },
      createChallengeRequest:state=>{
        state.loading=true;
      },
      createChallengeSuccess:(state,action)=>{
        state.loading=false;
        state.challenge=action.payload;
        state.message=action.payload;
      }, 
      createChallengeFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },
      acceptChallengeRequest:state=>{
        state.loading=true;
      },
      acceptChallengeSuccess:(state,action)=>{
        state.loading=false;
        state.change=true;
        state.updatechallenge=action.payload;
        state.message=action.payload;
      }, 
      acceptChallengeFail:(state,action)=>{
        state.change=false;
        state.loading=false;
        state.error=action.payload;
      },
      clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    }
});

// Subcribe to redux store
export const subscriptionReducer=createReducer({},{
  buySubcriptionRequest:state=>{
      state.loading=true;
    },
    buySubcriptionSuccess:(state,action)=>{
      state.loading=false;
      state.subcriptionId=action.payload;
    }, 
    buySubcriptionFail:(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    },
    clearError:state=>{
      state.error=null;
  },
  clearMessage:state=>{
      state.message=null;
  }
});