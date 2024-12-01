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
						marginBottom: 5,
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f6bc30a-a1fd-4ffe-88e0-a21987616283"}} 
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
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							padding: 24,
							marginTop: -11,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cb8c4ff-253d-42d6-9e98-deb71f799e75"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
								marginRight: 129,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								flex: 1,
							}}>
							{"MURT"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 37,
						marginHorizontal: 10,
					}}>
					<View 
						style={{
							borderColor: "#FFFFFF",
							borderWidth: 1,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd515e34-440f-447b-bcef-291ef1384e24"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 10,
								height: 203,
							}}
						/>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/660da0cb-bc79-4b13-8dc2-da689ed9cc2f"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 16,
							right: -266,
							borderRadius: 8,
							width: 294,
							height: 170,
						}}
					/>
				</View>
				<ScrollView 
					horizontal 
					style={{
						flexDirection: "row",
						marginBottom: 36,
						marginHorizontal: 18,
					}}>
					<View 
						style={{
							width: 140,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
							marginRight: 12,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eceffd2d-e37f-4b12-adc1-55595628138e"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
								marginHorizontal: 17,
							}}>
							{"양념 돼지 갈비"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginHorizontal: 17,
							}}>
							{"35,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 145,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
							marginRight: 12,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f743797-d04f-44a0-9f21-5375bcaa2068"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
								marginLeft: 17,
							}}>
							{"크림 빵"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginHorizontal: 17,
							}}>
							{"4,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 145,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f712ff5f-d11d-4734-985a-bd67b77b9cf9"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
								marginLeft: 18,
							}}>
							{"바베큐 소스"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginLeft: 17,
							}}>
							{"1,5000 원"}
						</Text>
					</View>
				</ScrollView>
				<ScrollView 
					horizontal 
					style={{
						flexDirection: "row",
						marginBottom: 14,
						marginHorizontal: 11,
					}}>
					<View 
						style={{
							width: 142,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
							marginRight: 12,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e320020-aace-470f-8b1f-7e2c43e35844"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
								marginLeft: 17,
							}}>
							{"계란-12알"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginHorizontal: 17,
							}}>
							{"12,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 145,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
							marginRight: 12,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a55f9ab-80e2-4f25-a20f-e4f16ed35a50"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
								marginHorizontal: 18,
							}}>
							{"바나나 우유"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginLeft: 17,
							}}>
							{"6,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 145,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e1b6978-d69c-4ff8-a7d1-1a8bae7e3e84"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
								marginLeft: 17,
							}}>
							{"모카 빵"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginLeft: 17,
							}}>
							{"3,500 원"}
						</Text>
					</View>
				</ScrollView>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 7,
					}}>
					<View 
						style={{
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 21,
							marginRight: 62,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/695b2642-804c-4d9d-90fb-f88963a5f4ed"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
								marginBottom: 17,
								marginHorizontal: 32,
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
							marginRight: 49,
						}}>
						<View 
							style={{
								backgroundColor: "#E73939",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/573960c9-55e3-4df1-8ebd-ba59633578ec"}} 
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
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 20,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e2d01b0-f726-4557-88d8-dfe83f91969c"}} 
							resizeMode = {"stretch"}
							style={{
								height: 23,
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