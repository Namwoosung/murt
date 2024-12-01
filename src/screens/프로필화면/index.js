import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, TextInput, } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
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
						marginBottom: 22,
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbc8ae0c-6a81-482e-9343-c1c1a4a90443"}} 
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
						color: "#000000",
						fontSize: 20,
						marginBottom: 20,
						marginHorizontal: 173,
					}}>
					{"MURT"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 6,
						marginHorizontal: 11,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6df05709-6a2c-4a46-b577-50d1581ebe00"}} 
						resizeMode = {"stretch"}
						style={{
							width: 105,
							height: 105,
							marginRight: 16,
						}}
					/>
					<View 
						style={{
							flex: 1,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								marginBottom: 14,
								marginHorizontal: 2,
							}}>
							{"Mark님"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginBottom: 11,
								marginHorizontal: 1,
							}}>
							{"수원시, 영통구"}
						</Text>
						<TouchableOpacity onPress={()=>alert('Pressed!')}>
							<LinearGradient 
								start={{x:0, y:0}}
								end={{x:0, y:1}}
								colors={["#FFB4B4", "#FFFFFF"]}
								style={{
									alignItems: "center",
									borderRadius: 32,
									paddingVertical: 8,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"지도 확인"}
								</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 40,
						marginHorizontal: 21,
					}}>
					<View 
						style={{
							width: 104,
							backgroundColor: "#FFEAEA",
							borderRadius: 10,
							paddingTop: 12,
							paddingBottom: 26,
							paddingHorizontal: 15,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 12,
							}}>
							{"회원 정보"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
							}}>
							{"수정하기"}
						</Text>
					</View>
					<View 
						style={{
							width: 104,
							backgroundColor: "#FFEAEA",
							borderRadius: 10,
							paddingTop: 12,
							paddingBottom: 26,
							paddingHorizontal: 16,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 12,
							}}>
							{"결제 정보"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
							}}>
							{"수정하기"}
						</Text>
					</View>
					<View 
						style={{
							width: 104,
							backgroundColor: "#FFEAEA",
							borderRadius: 10,
							paddingTop: 12,
							paddingBottom: 26,
							paddingHorizontal: 16,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 12,
							}}>
							{"주소 정보"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
							}}>
							{"수정하기"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 45,
						marginHorizontal: 19,
					}}>
					<View 
						style={{
							width: 166,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFEAEA",
							borderRadius: 10,
							paddingHorizontal: 20,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 0
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1437c406-f2f4-4950-9e24-74f4d04ebce8"}} 
							resizeMode = {"stretch"}
							style={{
								width: 18,
								height: 16,
								marginRight: 15,
							}}
						/>
						<TextInput
							placeholder={"관심상품"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={{
								color: "#000000",
								fontSize: 14,
								flex: 1,
								paddingVertical: 46,
							}}
						/>
					</View>
					<View 
						style={{
							width: 166,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFEAEA",
							borderRadius: 10,
							paddingHorizontal: 20,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 0
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c79ea0d-37e2-411f-8a29-a64d2c71e75f"}} 
							resizeMode = {"stretch"}
							style={{
								width: 19,
								height: 19,
								marginRight: 16,
							}}
						/>
						<TextInput
							placeholder={"최근 기록"}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={{
								color: "#000000",
								fontSize: 14,
								flex: 1,
								paddingVertical: 45,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						paddingTop: 18,
						paddingBottom: 51,
						paddingHorizontal: 20,
						marginBottom: 51,
						marginHorizontal: 16,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 17,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginRight: 4,
								flex: 1,
							}}>
							{"가계부"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7b2371a-dd1a-4125-8a73-29e79e629b3d"}} 
							resizeMode = {"stretch"}
							style={{
								width: 4,
								height: 9,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<View 
							style={{
								width: 90,
								backgroundColor: "#FFEAEA",
								borderColor: "#FFB4B4",
								borderRadius: 10,
								borderWidth: 1,
								paddingVertical: 13,
								paddingHorizontal: 16,
								marginRight: 10,
							}}>
							<Text 
								style={{
									color: "#E73939",
									fontSize: 10,
									marginBottom: 52,
								}}>
								{"첫날"}
							</Text>
							<Text 
								style={{
									color: "#223D50",
									fontSize: 12,
									marginBottom: 4,
								}}>
								{"고시"}
							</Text>
							<Text 
								style={{
									color: "#223D50",
									fontSize: 10,
								}}>
								{"50,000 원"}
							</Text>
						</View>
						<View 
							style={{
								width: 90,
								backgroundColor: "#FFEAEA",
								borderColor: "#FFB4B4",
								borderRadius: 10,
								borderWidth: 1,
								paddingVertical: 13,
								paddingHorizontal: 16,
								marginRight: 10,
							}}>
							<Text 
								style={{
									color: "#E73939",
									fontSize: 10,
									marginBottom: 52,
								}}>
								{"이튿날"}
							</Text>
							<Text 
								style={{
									color: "#223D50",
									fontSize: 12,
									marginBottom: 4,
								}}>
								{"과일"}
							</Text>
							<Text 
								style={{
									color: "#223D50",
									fontSize: 10,
								}}>
								{"75,000 원"}
							</Text>
						</View>
						<View 
							style={{
								width: 90,
								backgroundColor: "#FFEAEA",
								borderColor: "#FFB4B4",
								borderRadius: 10,
								borderWidth: 1,
								paddingVertical: 13,
								paddingHorizontal: 16,
							}}>
							<Text 
								style={{
									color: "#E73939",
									fontSize: 10,
									marginBottom: 52,
								}}>
								{"사흘째"}
							</Text>
							<Text 
								style={{
									color: "#223D50",
									fontSize: 12,
									marginBottom: 4,
								}}>
								{"야채"}
							</Text>
							<Text 
								style={{
									color: "#223D50",
									fontSize: 10,
								}}>
								{"35,000 원"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 7,
					}}>
					<View 
						style={{
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 21,
							marginRight: 62,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba6f07f8-8a90-48f6-94ba-cc94dee3a91c"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
								marginBottom: 17,
								marginHorizontal: 32,
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
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 10,
							paddingHorizontal: 24,
							marginRight: 49,
						}}>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/790da0bb-ea23-4e6d-89fe-db17a8d9066f"}} 
								resizeMode = {"stretch"}
								style={{
									height: 22,
									marginTop: 12,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#A0A3B1",
								fontSize: 14,
							}}>
							{"MURT"}
						</Text>
					</View>
					<View 
						style={{
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 20,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c098f917-fc70-4c3f-be51-fabfee963de7"}} 
							resizeMode = {"stretch"}
							style={{
								height: 23,
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
			</ScrollView>
		</SafeAreaView>
	)
}