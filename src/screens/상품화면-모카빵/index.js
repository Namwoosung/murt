import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
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
				}}>
				<View 
					style={{
						backgroundColor: "#EAF2FF",
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							paddingVertical: 18,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 19,
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ef67060-97d0-4b28-b498-60c078864c3c"}} 
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
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2e6aa60-99d9-4990-95ac-d0e217ceb78d"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
								marginBottom: 19,
								marginHorizontal: 24,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/797a7a85-67ae-4fbc-901d-ce4a8c7c0486"}} 
							resizeMode = {"stretch"}
							style={{
								height: 216,
								marginBottom: 17,
								marginHorizontal: 68,
							}}
						/>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginHorizontal: 159,
							}}>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#E73939",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							paddingVertical: 24,
							paddingHorizontal: 25,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 12,
							}}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 18,
									marginRight: 4,
									flex: 1,
								}}>
								{"모카 빵"}
							</Text>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d10fcd64-ecad-4ae7-9297-1e01897686f5"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginBottom: 26,
							}}>
							{"3,500 원"}
						</Text>
						<Text 
							style={{
								color: "#71727A",
								fontSize: 12,
								marginBottom: 67,
							}}>
							{"달달한 커피와의 최고의 조합 모카 빵"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
							}}>
							{"Size"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 35,
							}}>
							<View 
								style={{
									width: 61,
									alignItems: "center",
									backgroundColor: "#FFEAEA",
									borderRadius: 12,
									paddingVertical: 8,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#E73939",
										fontSize: 10,
									}}>
									{"Small"}
								</Text>
							</View>
							<View 
								style={{
									width: 69,
									alignItems: "center",
									backgroundColor: "#E73939",
									borderRadius: 12,
									paddingVertical: 9,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
									}}>
									{"medium"}
								</Text>
							</View>
							<View 
								style={{
									width: 42,
									alignItems: "center",
									backgroundColor: "#FFEAEA",
									borderRadius: 12,
									paddingVertical: 8,
								}}>
								<Text 
									style={{
										color: "#E73939",
										fontSize: 10,
									}}>
									{"big"}
								</Text>
							</View>
						</View>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 61,
							}}>
							{"Number"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b474a54c-c72c-4135-876c-1dd265348a89"}} 
							resizeMode = {"stretch"}
							style={{
								width: 71,
								height: 24,
								marginBottom: 61,
							}}
						/>
						<TouchableOpacity 
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#E73939",
								borderRadius: 12,
								paddingVertical: 18,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99ea96ec-b3a8-43a0-a59e-30238542794b"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 9,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
								}}>
								{"Add to bag"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}