import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
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
					paddingTop: 18,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 31,
						marginHorizontal: 14,
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1387125-4853-421f-832a-a895e4ffeb8d"}} 
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
						marginBottom: 79,
						marginHorizontal: 112,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67b5bd6d-31a4-4943-88f7-d72dfb7b0907"}} 
						resizeMode = {"stretch"}
						style={{
							height: 82,
							marginTop: 43,
						}}
					/>
				</View>
				<Text 
					style={{
						color: "#000000",
						fontSize: 24,
						marginBottom: 23,
						marginLeft: 30,
					}}>
					{"Welcome!"}
				</Text>
				<TextInput
					placeholder={"Email Address"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={{
						color: "#8F9098",
						fontSize: 14,
						marginBottom: 16,
						marginHorizontal: 29,
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingVertical: 19,
						paddingHorizontal: 18,
					}}
				/>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingHorizontal: 18,
						marginBottom: 20,
						marginHorizontal: 29,
					}}>
					<TextInput
						placeholder={"Password"}
						value={textInput2}
						onChangeText={onChangeTextInput2}
						style={{
							color: "#8F9098",
							fontSize: 14,
							marginRight: 4,
							flex: 1,
							paddingVertical: 16,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a4eec0b-0f1c-4b43-97d6-b344e3e9c42a"}} 
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
						fontSize: 12,
						marginBottom: 23,
						marginLeft: 30,
					}}>
					{"Forgot password?"}
				</Text>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#E73939",
						borderRadius: 12,
						paddingVertical: 20,
						marginBottom: 19,
						marginHorizontal: 29,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
						}}>
						{"Login"}
					</Text>
				</TouchableOpacity>
				<Text 
					style={{
						fontSize: 12,
						marginBottom: 25,
						marginHorizontal: 110,
					}}>
					{"Not a member? Register now"}
				</Text>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d5a4e8e-854c-4538-8112-5982d2963ded"}} 
					resizeMode = {"stretch"}
					style={{
						height: 1,
						marginBottom: 26,
						marginHorizontal: 19,
					}}
				/>
				<Text 
					style={{
						color: "#71727A",
						fontSize: 12,
						marginBottom: 17,
						marginHorizontal: 146,
					}}>
					{"Or continue with"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginHorizontal: 147,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/305947e5-bd83-43c1-a0c6-f7769041b16f"}} 
						resizeMode = {"stretch"}
						style={{
							width: 40,
							height: 40,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb320953-a8db-4183-9c0e-9f4d2399a3b3"}} 
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