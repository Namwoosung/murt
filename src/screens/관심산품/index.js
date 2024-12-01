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
						marginBottom: 2,
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abe13d2b-888e-45c6-b32d-ed840b84b87a"}} 
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
							paddingVertical: 24,
							paddingHorizontal: 173,
						}}>
						<View >
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce85f4d7-a779-4510-82ce-c5d6f1f21516"}} 
								resizeMode = {"stretch"}
								style={{
									height: 20,
									marginHorizontal: 12,
								}}
							/>
							<Text 
								style={{
									color: "#000000",
									fontSize: 20,
									marginTop: -14,
								}}>
								{"MURT"}
							</Text>
						</View>
					</View>
					<Text 
						style={{
							color: "#202020",
							fontSize: 28,
							marginLeft: 28,
						}}>
						{"Wishlist"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#202020",
						fontSize: 21,
						marginBottom: 19,
						marginLeft: 22,
					}}>
					{"Recently viewed"}
				</Text>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36b920cb-83ac-4e3a-b816-f3db594c3f6f"}} 
					resizeMode = {"stretch"}
					style={{
						height: 60,
						marginBottom: 29,
						marginHorizontal: 20,
					}}
				/>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 14,
						marginHorizontal: 27,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							marginRight: 11,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0187b26-3375-48e5-878e-1b2cccbc2ea5"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 5,
								height: 101,
								marginTop: 5,
							}}
						/>
					</View>
					<View 
						style={{
							flex: 1,
							marginTop: 25,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 14,
							}}>
							{"왕 란- 12알"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 18,
							}}>
							{"12,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 21,
							marginTop: 84,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/647d4dcd-3a8f-478d-bee3-cc321366defa"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9e9a2e7-4473-4ff3-82bb-e8e956394cd4"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: -1,
								left: -8,
								width: 18,
								height: 18,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 14,
						marginHorizontal: 27,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							marginRight: 10,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4aacd770-c875-45f7-83b6-3f32ab1b82ab"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 5,
								height: 101,
								marginTop: 5,
							}}
						/>
					</View>
					<View 
						style={{
							width: 65,
							marginTop: 25,
							marginRight: 12,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 15,
								marginHorizontal: 1,
							}}>
							{"모카 빵"}
						</Text>
						<Text 
							style={{
								color: "#F1AEAE",
								fontSize: 17,
							}}>
							{"6,000 원"}
						</Text>
					</View>
					<View 
						style={{
							flex: 1,
							marginTop: 50,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#202020",
								fontSize: 18,
								marginBottom: 26,
							}}>
							{"4,000 원"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginLeft: 3,
							}}>
							{"M"}
						</Text>
					</View>
					<View 
						style={{
							width: 21,
							marginTop: 84,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64a907c5-cbd1-4641-bfa3-f69218f75a4f"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd8c2cab-0e31-4f52-92f6-f18f1744685b"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: -1,
								left: -8,
								width: 18,
								height: 18,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 14,
						marginHorizontal: 27,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							marginRight: 11,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0259c09-692b-4f53-9991-2833cdac3676"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 5,
								height: 101,
								marginTop: 5,
							}}
						/>
					</View>
					<View 
						style={{
							flex: 1,
							marginTop: 30,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 9,
								marginLeft: 1,
							}}>
							{"LA갈비"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 18,
							}}>
							{"35,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 21,
							marginTop: 84,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f71e18f3-bf25-4ffa-8351-6be67c985bb9"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68309ff7-f013-471f-993f-358c76f4c4d6"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: -1,
								left: -8,
								width: 18,
								height: 18,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 4,
						marginHorizontal: 27,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							marginRight: 11,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36af2596-daa1-46af-9db4-5215fa35791e"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 5,
								height: 101,
								marginTop: 5,
							}}
						/>
					</View>
					<View 
						style={{
							flex: 1,
							marginTop: 25,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 14,
							}}>
							{"매운 바베큐 소스"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 18,
								marginBottom: 27,
							}}>
							{"20,000 원"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginLeft: 23,
							}}>
							{"1"}
						</Text>
					</View>
					<View 
						style={{
							width: 21,
							marginTop: 84,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16cf1b98-ba69-46aa-8c36-424e671f4d26"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/545077a9-b8b7-4ea3-83ee-a5e9854e1ca5"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: -1,
								left: -8,
								width: 18,
								height: 18,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						backgroundColor: "#FFFFFF",
						paddingTop: 33,
					}}>
					<View 
						style={{
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 21,
							marginRight: 63,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90e33a70-cfab-4aa6-b16d-13e9b7f0643d"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
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
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 10,
							paddingHorizontal: 24,
							marginRight: 48,
						}}>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7330958-e8fc-4130-8038-703b883ccbbc"}} 
								resizeMode = {"stretch"}
								style={{
									height: 22,
									marginTop: 12,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#A0A3B1",
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4db82f06-a9d8-4987-b6d2-a3ff4aa04189"}} 
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