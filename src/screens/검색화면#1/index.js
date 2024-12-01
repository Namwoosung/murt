import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
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
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 18,
						paddingLeft: 33,
						paddingRight: 14,
						marginBottom: 10,
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17b72328-16eb-4108-9393-517081aa3613"}} 
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
						backgroundColor: "#F7F8FD",
						borderRadius: 24,
						paddingVertical: 14,
						paddingHorizontal: 16,
						marginBottom: 33,
						marginHorizontal: 16,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4834ee90-de2b-4c47-8c66-15cfac70fd51"}} 
						resizeMode = {"stretch"}
						style={{
							width: 16,
							height: 16,
							marginRight: 17,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ac1a118-f5ce-490c-a320-8091107e0cc2"}} 
						resizeMode = {"stretch"}
						style={{
							width: 1,
							height: 16,
						}}
					/>
				</View>
				<Text 
					style={{
						color: "#71727A",
						fontSize: 10,
						marginBottom: 35,
						marginLeft: 33,
					}}>
					{"Recent searches"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 38,
						marginHorizontal: 33,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: 14,
							marginRight: 4,
							flex: 1,
						}}>
						{"양념 불고기"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21fcf3d5-657a-4709-841f-a19c90057339"}} 
						resizeMode = {"stretch"}
						style={{
							width: 11,
							height: 10,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 38,
						marginHorizontal: 33,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: 14,
							marginRight: 4,
							flex: 1,
						}}>
						{"계란"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e815b9d6-297c-426c-968a-b9ce9ad75830"}} 
						resizeMode = {"stretch"}
						style={{
							width: 11,
							height: 10,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 259,
						marginHorizontal: 33,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: 14,
							marginRight: 4,
							flex: 1,
						}}>
						{"숯"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f10baa33-c1d0-4e90-806f-4ad9c3b327db"}} 
						resizeMode = {"stretch"}
						style={{
							width: 11,
							height: 10,
						}}
					/>
				</View>
				<View 
					style={{
						backgroundColor: "#D3D5DD",
						paddingVertical: 8,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 11,
							marginHorizontal: 5,
						}}>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 12,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"Q"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"W"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"E"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"R"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"T"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"Y"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"U"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"I"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 12,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"O"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"P"}
							</Text>
						</TouchableOpacity>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 11,
							marginHorizontal: 17,
						}}>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"A"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 12,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"S"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"D"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"F"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 12,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"G"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"H"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"J"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"K"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"L"}
							</Text>
						</TouchableOpacity>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 10,
							marginHorizontal: 3,
						}}>
						<View 
							style={{
								width: 42,
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingHorizontal: 5,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81437669-8eb5-4138-a2d4-f49e8ab346d4"}} 
								resizeMode = {"stretch"}
								style={{
									height: 32,
									marginTop: 6,
								}}
							/>
						</View>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"Z"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 35,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"X"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 12,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"C"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"V"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"B"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 35,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"N"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 13,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 24,
								}}>
								{"M"}
							</Text>
						</TouchableOpacity>
						<View 
							style={{
								width: 42,
								backgroundColor: "#C5C6CC",
								borderRadius: 5,
								paddingHorizontal: 5,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d3c9990-e11d-4adc-a241-42efaeb32ad1"}} 
								resizeMode = {"stretch"}
								style={{
									height: 32,
									marginTop: 5,
								}}
							/>
						</View>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7a211d9-afd6-404f-a581-4d328e516c6b"}} 
						resizeMode = {"stretch"}
						style={{
							height: 124,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}