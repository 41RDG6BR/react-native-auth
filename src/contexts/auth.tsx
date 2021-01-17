import React, { createContext, useState, useEffect } from 'react'
import  AsyncStorage  from '@react-native-community/async-storage'
import * as auth from '../services/auth'
import api from '../services/api'
// import api from '../services/api'

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.Fc = ({children}) => {
    const [user, setUser] = useState<object | null>(null)
    const [ loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadStoragedData(){

      const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

      //api.defaults.headers.Authorization = `Bearer ${storagedToken}`
      
      if(storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
        setLoading(false)
      }
    }

      loadStoragedData()
  }, [])

  const signIn = async () => {
    const response = await auth.signIn();
    // console.log(response.user)
    setUser(response.user);
    
    //api.defaults.headers['Authorization'] = `Bearer ${response.token}`
    //a partir da auth do user na app, em toda a req para api é enviado header auth e token
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNAuth:token', response.token)
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }
  // const signOut = async () => {
  //   await AsyncStorage.clear()
  //   setUser(null);
  // }

  return (
    <AuthContext.Provider 
      value={{
        signed: !!user, 
        user, 
        loading,
        signIn, 
        signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext;