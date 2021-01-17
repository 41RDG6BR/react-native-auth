import React, {useContext} from 'react'
import { View, Button, Text } from 'react-native'
// import { signIn } from '../../services/auth'
import AuthContext from '../../contexts/auth'

const styles= {
  container: {flex: 1, justifyContent: 'center'}
}
const Dashboard: React.FC = () => {

  const {signOut} = useContext(AuthContext)

  function handleSignOut() {
  // const res = await signIn()
  //   console.log(res)
    signOut();
  }

return (
  <View>
  <Button
  onPress={handleSignOut}
  title="Sign out"
/>
</View>
)
}

export default Dashboard;