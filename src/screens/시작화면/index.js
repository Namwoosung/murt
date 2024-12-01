import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
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
					paddingTop: 66,
				}}>
				<Text 
					style={{
						color: "#000000",
						fontSize: 20,
						marginBottom: 47,
						marginHorizontal: 173,
					}}>
					{"MURT"}
				</Text>
				<View 
					style={{
						backgroundColor: "#DB0000",
						borderRadius: 20,
						paddingHorizontal: 31,
						marginHorizontal: 112,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ac748e5-0aa4-4719-82b4-374b7c19b1ca"}} 
						resizeMode = {"stretch"}
						style={{
							height: 82,
							marginTop: 43,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}