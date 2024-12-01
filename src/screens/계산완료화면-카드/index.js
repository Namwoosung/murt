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
					paddingTop: 42,
					paddingHorizontal: 7,
				}}>
				<View >
					<View >
						<View 
							style={{
								height: 712,
								backgroundColor: "#E7E8EB",
							}}>
						</View>
						<View 
							style={{
								position: "absolute",
								top: -42,
								left: -7,
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cb7fe6a-35ff-4689-9479-eee86c1d41ee"}} 
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
						<View 
							style={{
								position: "absolute",
								bottom: -10,
								right: 0,
								left: 0,
								height: 306,
								backgroundColor: "#FFFFFF",
							}}>
							<View 
								style={{
									backgroundColor: "#F8FAFF",
									paddingVertical: 33,
									paddingHorizontal: 22,
									marginTop: 4,
									marginBottom: 24,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 22,
									}}>
									{"Payment Methods"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginHorizontal: 13,
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
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b423be87-6482-42e2-b3a7-073db747aac2"}} 
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
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8ee8ab8-b275-4947-9a8c-be2dd81bab63"}} 
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
											{"MARK"}
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
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd044c46-2f40-4b9e-83be-89d5288be3c8"}} 
										resizeMode = {"stretch"}
										style={{
											height: 11,
											marginTop: 69,
										}}
									/>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -91,
							left: -7,
							width: 390,
							height: 106,
						}}>
						<View 
							style={{
								height: 106,
								backgroundColor: "#FFFFFF",
							}}>
						</View>
						<View 
							style={{
								position: "absolute",
								top: -60,
								right: 2,
								width: 375,
								height: 60,
								backgroundColor: "#FFEBEB",
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63f65981-6044-4a75-b5a7-59c49be929d7"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e7266ca-5b52-4b2c-9ced-9e3b0d982970"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d58346f4-755a-4563-9235-7dee075bb5f6"}} 
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