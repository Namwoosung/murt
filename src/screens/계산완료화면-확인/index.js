import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image, } from "react-native";
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
					paddingTop: 13,
				}}>
				<View >
					<View >
						<View 
							style={{
								backgroundColor: "#E7E8EB",
								borderColor: "#5E27FD",
								borderWidth: 1,
								paddingHorizontal: 20,
							}}>
							<View 
								style={{
									marginTop: 292,
								}}>
								<View 
									style={{
										backgroundColor: "#FFFFFF",
										borderRadius: 19,
										paddingTop: 64,
										paddingBottom: 25,
										shadowColor: "#00000029",
										shadowOpacity: 0.2,
										shadowOffset: {
										    width: 0,
										    height: 2
										},
										shadowRadius: 10,
										elevation: 10,
									}}>
									<Text 
										style={{
											color: "#202020",
											fontSize: 19,
											marginBottom: 11,
											marginHorizontal: 149,
										}}>
										{"Done!"}
									</Text>
									<Text 
										style={{
											color: "#000000",
											fontSize: 13,
											marginBottom: 22,
											marginHorizontal: 56,
										}}>
										{"You card has been successfully charged"}
									</Text>
									<TouchableOpacity 
										style={{
											alignItems: "center",
											backgroundColor: "#E7E8EB",
											borderRadius: 11,
											paddingVertical: 16,
											marginHorizontal: 92,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#000000",
												fontSize: 16,
											}}>
											{"Track My Order"}
										</Text>
									</TouchableOpacity>
								</View>
								<View 
									style={{
										position: "absolute",
										top: -38,
										right: 133,
										width: 80,
										height: 80,
										backgroundColor: "#FFFFFF",
										borderColor: "#5E27FD",
										borderWidth: 1,
										paddingHorizontal: 15,
										shadowColor: "#00000029",
										shadowOpacity: 0.2,
										shadowOffset: {
										    width: 0,
										    height: 3
										},
										shadowRadius: 8,
										elevation: 8,
									}}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a8465cd-c624-4e52-856b-129294fd0b5a"}} 
										resizeMode = {"stretch"}
										style={{
											height: 50,
											marginTop: 15,
										}}
									/>
								</View>
							</View>
						</View>
						<View 
							style={{
								position: "absolute",
								top: -13,
								left: 0,
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc0aab96-74b0-4639-ad6f-164dcd4f891a"}} 
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
					</View>
					<View >
						<View 
							style={{
								height: 106,
								backgroundColor: "#FFFFFF",
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fde4021-579f-4f2c-9747-ecd4787f26e1"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4b9cf59-568d-4db3-8cd2-006b21ba9361"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a11f0bc2-8b3e-416a-9871-3bd0a1ba8f9b"}} 
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