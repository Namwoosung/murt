import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
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
					paddingTop: 22,
					paddingRight: 7,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 36,
						marginLeft: 33,
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
						marginLeft: 8,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.headline_small,
							marginHorizontal: 120,
						}}>
						{"August 2021"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 4,
							height: 10,
							marginHorizontal: 52,
						}}
					/>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							height: 10,
							marginBottom: 9,
							marginHorizontal: 68,
						}}
					/>
					<View 
						style={{
							backgroundColor: "#E73939",
							paddingTop: 10,
							paddingBottom: 356,
							marginTop: -1,
						}}>
						<LinearGradient 
							start={{x:0, y:0}}
							end={{x:0, y:1}}
							colors={["#1D1A21", "#222026"]}
							style={{
								height: 7,
								borderRadius: 15,
								marginBottom: 49,
								marginHorizontal: 132,
							}}>
						</LinearGradient>
						<View 
							style={{
								backgroundColor: "#FFEAEA",
								borderRadius: 15,
								paddingTop: 14,
								paddingBottom: 27,
								paddingRight: 8,
								marginBottom: 8,
								marginHorizontal: 15,
								shadowColor: "#00000040",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 11
								},
								shadowRadius: 20,
								elevation: 20,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 7,
									marginLeft: 8,
								}}>
								<View 
									style={{
										width: 10,
										height: 10,
										backgroundColor: "#F97C1B",
										borderRadius: 5,
										marginRight: 12,
									}}>
								</View>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: 18,
									}}>
									{"음료수"}
								</Text>
								<View 
									style={{
										flex: 1,
										alignSelf: "stretch",
									}}>
								</View>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: 18,
									}}>
									{"60,000 원"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginLeft: 36,
								}}>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: FontSize.body_medium,
									}}>
									{"Manual"}
								</Text>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: FontSize.body_medium,
									}}>
									{"Aug 12"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#FFEAEA",
								borderRadius: 15,
								paddingTop: 14,
								paddingBottom: 27,
								paddingRight: 8,
								marginBottom: 8,
								marginHorizontal: 15,
								shadowColor: "#00000040",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 11
								},
								shadowRadius: 20,
								elevation: 20,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 6,
									marginLeft: 8,
								}}>
								<View 
									style={{
										width: 10,
										height: 10,
										backgroundColor: "#57D6C0",
										borderRadius: 5,
										marginRight: 10,
									}}>
								</View>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: 18,
									}}>
									{"식사"}
								</Text>
								<View 
									style={{
										flex: 1,
										alignSelf: "stretch",
									}}>
								</View>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: 18,
									}}>
									{"160,000 원"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginLeft: 27,
								}}>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: FontSize.body_medium,
										marginRight: 4,
										flex: 1,
									}}>
									{"Manual"}
								</Text>
								<Text 
									style={{
										color: Colors.shadow,
										fontSize: FontSize.body_medium,
									}}>
									{"Due Aug 20"}
								</Text>
							</View>
						</View>
						<ImageBackground 
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {'stretch'}
							style={{
								height: 117,
								flexDirection: "row",
								paddingTop: 34,
								paddingBottom: 68,
								paddingHorizontal: 17,
								marginBottom: 19,
								marginHorizontal: 15,
							}}
							>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_medium,
									marginRight: 4,
									flex: 1,
								}}>
								{"29"}
							</Text>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_medium,
									marginRight: 35,
								}}>
								{"30"}
							</Text>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_medium,
									marginRight: 41,
								}}>
								{"31"}
							</Text>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_medium,
									marginRight: 46,
								}}>
								{"1"}
							</Text>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_medium,
									marginRight: 43,
								}}>
								{"2"}
							</Text>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_medium,
									marginRight: 42,
								}}>
								{"3"}
							</Text>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_medium,
									marginTop: 1,
								}}>
								{"4"}
							</Text>
						</ImageBackground>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginHorizontal: 9,
							}}>
							<Text 
								style={{
									color: Colors.shadow,
									fontSize: FontSize.body_medium,
								}}>
								{"합계"}
							</Text>
							<Text 
								style={{
									color: Colors.shadow,
									fontSize: 18,
								}}>
								{"420,000 원"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}