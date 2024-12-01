import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
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
					paddingHorizontal: 7,
				}}>
				<View 
					style={{
						paddingHorizontal: -7,
						marginTop: 44,
					}}>
					<View 
						style={{
							height: 703,
							backgroundColor: "#E8E8E8B8",
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
					<View 
						style={{
							position: "absolute",
							top: -44,
							left: -7,
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd503f21-7043-4ec1-a4ce-b075cbd1b0c0"}} 
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
							top: -8,
							left: -7,
							width: 390,
							height: 68,
							backgroundColor: "#FFFFFF",
							paddingHorizontal: 173,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								marginTop: 30,
							}}>
							{"MURT"}
						</Text>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -5,
							right: 0,
							left: 0,
							height: 375,
							backgroundColor: "#FFFFFF",
						}}>
						<View 
							style={{
								backgroundColor: "#F8FAFF",
								paddingVertical: 31,
								paddingHorizontal: 21,
								marginBottom: 27,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 22,
								}}>
								{"카드 추가"}
							</Text>
						</View>
						<Text 
							style={{
								color: "#000000",
								fontSize: 13,
								marginBottom: 2,
								marginLeft: 21,
							}}>
							{"Card Holder"}
						</Text>
						<TextInput
							placeholder={"Required"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={{
								color: "#9EB4E8",
								fontSize: 16,
								marginBottom: 22,
								marginHorizontal: 20,
								backgroundColor: "#F1F4FE",
								borderRadius: 9,
								paddingVertical: 15,
								paddingHorizontal: 12,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 13,
								marginBottom: 2,
								marginLeft: 21,
							}}>
							{"Card Number"}
						</Text>
						<TextInput
							placeholder={"Required"}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={{
								color: "#9EB4E8",
								fontSize: 16,
								marginBottom: 23,
								marginHorizontal: 20,
								backgroundColor: "#F1F4FE",
								borderRadius: 9,
								paddingVertical: 15,
								paddingHorizontal: 12,
							}}
						/>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 2,
								marginHorizontal: 20,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
								}}>
								{"Valid"}
							</Text>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
								}}>
								{"CVV"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 17,
								marginHorizontal: 20,
							}}>
							<TextInput
								placeholder={"Required"}
								value={textInput3}
								onChangeText={onChangeTextInput3}
								style={{
									color: "#9EB4E8",
									fontSize: 16,
									width: 165,
									backgroundColor: "#F1F4FE",
									borderRadius: 9,
									paddingVertical: 15,
									paddingHorizontal: 12,
								}}
							/>
							<TextInput
								placeholder={"Required"}
								value={textInput4}
								onChangeText={onChangeTextInput4}
								style={{
									color: "#9EB4E8",
									fontSize: 16,
									width: 165,
									backgroundColor: "#F1F4FE",
									borderRadius: 9,
									paddingVertical: 15,
									paddingHorizontal: 12,
								}}
							/>
						</View>
						<TouchableOpacity 
							style={{
								alignItems: "center",
								backgroundColor: "#E73939",
								borderRadius: 9,
								paddingVertical: 14,
								marginHorizontal: 20,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#F3F3F3",
									fontSize: 16,
								}}>
								{"저장"}
							</Text>
						</TouchableOpacity>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -98,
							left: -7,
							width: 390,
							height: 126,
							backgroundColor: "#FFFFFF",
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginTop: 30,
							}}>
							<View 
								style={{
									width: 93,
									backgroundColor: "#FFFFFF",
									paddingVertical: 21,
								}}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0bfed1a-f392-4260-844e-a4e9592f315c"}} 
									resizeMode = {"stretch"}
									style={{
										height: 24,
										marginBottom: 13,
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
									width: 93,
									backgroundColor: "#FFFFFF",
									paddingVertical: 10,
									paddingHorizontal: 24,
								}}>
								<View 
									style={{
										backgroundColor: "#A8A8A8",
										borderRadius: 18,
										paddingHorizontal: 14,
										marginBottom: 16,
									}}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa682ef7-453d-48c0-a79b-c720d1a8233f"}} 
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
									width: 93,
									backgroundColor: "#FFFFFF",
									paddingVertical: 20,
								}}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a14e338d-fc31-4ad0-9e90-904470ada651"}} 
									resizeMode = {"stretch"}
									style={{
										height: 23,
										marginBottom: 16,
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
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}