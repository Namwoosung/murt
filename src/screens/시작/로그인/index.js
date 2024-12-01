import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/127191d5-ba6f-400c-9404-2c6166492d3e"}} 
					resizeMode = {"stretch"}
					style={{
						height: 502,
						marginBottom: 10,
					}}
				/>
				<Text 
					style={{
						color: "#000000",
						fontSize: 24,
						marginBottom: 147,
						marginHorizontal: 55,
					}}>
					{"Make Us Reasonable Trader"}
				</Text>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#E73838",
						borderRadius: 12,
						paddingVertical: 28,
						marginBottom: 30,
						marginHorizontal: 25,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
						}}>
						{"LOGIN"}
					</Text>
				</TouchableOpacity>
				<Text 
					style={{
						fontSize: 12,
						marginHorizontal: 112,
					}}>
					{"Not a member? Register now"}
				</Text>
			</ScrollView>
		</SafeAreaView>
	)
}