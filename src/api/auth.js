import { createSlice } from '@reduxjs/toolkit';

export const AuthDb = createSlice({
    name: 'auth',
    initialState: {
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cognitoId: '',
        verify: false,
        apiUrl: '',
        loading: false,
        register: {
            firstName: '',
            lastName: '',
            email: '',
            phone_number: '',
            phone: '',
            password: 'nosnownaples'
        }
    },
    reducers: {
        setLoading: (state, action) => {
            return{
                ...state,
                loading:action.payload
            }
            
        },
        signIn: (state, action) =>{
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                phone: action.payload.phone,
                cognitoId: action.payload.cognitoId,
                verify: action.payload.verify
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
        signOut: (state, action) => {
            return {
                ...initialState
            }
        },
        setRegister: (state, action) =>{
            var register = {
                ...state.register,
                ...action.payload
            }
            return {
                ...state,
                register: register
            }
        }
    }
})

export const { signIn, setRegister, signOut, setAppValues, setLoading } = AuthDb.actions

export default AuthDb.reducer
