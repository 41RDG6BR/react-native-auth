import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../pages/Dashboard'

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Dashboard" component={Dashboard} />
  </AuthStack.Navigator>
)

export default AppRoutes;