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
				}}>
				<View 
					style={{
						marginBottom: 21,
					}}>
					<View 
						style={{
							height: 44,
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75e38c9a-e20e-478c-a418-aa3b16c38593"}} 
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
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							paddingTop: 30,
							paddingBottom: 18,
							marginTop: -8,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
							}}>
							{"MURT"}
						</Text>
					</View>
				</View>
				<Text 
					style={{
						color: "#202020",
						fontSize: 28,
						marginBottom: 41,
						marginLeft: 31,
					}}>
					{"설정"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 370,
						marginHorizontal: 27,
					}}>
					<View 
						style={{
							width: 280,
							backgroundColor: "#F1F4FE",
							borderRadius: 11,
							paddingTop: 14,
							paddingBottom: 32,
							paddingHorizontal: 17,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 38,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b564c655-9894-4188-a1b2-5917fda49677"}} 
								resizeMode = {"stretch"}
								style={{
									width: 56,
									height: 34,
								}}
							/>
							<View 
								style={{
									flex: 1,
								}}>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e0d2e7f-d087-490b-a015-133b761311e1"}} 
								resizeMode = {"stretch"}
								style={{
									width: 35,
									height: 35,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 13,
							}}>
							<Text 
								style={{
									color: "#202020",
									fontSize: 12,
									marginRight: 4,
									flex: 1,
								}}>
								{"****  ****  **** "}
							</Text>
							<Text 
								style={{
									color: "#202020",
									fontSize: 12,
								}}>
								{"1579"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text 
								style={{
									color: "#202020",
									fontSize: 10,
									marginRight: 4,
									flex: 1,
								}}>
								{"Mark"}
							</Text>
							<Text 
								style={{
									color: "#202020",
									fontSize: 10,
								}}>
								{"12/22"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							width: 45,
							backgroundColor: "#E73939",
							borderRadius: 11,
							paddingHorizontal: 18,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2243ce5-e98c-4073-9026-80d0f860a376"}} 
							resizeMode = {"stretch"}
							style={{
								height: 11,
								marginTop: 69,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						backgroundColor: "#FFFFFF",
						paddingTop: 30,
					}}>
					<View 
						style={{
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 21,
							marginTop: 3,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8452520-e7c6-4c57-96c1-0c4a3e11e7f3"}} 
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
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a637f929-d79c-4389-8b4a-8cb8f7c123ea"}} 
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
							marginTop: 3,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/716b05ae-c45d-46c8-bd49-f5a24ddd5b8d"}} 
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
			</ScrollView>
		</SafeAreaView>
	)
}