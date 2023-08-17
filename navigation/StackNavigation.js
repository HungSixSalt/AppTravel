import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import DrawerNavigator from './DrawerNavigation';
import Index from '../screen/Test';
import Login from '../screen/Login/Login';
import BookTicket from '../screen/Bookticket/BookTicket';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name="MainTabComponents" component={TabNavigation} options={() => {
                return {
                    headerShown: false,
                };
            }} />
            <Stack.Screen name="Login" component={Login} options={() => {
                return {
                    headerShown: false,
                };
            }} />
            <Stack.Screen name="Test" component={Index} options={() => {
                return {
                    headerShown: false,
                };
            }} />
            <Stack.Screen name="BookTicket" component={BookTicket} options={() => {
                return {
                    headerShown: false,
                };
            }} />
        </Stack.Navigator>
    );
}
export default StackNavigation; 