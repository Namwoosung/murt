import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
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
					paddingTop: 23,
				}}>
				<View >
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							padding: 24,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eeed9a09-97df-4953-83f7-bdc1672d5b0d"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
							}}
						/>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								marginRight: 85,
							}}>
							{"MURT"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7505973f-97a8-48ac-b698-361d4b881a92"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 16,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c18f0d72-3cfb-41ca-a0e0-29a65b409a2c"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
							}}
						/>
					</View>
					<View 
						style={{
							position: "absolute",
							top: -23,
							right: 0,
							left: 0,
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56afeb2c-a07b-47bd-b059-b146befb99c1"}} 
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
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67b578b6-669a-4179-aea8-ac371ea2bbe2"}} 
					resizeMode = {"stretch"}
					style={{
						height: 642,
					}}
				/>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						backgroundColor: "#FFFFFF",
						paddingTop: 15,
					}}>
					<View 
						style={{
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 21,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/623eb68d-ce27-4281-8b1b-6a69a573a585"}} 
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
								backgroundColor: "#FFFFFF",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45f3f21a-67c8-41e8-96b7-216134699718"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a3eb9a6-75a2-4f99-8849-89ead892d5b5"}} 
							resizeMode = {"stretch"}
							style={{
								height: 23,
								marginBottom: 16,
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