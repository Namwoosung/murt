import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
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
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: Colors.surfaceContainerLowest,
						paddingVertical: 18,
						paddingLeft: 33,
						paddingRight: 14,
						marginBottom: 16,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: 15,
							marginRight: 4,
							flex: 1,
						}}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 17,
							height: 10,
							marginRight: 5,
						}}
					/>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
							marginRight: 6,
						}}>
						{"􀙇"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: 17,
						}}>
						{"􀛨"}
					</Text>
				</View>
				<Text 
					style={{
						color: Colors.shadow,
						fontSize: 20,
						marginBottom: 66,
						marginHorizontal: 166,
					}}>
					{"MURT"}
				</Text>
				<Image
					source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 345,
						marginBottom: 38,
					}}
				/>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						borderColor: "#E7E7E7",
						borderRadius: 12,
						borderWidth: 1,
						paddingVertical: 14,
						marginHorizontal: 37,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 20,
							height: 20,
							marginRight: 17,
						}}
					/>
					<Text 
						style={{
							color: "#111111",
							fontSize: FontSize.body_medium,
						}}>
						{"Continue with Google"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}