import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
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
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 18,
						paddingLeft: 33,
						paddingRight: 14,
						marginBottom: 18,
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6fa0105-7ce0-4278-a09d-4aceb1dc0f92"}} 
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
							fontSize: 14,
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
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 47,
						marginHorizontal: 39,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f9736bb-e4d3-42e3-9fbd-af186a397515"}} 
						resizeMode = {"stretch"}
						style={{
							width: 4,
							height: 10,
						}}
					/>
					<Text 
						style={{
							color: "#000000",
							fontSize: 20,
							marginTop: 4,
						}}>
						{"MURT"}
					</Text>
				</View>
				<View 
					style={{
						backgroundColor: "#FFE812",
						borderRadius: 20,
						paddingHorizontal: 32,
						marginBottom: 168,
						marginHorizontal: 112,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f72df593-8795-4f9c-a37a-8996c2784c5f"}} 
						resizeMode = {"stretch"}
						style={{
							height: 85,
							marginTop: 42,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FEE500",
						borderColor: "#DBC70E",
						borderRadius: 12,
						borderWidth: 1,
						paddingHorizontal: 20,
						marginHorizontal: 39,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b03c69a-ace3-4790-a359-f7b4d110f2af"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 67,
						}}
					/>
					<TextInput
						placeholder={"Login with Kakao"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#000000",
							fontSize: 12,
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}