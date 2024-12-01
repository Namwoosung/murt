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
				<View >
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
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/327df72c-5173-4307-ba08-dc46930dbef0"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4cad7ac-a9bb-491c-852d-80ee82097eb4"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
									marginBottom: 26,
									marginHorizontal: 24,
								}}
							/>
							<ImageBackground 
								source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59a79b3e-b617-4a28-ab08-dd8e42b5a426"}} 
								resizeMode = {'stretch'}
								style={{
									height: 234,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "flex-start",
									paddingTop: 226,
									marginHorizontal: 48,
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
					</View>
				</View>
				<View 
					style={{
						height: 485,
						backgroundColor: "#FFFFFF",
						paddingHorizontal: 25,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginTop: 24,
							marginBottom: 12,
						}}>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 18,
								marginRight: 4,
								flex: 1,
							}}>
							{"계란-12알"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5633ee26-b29b-4f9f-9d1c-a0738bab2ba8"}} 
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
						{"12,000 원"}
					</Text>
					<Text 
						style={{
							color: "#71727A",
							fontSize: 12,
							marginBottom: 66,
						}}>
						{"12개가 담겨있는 왕란"}
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ade87bbe-473b-4e3d-b6be-647d8da64d14"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b17e3c6-004f-44fa-85bd-a94e2ab7ddd9"}} 
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
			</ScrollView>
		</SafeAreaView>
	)
}