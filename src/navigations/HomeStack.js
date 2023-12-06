import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavgator';
import ProfileDetail from '../modules/ProfileDetail';
import Friends from '../modules/Friends';
import Chat from '../modules/Chat';
import MessageScreen from '../modules/Chat/messageScreen';
import MainList from '../modules/Location/mainList';
import MoreList from '../modules/Location/moreList';
import ItemDetail from '../modules/Location/moreList/ItemDetail';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
            <Stack.Screen name="Friends" component={Friends} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name='MessageScreen' component={MessageScreen} />
            <Stack.Screen name='MainList' component={MainList} />
            <Stack.Screen name='MoreList' component={MoreList} />
            <Stack.Screen name='ItemDetail' component={ItemDetail} />
        </Stack.Navigator>
    );
};

export default HomeStack;
