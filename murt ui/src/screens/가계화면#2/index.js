import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
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
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 36,
						marginHorizontal: 15,
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
						marginBottom: 56,
						marginHorizontal: 60,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 4,
							height: 10,
						}}
					/>
					<View 
						style={{
							flex: 1,
						}}>
					</View>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.headline_small,
							marginRight: 48,
						}}>
						{"August 2021"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 4,
							height: 10,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 21,
						marginHorizontal: 39,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_small,
						}}>
						{"Sun"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_small,
						}}>
						{"Mon"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_small,
						}}>
						{"Tue"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_small,
						}}>
						{"Wed"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_small,
						}}>
						{"Thur"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_small,
						}}>
						{"Fri"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_small,
						}}>
						{"Sat"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 25,
						marginHorizontal: 44,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
							marginRight: 33,
						}}>
						{"1"}
					</Text>
					<View 
						style={{
							width: 28,
							alignItems: "center",
							borderColor: "#FF4343",
							borderRadius: 14,
							borderWidth: 1,
							paddingVertical: 9,
							marginRight: 32,
						}}>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: FontSize.body_medium,
							}}>
							{"2"}
						</Text>
					</View>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"3"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
							marginRight: 43,
						}}>
						{"4"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
							marginRight: 43,
						}}>
						{"5"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
							marginRight: 43,
						}}>
						{"6"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"7"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 2,
						marginHorizontal: 40,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"8"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"9"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"10"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"11"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"12"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"13"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"14"}
					</Text>
				</View>
				<View 
					style={{
						height: 6,
						backgroundColor: "#F97C1B",
						borderRadius: 5,
						marginBottom: 22,
						marginHorizontal: 142,
					}}>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 2,
						marginHorizontal: 42,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"15"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"16"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"17"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"18"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"19"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"20"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"21"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 22,
						marginHorizontal: 88,
					}}>
					<View 
						style={{
							width: 6,
							height: 6,
							backgroundColor: "#57D6C0",
							borderRadius: 5,
						}}>
					</View>
					<View 
						style={{
							width: 6,
							height: 6,
							backgroundColor: "#6663FF",
							borderRadius: 5,
						}}>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 30,
						marginHorizontal: 40,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"22"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"23"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"24"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"25"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"26"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"27"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"28"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 35,
						marginHorizontal: 42,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"29"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"30"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"31"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"1"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"2"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"3"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
						}}>
						{"4"}
					</Text>
				</View>
				<View 
					style={{
						backgroundColor: "#E73939",
						paddingTop: 10,
						paddingBottom: 45,
						marginHorizontal: 7,
					}}>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#1D1A21", "#222026"]}
						style={{
							height: 7,
							borderRadius: 15,
							marginBottom: 29,
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
							marginHorizontal: 16,
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
							marginHorizontal: 16,
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
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							height: 117,
							marginBottom: 19,
							marginHorizontal: 16,
						}}
					/>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginHorizontal: 10,
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
			</ScrollView>
		</SafeAreaView>
	)
}