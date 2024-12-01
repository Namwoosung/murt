import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fa4085a-670c-4c56-83ee-8431f062bcb1"}} 
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
						paddingHorizontal: 16,
						marginBottom: 33,
						marginHorizontal: 16,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da4ccd41-730e-4aea-90d6-57881f42f4d1"}} 
						resizeMode = {"stretch"}
						style={{
							width: 16,
							height: 16,
							marginRight: 18,
						}}
					/>
					<TextInput
						placeholder={"바디"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#1F2024",
							fontSize: 14,
							marginRight: 3,
							flex: 1,
							paddingVertical: 14,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe99922b-7dd4-45df-a424-d35c2d83e298"}} 
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08655ef4-bdd4-4a28-b0f2-09eafd6ff846"}} 
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfb0e0d2-01af-4a89-a3b9-6fc330a0fc97"}} 
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce8c5954-dce3-4a2e-8c6b-bb484f0b6cf4"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/716aa557-8b22-4202-95de-4b9abc701171"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb706dbb-e54c-4c85-be33-83f4508d0ba1"}} 
								resizeMode = {"stretch"}
								style={{
									height: 32,
									marginTop: 5,
								}}
							/>
						</View>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e38ce0f4-9244-4411-ac0e-fac5775205ca"}} 
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