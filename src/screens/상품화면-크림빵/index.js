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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/974a36ba-669d-4f34-855c-248e51389494"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92084bbf-380b-4587-ab83-5ca7ffdf85b5"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
								marginBottom: 38,
								marginHorizontal: 24,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a0c1f75-0190-4370-ab7b-820e7aac82e4"}} 
							resizeMode = {"stretch"}
							style={{
								height: 171,
								marginBottom: 43,
								marginHorizontal: 56,
							}}
						/>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginHorizontal: 158,
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
								{"크림 빵"}
							</Text>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f37b580-b13a-45c2-9941-29a2761defd8"}} 
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
							{"4,000 원"}
						</Text>
						<Text 
							style={{
								color: "#71727A",
								fontSize: 12,
								marginBottom: 66,
							}}>
							{"크림이 가득 차있는 빵"}
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dafc7374-1797-49aa-844a-5ddf62e255d2"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/716ff139-afab-4fa9-bb9a-baed5bbaae42"}} 
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