import { createSlice } from '@reduxjs/toolkit';

export const AuthDb = createSlice({
    name: 'auth',
    initialState: {
        isSignedIn: false,
        firstName: '',
        lastName: '',
        id: '',
        email: '',
        phone: '',
        cognitoId: '',
        verify: false,
        userPoolId: '',
        appClientId: '',
        api: {},
        apiUrl: '',
        stage: '',
        dataSet: '',
        loading: false,
        amplify: {}
    },
    reducers: {
        setLoading: (state, action) => {
            return{
                ...state,
                loading:action.payload
            }
            
        },
        setAppValues: (state, action) => {
            var apiUrl = `${action.payload.api.apiUrl}${action.payload.dataSet}/listings?access_token=${action.payload.api.browserToken}&`;
            return {
                ...state,
                api:action.payload.api,
                dataSet:action.payload.dataSet,
                stage:action.payload.stage,
                apiUrl: apiUrl
            }
        },
        signIn: (state, action) => {

           return {
                ...state,
                isSignedIn:true,
                firstName:action.payload.firstName,
                lastName: action.payload.lastName,
                id:action.payload.id,
                email:action.payload.email,
                phone:action.payload.phone,
                cognitoId:action.payload.cognitoId,
                verify:false,
                userPoolId:action.payload.userPoolId,
                appClientId:action.payload.appClientId,
                unknownSession:action.payload.unknownSession
            }
        },
        signOut: (state, action) => {
            return {
                ...state,
                isSignedIn:false,
                firstName:'',
                lastName:'',
                id:'',
                email:'',
                phone:'',
                cognitoId:'',
                verify:false,
                unknownSession:false,
                userType:'driver',
                userPoolId:'',
                appClientId:''
            }

        }
    },
})

export const { signIn, signOut, setAppValues, setLoading } = AuthDb.actions

export default AuthDb.reducer
