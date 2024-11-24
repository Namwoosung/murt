import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, } from "react-native";
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
						marginBottom: 11,
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
								marginRight: 121,
							}}
						/>
						<Text 
							style={{
								color: Colors.shadow,
								fontSize: 20,
								flex: 1,
							}}>
							{"MURT"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 41,
					}}>
					<View 
						style={{
							borderColor: Colors.surfaceContainerLowest,
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
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 10,
								height: 203,
							}}
						/>
					</View>
					<ImageBackground 
						source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {'stretch'}
						imageStyle={{borderRadius: 8,}}
						style={{
							position: "absolute",
							bottom: 16,
							right: -257,
							width: 294,
							height: 170,
							alignItems: "flex-start",
							paddingHorizontal: 8,
						}}
						>
						<View 
							style={{
								width: 18,
								height: 18,
								alignItems: "center",
								backgroundColor: "#E73939",
								borderRadius: 20,
								paddingVertical: 6,
								marginTop: 138,
							}}>
							<Text 
								style={{
									color: Colors.surfaceContainerLowest,
									fontSize: 10,
								}}>
								{"9"}
							</Text>
						</View>
					</ImageBackground>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 18,
					}}>
					<Text 
						style={{
							color: Colors.shadow,
							fontSize: FontSize.body_medium,
						}}>
						{"Perfect for you"}
					</Text>
					<Text 
						style={{
							color: "#E73939",
							fontSize: FontSize.body_small,
						}}>
						{"See more"}
					</Text>
				</View>
				<ScrollView 
					horizontal 
					style={{
						flexDirection: "row",
						marginBottom: 27,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 200,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
							paddingBottom: 16,
							marginRight: 12,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: FontSize.body_small,
								marginBottom: 8,
								marginLeft: 17,
							}}>
							{"양념 돼지 갈비"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: FontSize.body_medium,
								marginLeft: 17,
							}}>
							{"35,000 원"}
						</Text>
					</View>
					<View 
						style={{
							width: 200,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
							paddingBottom: 16,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
								marginBottom: 19,
							}}
						/>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: FontSize.body_small,
								marginBottom: 8,
								marginLeft: 17,
							}}>
							{"크림 빵"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: FontSize.body_medium,
								marginLeft: 17,
							}}>
							{"4,000 원"}
						</Text>
					</View>
				</ScrollView>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 22,
						marginHorizontal: 18,
					}}>
					<Text 
						style={{
							color: Colors.shadow,
							fontSize: FontSize.body_medium,
						}}>
						{"For this summer"}
					</Text>
					<Text 
						style={{
							color: "#E73939",
							fontSize: FontSize.body_small,
						}}>
						{"See more"}
					</Text>
				</View>
				<ScrollView 
					horizontal 
					style={{
						flexDirection: "row",
					}}>
					<View 
						style={{
							width: 200,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
							marginLeft: 15,
							marginRight: 12,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
							}}
						/>
					</View>
					<View 
						style={{
							width: 200,
							backgroundColor: "#F7F8FD",
							borderRadius: 16,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 120,
							}}
						/>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
							width: 390,
							height: 100,
							backgroundColor: Colors.surfaceContainerLowest,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 5,
							}}>
							<View 
								style={{
									width: 93,
									backgroundColor: Colors.surfaceContainerLowest,
									paddingVertical: 21,
									marginRight: 62,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										height: 24,
										marginBottom: 13,
										marginHorizontal: 32,
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
									marginRight: 49,
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
					</View>
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	)
}