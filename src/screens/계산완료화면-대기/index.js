import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
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
					paddingVertical: 8,
				}}>
				<View >
					<View >
						<View 
							style={{
								backgroundColor: "#E7E8EB",
								paddingHorizontal: 21,
							}}>
							<View 
								style={{
									marginTop: 336,
								}}>
								<View 
									style={{
										backgroundColor: "#FFFFFF",
										borderRadius: 19,
										paddingTop: 62,
										paddingBottom: 42,
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
											color: "#000000",
											fontSize: 20,
											marginBottom: 14,
											marginHorizontal: 68,
										}}>
										{"Payment is in progress"}
									</Text>
									<Text 
										style={{
											color: "#000000",
											fontSize: 13,
											marginHorizontal: 91,
										}}>
										{"Please, wait a few moments"}
									</Text>
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
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5519cb0a-f0c7-4ae3-b254-164de04624b3"}} 
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
								top: -8,
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e9eefac-aaf4-4905-863e-e09dd990f723"}} 
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c6f6109-aa11-4603-9cee-a128bfaa64f1"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9669d68a-4cc9-441a-a10f-3a970ac4fc7b"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/724811e3-fd73-43b0-b389-766d3159342e"}} 
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