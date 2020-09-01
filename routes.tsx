import React from 'react';
import { Text, View, useWindowDimensions, Alert } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
  // Pegando a altura do dispositivo
  const { height } = useWindowDimensions();

  return (
    // Criando um Drawer com scrollView
    <DrawerContentScrollView {...props} style={{backgroundColor: '#000'}}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: height }}>
        {/* Icone bars com o evento de minimizar o menu */}
        <DrawerItem
          key="iconToggle"
          onPress={() => props.navigation.toggleDrawer()}
          label={() => <Icon name="bars" color="#FFF" size={30} />}
          style={{ position: 'absolute', top: 0,  left: 1 }}
          />
        {/* Lista as Screen do Drawer */}
        <DrawerItemList {...props} activeTintColor="#212121" labelStyle={{fontSize: 20, color: '#FFF'}}/>
        {/* Botão com o evento para encerrar sessão */}
        <DrawerItem
          key="logout"
          label="SAIR"
          onPress={() => {
            Alert.alert('Sessão encerrada!');
            props.navigation.toggleDrawer(); // minimiza o menu
          }}
          labelStyle={{ fontSize: 20, color: '#FFF' }}
          />
      </View>
    </DrawerContentScrollView>
  );
}

const ScreenDrawerOne = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: '#000', fontSize: 24}}>tela 1</Text>
  </View>
);

const ScreenDrawerTwo = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: '#000', fontSize: 24}}>tela 2</Text>
  </View>
);

const Routes: React.FC = () => (
  <Drawer.Navigator drawerContent={({ ...props }) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="MENU 1" component={ScreenDrawerOne} />
    <Drawer.Screen name="MENU 2" component={ScreenDrawerTwo} />
  </Drawer.Navigator>
);

export default Routes;
