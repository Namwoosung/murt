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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c79d7661-a8a1-414b-a24e-f7156799f5b7"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7289734b-3d37-4bb3-b39a-06091284073f"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
								marginBottom: 7,
								marginHorizontal: 24,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84d84750-6c91-4cb9-b78f-78872242a197"}} 
							resizeMode = {"stretch"}
							style={{
								height: 199,
								marginBottom: 46,
								marginHorizontal: 106,
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
								{"바베큐 소스"}
							</Text>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5fef29c-6506-44f3-aa4f-a9fbb52ce622"}} 
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
								marginBottom: 27,
							}}>
							{"13,000 원"}
						</Text>
						<Text 
							style={{
								color: "#71727A",
								fontSize: 12,
								marginBottom: 66,
							}}>
							{"소고기 전용 바베큐 소스"}
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/705107a6-8fe3-419d-8914-fa8abb9d6ddb"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/176d542d-0ace-426a-9106-8684d0e3faf2"}} 
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