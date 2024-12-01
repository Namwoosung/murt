import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
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
					paddingTop: 18,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 36,
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25a83274-196c-493a-8740-8a09f366504c"}} 
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
				<Text 
					style={{
						color: "#1F2024",
						fontSize: 16,
						marginBottom: 12,
						marginLeft: 33,
					}}>
					{"Sign up"}
				</Text>
				<Text 
					style={{
						color: "#71727A",
						fontSize: 12,
						marginBottom: 28,
						marginHorizontal: 33,
					}}>
					{"Create an account to get started "}
				</Text>
				<Text 
					style={{
						color: "#2E3036",
						fontSize: 12,
						marginBottom: 7,
						marginLeft: 33,
					}}>
					{"Name"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderColor: "#006FFD",
						borderRadius: 12,
						borderWidth: 1,
						paddingHorizontal: 18,
						marginBottom: 19,
						marginHorizontal: 31,
					}}>
					<TextInput
						placeholder={"Mark"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#1F2024",
							fontSize: 14,
							marginRight: 2,
							flex: 1,
							paddingVertical: 16,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54b21417-3150-42f0-9063-cf3dabee7a67"}} 
						resizeMode = {"stretch"}
						style={{
							width: 1,
							height: 16,
						}}
					/>
				</View>
				<Text 
					style={{
						color: "#2E3036",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 33,
					}}>
					{"Email Address"}
				</Text>
				<TextInput
					placeholder={"name@email.com"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={{
						color: "#8F9098",
						fontSize: 14,
						marginBottom: 20,
						marginHorizontal: 31,
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingVertical: 19,
						paddingHorizontal: 18,
					}}
				/>
				<Text 
					style={{
						color: "#2E3036",
						fontSize: 12,
						marginBottom: 7,
						marginLeft: 33,
					}}>
					{"Password"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingHorizontal: 17,
						marginBottom: 16,
						marginHorizontal: 31,
					}}>
					<TextInput
						placeholder={"Create a passaword"}
						value={textInput3}
						onChangeText={onChangeTextInput3}
						style={{
							color: "#8F9098",
							fontSize: 14,
							marginRight: 4,
							flex: 1,
							paddingVertical: 16,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cff0717-b782-4997-9d59-ad157323e657"}} 
						resizeMode = {"stretch"}
						style={{
							width: 16,
							height: 16,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingHorizontal: 17,
						marginBottom: 27,
						marginHorizontal: 31,
					}}>
					<TextInput
						placeholder={"Confirm password"}
						value={textInput4}
						onChangeText={onChangeTextInput4}
						style={{
							color: "#8F9098",
							fontSize: 14,
							marginRight: 4,
							flex: 1,
							paddingVertical: 16,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a2950a2-c68a-4562-83d8-b13c2b8ea607"}} 
						resizeMode = {"stretch"}
						style={{
							width: 16,
							height: 16,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 56,
						marginHorizontal: 31,
					}}>
					<View 
						style={{
							width: 24,
							height: 24,
							borderColor: "#C5C6CC",
							borderRadius: 6,
							borderWidth: 1,
						}}>
					</View>
					<Text 
						style={{
							fontSize: 12,
							width: 290,
						}}>
						{"I've read and agree with the Terms and Conditions and the Privacy Policy."}
					</Text>
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
								{"Q"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								{"O"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								{"S"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								{"G"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
							marginBottom: 13,
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0b335c2-ed2a-429c-8918-0b1c9a483d4b"}} 
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								{"C"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								paddingVertical: 14,
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/017948bc-e7e9-4d81-b78b-0f90ee0bafa3"}} 
								resizeMode = {"stretch"}
								style={{
									height: 32,
									marginTop: 5,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
							marginHorizontal: 3,
						}}>
						<TouchableOpacity 
							style={{
								width: 87,
								alignItems: "center",
								backgroundColor: "#C5C6CC",
								borderRadius: 5,
								paddingVertical: 16,
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
									fontSize: 16,
								}}>
								{"123"}
							</Text>
						</TouchableOpacity>
						<View 
							style={{
								width: 197,
								backgroundColor: "#FFFFFF",
								borderRadius: 5,
								paddingTop: 19,
								paddingBottom: 8,
								paddingHorizontal: 71,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 16,
								}}>
								{"space"}
							</Text>
						</View>
						<TouchableOpacity 
							style={{
								width: 87,
								alignItems: "center",
								backgroundColor: "#E73939",
								borderRadius: 5,
								paddingVertical: 17,
								shadowColor: "#0000004D",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 16,
								}}>
								{"return"}
							</Text>
						</TouchableOpacity>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 12,
							marginHorizontal: 26,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e323c962-823b-4a65-8196-e43c495921ed"}} 
							resizeMode = {"stretch"}
							style={{
								width: 26,
								height: 26,
							}}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/103876f1-46e8-4875-b601-f66509799349"}} 
							resizeMode = {"stretch"}
							style={{
								width: 15,
								height: 24,
							}}
						/>
					</View>
					<View 
						style={{
							height: 6,
							backgroundColor: "#1F2024",
							borderRadius: 3,
							marginHorizontal: 128,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}