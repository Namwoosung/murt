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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cf4f477-6e6f-4258-98a9-3df5c75216d5"}} 
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a3b7ba7-6df9-46d5-9ffb-251885713a2a"}} 
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
						backgroundColor: "#EAEAEA",
						borderRadius: 20,
						paddingHorizontal: 10,
						marginBottom: 168,
						marginHorizontal: 112,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a06cebbe-7fd2-43e0-a8b0-bc19a3c00843"}} 
						resizeMode = {"stretch"}
						style={{
							height: 129,
							marginTop: 20,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#DFDFDF",
						borderColor: "#DBD2D2",
						borderRadius: 12,
						borderWidth: 1,
						paddingHorizontal: 18,
						marginHorizontal: 42,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92592ec6-aa69-4dd1-9342-bd93764d8677"}} 
						resizeMode = {"stretch"}
						style={{
							width: 19,
							height: 19,
							marginRight: 51,
						}}
					/>
					<TextInput
						placeholder={"Continue with Google"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#111111",
							fontSize: 12,
							flex: 1,
							paddingVertical: 11,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}