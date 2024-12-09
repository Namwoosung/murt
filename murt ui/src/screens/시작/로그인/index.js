import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import {Colors, FontSize, } from "../../constants";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: Colors.surfaceContainerLowest,
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: Colors.surfaceContainerLowest,
				}}>
				<Image
					source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 504,
						marginBottom: 8,
					}}
				/>
				<Text 
					style={{
						color: Colors.shadow,
						fontSize: FontSize.headline_small,
						marginBottom: 147,
						marginHorizontal: 55,
					}}>
					{"Make Us Reasonable Trader"}
				</Text>
				<View 
					style={{
						alignItems: "center",
						backgroundColor: "#E73838",
						borderRadius: 38,
						paddingVertical: 27,
						marginBottom: 26,
						marginHorizontal: 25,
					}}>
					<Text 
						style={{
							color: "#F6F1FA",
							fontSize: FontSize.body_medium,
						}}>
						{"SIGN UP"}
					</Text>
				</View>
				<Text 
					style={{
						fontSize: FontSize.body_medium,
						marginHorizontal: 55,
					}}>
					{"ALREADY HAVE AN ACCOUNT? LOG IN"}
				</Text>
			</ScrollView>
		</SafeAreaView>
	)
}