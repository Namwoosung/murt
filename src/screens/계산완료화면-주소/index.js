import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, } from "react-native";
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
					paddingTop: 36,
					paddingHorizontal: 8,
				}}>
				<View >
					<View >
						<View 
							style={{
								backgroundColor: "#E7E8EB",
							}}>
							<View 
								style={{
									backgroundColor: "#F8FAFF",
									paddingVertical: 31,
									paddingHorizontal: 21,
									marginTop: 351,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 22,
									}}>
									{"쇼핑 주소 확인"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								position: "absolute",
								top: -36,
								right: -7,
								width: 390,
								height: 44,
								backgroundColor: "#FFFFFF",
								paddingLeft: 33,
								paddingRight: 14,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: 18,
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d30fcd0-add6-45a7-a2ff-18c48c4ad339"}} 
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
						</View>
						<View 
							style={{
								position: "absolute",
								bottom: -1,
								left: -1,
								width: 375,
								height: 392,
								backgroundColor: "#FFFFFF",
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
									marginTop: 107,
									marginBottom: 2,
									marginLeft: 21,
								}}>
								{"Address"}
							</Text>
							<TextInput
								placeholder={"경기도, 수원시, 영동동, XXXXX11-17 ,202호"}
								value={textInput1}
								onChangeText={onChangeTextInput1}
								style={{
									color: "#000000",
									fontSize: 16,
									marginBottom: 17,
									marginHorizontal: 20,
									backgroundColor: "#F1F4FE",
									borderRadius: 9,
									paddingVertical: 13,
									paddingHorizontal: 11,
								}}
							/>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
									marginBottom: 2,
									marginLeft: 21,
								}}>
								{"Town / City"}
							</Text>
							<TextInput
								placeholder={"수원시, 영통동"}
								value={textInput2}
								onChangeText={onChangeTextInput2}
								style={{
									color: "#000000",
									fontSize: 16,
									marginBottom: 17,
									marginHorizontal: 20,
									backgroundColor: "#F1F4FE",
									borderRadius: 9,
									paddingVertical: 13,
									paddingHorizontal: 11,
								}}
							/>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
									marginBottom: 2,
									marginLeft: 22,
								}}>
								{"Postcode"}
							</Text>
							<View 
								style={{
									backgroundColor: "#F1F4FE",
									borderRadius: 9,
									paddingTop: 17,
									paddingBottom: 4,
									paddingHorizontal: 11,
									marginBottom: 26,
									marginHorizontal: 20,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"12435"}
								</Text>
							</View>
							<View 
								style={{
									backgroundColor: "#E5EBFC",
									paddingHorizontal: 20,
								}}>
								<View 
									style={{
										alignItems: "center",
										backgroundColor: "#E73939",
										borderRadius: 11,
										paddingTop: 17,
										paddingBottom: 7,
										marginTop: 10,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 16,
										}}>
										{"Save Changes"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -81,
							right: -7,
							width: 390,
							height: 106,
						}}>
						<View 
							style={{
								height: 106,
								backgroundColor: "#FFFFFF",
							}}>
						</View>
						<View 
							style={{
								position: "absolute",
								top: -60,
								right: 2,
								width: 375,
								height: 60,
								backgroundColor: "#FFEBEB",
							}}>
						</View>
						<View 
							style={{
								position: "absolute",
								bottom: -2,
								left: 148,
								width: 93,
								height: 93,
								backgroundColor: "#FFFFFF",
								paddingHorizontal: 24,
							}}>
							<View 
								style={{
									backgroundColor: "#A8A8A8",
									borderRadius: 18,
									paddingHorizontal: 14,
									marginTop: 10,
									marginBottom: 8,
								}}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b21c24c-b149-4373-986e-17ae26378ee9"}} 
									resizeMode = {"stretch"}
									style={{
										height: 22,
										marginTop: 12,
									}}
								/>
							</View>
							<Text 
								style={{
									color: "#A8A8A8",
									fontSize: 14,
								}}>
								{"MURT"}
							</Text>
						</View>
						<View 
							style={{
								position: "absolute",
								bottom: -2,
								left: 0,
								width: 93,
								height: 93,
								backgroundColor: "#FFFFFF",
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9aae108-a1f3-4477-a912-9a995309b48a"}} 
								resizeMode = {"stretch"}
								style={{
									height: 24,
									marginTop: 21,
									marginBottom: 17,
									marginHorizontal: 33,
								}}
							/>
							<Text 
								style={{
									color: "#A0A3B1",
									fontSize: 14,
									marginHorizontal: 21,
								}}>
								{"관심상품"}
							</Text>
						</View>
						<View 
							style={{
								position: "absolute",
								bottom: -2,
								right: -1,
								width: 93,
								height: 93,
								backgroundColor: "#FFFFFF",
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd10bbf8-c206-4c75-9410-5938fcb6944b"}} 
								resizeMode = {"stretch"}
								style={{
									height: 23,
									marginTop: 20,
									marginBottom: 19,
									marginHorizontal: 33,
								}}
							/>
							<Text 
								style={{
									color: "#E73939",
									fontSize: 14,
									marginHorizontal: 21,
								}}>
								{"개인정보"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}