import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, } from "react-native";
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
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						height: 345,
						flexDirection: "row",
						paddingTop: 18,
						paddingBottom: 310,
						paddingLeft: 33,
						paddingRight: 14,
						marginBottom: 13,
					}}
					>
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
				</ImageBackground>
				<Text 
					style={{
						color: Colors.shadow,
						fontSize: FontSize.headline_small,
						marginBottom: 23,
						marginLeft: 25,
					}}>
					{"Welcome!"}
				</Text>
				<View 
					style={{
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingVertical: 19,
						paddingHorizontal: 18,
						marginBottom: 16,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#8F9098",
							fontSize: FontSize.body_medium,
						}}>
						{"Email Address"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingVertical: 16,
						paddingHorizontal: 18,
						marginBottom: 20,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#8F9098",
							fontSize: FontSize.body_medium,
							marginRight: 4,
							flex: 1,
						}}>
						{"Password"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 16,
							height: 16,
						}}
					/>
				</View>
				<Text 
					style={{
						color: "#83838B",
						fontSize: FontSize.body_small,
						marginBottom: 23,
						marginLeft: 25,
					}}>
					{"Forgot password?"}
				</Text>
				<View 
					style={{
						alignItems: "center",
						backgroundColor: "#E73939",
						borderRadius: 12,
						paddingVertical: 20,
						marginBottom: 19,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: Colors.surfaceContainerLowest,
							fontSize: FontSize.body_small,
						}}>
						{"Login"}
					</Text>
				</View>
				<Text 
					style={{
						fontSize: FontSize.body_small,
						marginBottom: 25,
						marginHorizontal: 105,
					}}>
					{"Not a member? Register now"}
				</Text>
				<Image
					source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 1,
						marginBottom: 26,
						marginHorizontal: 24,
					}}
				/>
				<Text 
					style={{
						color: "#71727A",
						fontSize: FontSize.body_small,
						marginBottom: 17,
						marginHorizontal: 148,
					}}>
					{"Or continue with"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginHorizontal: 149,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 40,
							height: 40,
						}}
					/>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 40,
							height: 40,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}