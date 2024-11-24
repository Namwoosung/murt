import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
import {Colors, FontSize, } from "../../constants";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: Colors.surfaceContainerLowest,
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: Colors.surfaceContainerLowest,
				}}>
				<View 
					style={{
						marginBottom: 4,
					}}>
					<View 
						style={{
							height: 44,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: Colors.surfaceContainerLowest,
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
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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
								fontSize: FontSize.body_medium,
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
							backgroundColor: Colors.surfaceContainerLowest,
							padding: 24,
							marginTop: -8,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
							}}
						/>
						<View 
							style={{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 20,
								marginRight: 93,
							}}>
							{"MURT"}
						</Text>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 16,
							}}
						/>
						<View 
							style={{
								width: 24,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 24,
								}}
							/>
							<View 
								style={{
									position: "absolute",
									bottom: -8,
									left: -3,
									width: 18,
									height: 18,
									backgroundColor: "#E73939",
									borderRadius: 20,
									paddingHorizontal: 7,
								}}>
								<Text 
									style={{
										color: Colors.surfaceContainerLowest,
										fontSize: 10,
										marginTop: 5,
									}}>
									{"9"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 87,
						marginHorizontal: 27,
					}}>
					<Text 
						style={{
							color: Colors.shadow,
							fontSize: 20,
						}}>
						{"Collection"}
					</Text>
					<Text 
						style={{
							color: Colors.shadow,
							fontSize: 13,
						}}>
						{"See All"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 49,
						marginHorizontal: 3,
					}}>
					<View 
						style={{
							width: 116,
							backgroundColor: "#FFEAEA",
							borderRadius: 19,
							paddingBottom: 19,
							paddingHorizontal: 8,
						}}>
						<View 
							style={{
								height: 116,
								borderRadius: 19,
								marginBottom: 14,
							}}>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 13,
								marginBottom: 12,
							}}>
							{"바디워시- A마트"}
						</Text>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 10,
							}}>
							{"25,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 116,
							backgroundColor: "#FFEAEA",
							borderRadius: 19,
							paddingBottom: 19,
						}}>
						<View 
							style={{
								height: 116,
								borderRadius: 19,
								marginBottom: 14,
							}}>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 13,
								marginBottom: 12,
								marginHorizontal: 11,
							}}>
							{"바디워시- B마트"}
						</Text>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 10,
								marginLeft: 10,
							}}>
							{"15,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 116,
							backgroundColor: "#FFEAEA",
							borderRadius: 19,
							paddingBottom: 19,
						}}>
						<View 
							style={{
								height: 116,
								borderRadius: 19,
								marginBottom: 14,
							}}>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 13,
								marginBottom: 12,
								marginHorizontal: 9,
							}}>
							{"바디워시- C마트"}
						</Text>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 10,
								marginLeft: 8,
							}}>
							{"20,000 원"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 79,
					}}>
					<View 
						style={{
							width: 116,
							backgroundColor: "#FFEAEA",
							borderRadius: 19,
							paddingBottom: 19,
						}}>
						<View 
							style={{
								height: 116,
								borderRadius: 19,
								marginBottom: 14,
							}}>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 13,
								marginBottom: 12,
								marginHorizontal: 7,
							}}>
							{"바디워시- D마트"}
						</Text>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 10,
								marginLeft: 6,
							}}>
							{"27,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 116,
							backgroundColor: "#FFEAEA",
							borderRadius: 19,
							paddingBottom: 19,
						}}>
						<View 
							style={{
								height: 116,
								borderRadius: 19,
								marginBottom: 14,
							}}>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 13,
								marginBottom: 12,
								marginHorizontal: 8,
							}}>
							{"바디워시- E마트"}
						</Text>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 10,
								marginLeft: 7,
							}}>
							{"17,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 116,
							backgroundColor: "#FFEAEA",
							borderRadius: 19,
							paddingBottom: 19,
						}}>
						<View 
							style={{
								height: 116,
								borderRadius: 19,
								marginBottom: 14,
							}}>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 13,
								marginBottom: 12,
								marginHorizontal: 8,
							}}>
							{"바디워시- F마트"}
						</Text>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 10,
								marginLeft: 7,
							}}>
							{"28,000 원"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						backgroundColor: Colors.surfaceContainerLowest,
						paddingTop: 31,
					}}>
					<View 
						style={{
							width: 93,
							backgroundColor: Colors.surfaceContainerLowest,
							paddingVertical: 21,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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
								fontSize: FontSize.body_medium,
								marginHorizontal: 21,
							}}>
							{"관심상품"}
						</Text>
					</View>
					<View 
						style={{
							width: 93,
							backgroundColor: Colors.surfaceContainerLowest,
							paddingVertical: 10,
							paddingHorizontal: 24,
						}}>
						<View 
							style={{
								backgroundColor: "#E73939",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginBottom: 16,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 22,
									marginTop: 12,
								}}
							/>
						</View>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: FontSize.body_medium,
							}}>
							{"MURT"}
						</Text>
					</View>
					<View 
						style={{
							width: 93,
							backgroundColor: Colors.surfaceContainerLowest,
							paddingVertical: 20,
							marginTop: 2,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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
								fontSize: FontSize.body_medium,
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