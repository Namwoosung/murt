import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, } from "react-native";
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9427145-6333-45a9-a9cd-bc022adf7dd2"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/515d91ee-85c1-42ca-9963-5a6ae9490604"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
								marginBottom: 10,
								marginHorizontal: 24,
							}}
						/>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5c1f4f9-2f66-42c4-8b53-051ba582ed1e"}} 
							resizeMode = {'stretch'}
							style={{
								height: 250,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "flex-start",
								paddingTop: 242,
								marginHorizontal: 55,
							}}
							>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
									marginRight: 8,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#E73939",
									borderRadius: 24,
									marginRight: 8,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
									marginRight: 8,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
									marginRight: 8,
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
						</ImageBackground>
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
								{"바나나 우유"}
							</Text>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49845f2f-d809-40c8-bb3b-344219b29f8d"}} 
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
							{"6,000 원"}
						</Text>
						<Text 
							style={{
								color: "#71727A",
								fontSize: 12,
								marginBottom: 66,
							}}>
							{"6개가 한박스에 담겨있는 바나나 우유"}
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/261ea224-cd24-41b8-9a99-4fab0fa58dd8"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc4a8035-f314-44de-b320-5184a45a08b3"}} 
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