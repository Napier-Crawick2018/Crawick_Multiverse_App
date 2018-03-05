import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import React, { Component } from 'react'

//Logo image
class DisplayAnImageWithStyle extends Component 
{
  render() 
  {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
			source={require('C://Users//user//CrawickMultiverseApp/CWMLogo.jpg')}  
			style={{width: 100, height: 100}} 
		/>
      </View>
    );
  }  
}
//AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);

//Bottom nav bar
export default class SimpleBottomNavigation extends Component 
{
  render() 
  {
    return (
      <View style={{ flex: 1 }}>
        <BottomNavigation
          labelColor="white"
          rippleColor="white"
          style={styles.bottomNavigation}
        >
          <Tab
            barBackgroundColor="#37474F"
            label="Movies & TV"
            icon={<Icon size={24} color="white" name="ondemand-video" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Music"
            icon={<Icon size={24} color="white" name="music-note" />}
          />
          <Tab
            barBackgroundColor="#5D4037"
            label="Books"
            icon={<Icon size={24} color="white" name="book" />}
          />
          <Tab
            barBackgroundColor="#3E2723"
            label="News Stand"
            icon={<Icon size={24} color="white" name="newspaper" />}
          />
        </BottomNavigation>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56
  }
})
