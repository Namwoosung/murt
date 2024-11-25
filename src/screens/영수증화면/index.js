import React from "react";
import { SafeAreaView, View, ScrollView, Image, ImageBackground, Text, } from "react-native";
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
						backgroundColor: "#DB0000",
						paddingVertical: 56,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							height: 43,
							marginBottom: 36,
							marginHorizontal: 168,
						}}
					/>
					<View 
						style={{
							marginHorizontal: 22,
						}}>
						<ImageBackground 
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {'stretch'}
							style={{
								height: 648,
								paddingTop: 57,
								paddingBottom: 6,
							}}
							>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 40,
									marginBottom: 22,
									marginHorizontal: 149,
								}}
							/>
							<Text 
								style={{
									color: "#DB0000",
									fontSize: 20,
									marginBottom: 17,
									marginHorizontal: 131,
								}}>
								{"결제 성공"}
							</Text>
							<Text 
								style={{
									color: "#242424",
									fontSize: FontSize.body_large,
									marginBottom: 16,
									marginHorizontal: 60,
								}}>
								{"승인 코드: 20220515KENIDO"}
							</Text>
							<Text 
								style={{
									color: "#242424",
									fontSize: FontSize.body_large,
									marginBottom: 32,
									marginHorizontal: 62,
								}}>
								{"2024년 11월 11일 11시 11분"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "flex-start",
									marginBottom: 31,
									marginHorizontal: 24,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 73,
										height: 60,
										marginTop: 2,
									}}
								/>
								<View 
									style={{
										width: 66,
									}}>
									<Text 
										style={{
											color: "#242424",
											fontSize: FontSize.body_large,
											marginBottom: 14,
										}}>
										{"계란 * 2"}
									</Text>
									<Text 
										style={{
											color: "#242424",
											fontSize: FontSize.body_large,
										}}>
										{"8,000 * 2"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "flex-start",
									marginBottom: 26,
									marginHorizontal: 23,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 64,
										height: 60,
										marginTop: 5,
									}}
								/>
								<View 
									style={{
										width: 67,
									}}>
									<Text 
										style={{
											color: "#242424",
											fontSize: FontSize.body_large,
											marginBottom: 13,
										}}>
										{"우유  * 2"}
									</Text>
									<Text 
										style={{
											color: "#242424",
											fontSize: FontSize.body_large,
										}}>
										{"4,500 * 2"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 17,
									marginHorizontal: 24,
								}}>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: FontSize.body_large,
									}}>
									{"부가세"}
								</Text>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: FontSize.body_large,
									}}>
									{"1,784 원"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 5,
									marginHorizontal: 19,
								}}>
								<Text 
									style={{
										color: "#242424",
										fontSize: FontSize.body_large,
									}}>
									{"합계"}
								</Text>
								<Text 
									style={{
										color: "#242424",
										fontSize: FontSize.body_large,
									}}>
									{"25,000 원"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 24,
									marginHorizontal: 18,
								}}>
								<View 
									style={{
										width: 107,
									}}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 107,
										}}
									/>
									<View 
										style={{
											position: "absolute",
											bottom: -21,
											right: 0,
											width: 108,
											height: 21,
											backgroundColor: "#F9F9F9",
											borderColor: "#DB000000",
											borderWidth: 1,
											paddingHorizontal: 21,
										}}>
										<Text 
											style={{
												color: "#242424",
												fontSize: 9,
												marginTop: 8,
											}}>
											{"Verified By Murt"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										width: 24,
									}}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 24,
											marginBottom: 24,
										}}
									/>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 24,
											marginBottom: 24,
										}}
									/>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 24,
										}}
									/>
								</View>
								<View 
									style={{
										width: 24,
									}}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 24,
											marginBottom: 24,
										}}
									/>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 24,
											marginBottom: 24,
										}}
									/>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 24,
										}}
									/>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginHorizontal: 18,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 24,
										height: 24,
									}}
								/>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 24,
										height: 24,
									}}
								/>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 24,
										height: 24,
									}}
								/>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 24,
										height: 24,
									}}
								/>
							</View>
						</ImageBackground>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 648,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}