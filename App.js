/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
	FlatList,
	Image,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  _flatList;

	_renderItem = (item) => {
		return (
			<TouchableOpacity style={styles.itemList}>
				<View style={styles.itemContainer}>
					<Text style={styles.itemTitle}>{item.item.title}</Text>
					<View>
						<Text style={styles.itemPrice}>{item.item.price}</Text>
					</View>
				</View>
        <Image source={require('./image/pasta.jpg')} style={styles.itemImage}/>
			</TouchableOpacity>
		)
  };

	_separator = () => {
		return <View style={{height:0.5, backgroundColor:'#cccccc'}}/>
  };

  render(){
    var data = new Array();
    for (i = 0; i < 30; i++) {
      data[i] = {};
      data[i].title = "義大利麵" + (i + 1);
      data[i].price = '$169';
    }

    return(
			<View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
				<View ItemSeparatorComponent={this._separator}/>
				<View style={styles.trailList}>
					<FlatList
						ref = {(flatList)=>this._flatList = flatList}
						ItemSeparatorComponent={this._separator}
						renderItem={this._renderItem}
						data={data}>
					</FlatList>
				</View>
			</View>
		);
	}
}

const styles= StyleSheet.create({
	container:{
		flexDirection:'column',
		flex:1,
		paddingTop:27,
		paddingBottom:5,
		marginBottom:5,
		alignItems:'center',
		backgroundColor:'#fff',
		borderBottomWidth:StyleSheet.hairlineWidth,
		borderBottomColor:'#cdcdcd',
	},
	trailList: {
		flex:1, //20?
		width:400,
    height:100,
    paddingTop:22,
    paddingLeft:10,
    paddingRight:10,
	},
	itemList: {
		flexDirection:'row',
		flex:1,
		paddingBottom:5,
		paddingTop:5,
	},
	itemContainer: {
		flex:4.1,
    justifyContent:'center',
  },
  itemImage: {
		height:80,
		width:80,
		flex:1,
		alignItems:'center',
		marginTop:10,
		marginBottom:10,
	},
	itemTitle: {
		fontSize:14,
		color:'#000000',
    fontWeight:'700',
  },
  itemPrice: {
		paddingTop:10
	},
});