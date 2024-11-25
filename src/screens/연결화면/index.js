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
						marginBottom: 22,
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
						marginBottom: 185,
						marginHorizontal: 170,
					}}>
					{"MURT"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#E73939",
						borderRadius: 12,
						paddingVertical: 18,
						marginBottom: 39,
						marginHorizontal: 34,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 12,
							height: 12,
							marginRight: 9,
						}}
					/>
					<Text 
						style={{
							color: Colors.surfaceContainerLowest,
							fontSize: FontSize.body_small,
						}}>
						{"Creat Account"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						borderColor: "#E7E7E7",
						borderRadius: 12,
						borderWidth: 1,
						paddingVertical: 14,
						marginBottom: 39,
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
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FEE500",
						borderRadius: 6,
						paddingVertical: 14,
						paddingHorizontal: 20,
						marginHorizontal: 37,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 78,
						}}
					/>
					<Text 
						style={{
							color: Colors.shadow,
							fontSize: FontSize.body_medium,
							flex: 1,
						}}>
						{"Login with Kakao"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}