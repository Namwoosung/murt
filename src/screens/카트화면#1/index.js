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
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 18,
						paddingLeft: 33,
						paddingRight: 14,
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a106ac4f-a0ab-4c10-879d-d9c4c33102bb"}} 
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
						backgroundColor: "#FFFFFF",
						paddingHorizontal: 180,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce295d89-13f8-4052-b82d-e809fc681304"}} 
						resizeMode = {"stretch"}
						style={{
							height: 29,
							marginTop: 14,
						}}
					/>
				</View>
				<View 
					style={{
						marginBottom: 42,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e059aa48-a722-42eb-89ad-f6d707fbfeba"}} 
						resizeMode = {"stretch"}
						style={{
							height: 577,
						}}
					/>
					<View 
						style={{
							position: "absolute",
							bottom: -42,
							right: 0,
							left: 0,
							height: 136,
							backgroundColor: "#FFFFFF",
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginTop: 23,
								marginBottom: 25,
								marginHorizontal: 37,
							}}>
							<Text 
								style={{
									color: "#71727A",
									fontSize: 14,
								}}>
								{"Total"}
							</Text>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 16,
								}}>
								{"29,000 원"}
							</Text>
						</View>
						<TouchableOpacity 
							style={{
								alignItems: "center",
								backgroundColor: "#E73939",
								borderRadius: 12,
								paddingVertical: 19,
								marginHorizontal: 24,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
								}}>
								{"결제"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View >
					<View 
						style={{
							height: 126,
							backgroundColor: "#FFFFFF",
						}}>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -1,
							right: 148,
							width: 93,
							height: 93,
							backgroundColor: "#FFFFFF",
							paddingHorizontal: 24,
						}}>
						<View 
							style={{
								backgroundColor: "#E73939",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginTop: 10,
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6482adb7-35c4-4547-83ff-c70b5f2a39c0"}} 
								resizeMode = {"stretch"}
								style={{
									height: 22,
									marginTop: 12,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
							}}>
							{"MURT"}
						</Text>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -1,
							left: 0,
							width: 93,
							height: 93,
							backgroundColor: "#FFFFFF",
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2ab83eb-d1c3-41c3-9498-9f3b207daae6"}} 
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
							bottom: -1,
							right: 0,
							width: 93,
							height: 93,
							backgroundColor: "#FFFFFF",
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c68622d2-80c7-4990-a78f-5762ec150aa8"}} 
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
								color: "#A0A3B1",
								fontSize: 14,
								marginHorizontal: 21,
							}}>
							{"개인정보"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}