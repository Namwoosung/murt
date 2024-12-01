import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, ImageBackground, } from "react-native";
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
						marginBottom: 38,
					}}>
					<View 
						style={{
							height: 44,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c762138e-5036-48d2-b5b4-35adea60fda4"}} 
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
							backgroundColor: "#FFFFFF",
							padding: 24,
							marginTop: -11,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/975e21e8-4ed6-4ca4-bb98-4a6b0d93079f"}} 
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
								color: "#000000",
								fontSize: 20,
								marginRight: 85,
							}}>
							{"MURT"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bf18170-3899-4a4b-ab5a-d6dc5762f5ee"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65b345a4-308d-4456-9355-66a7bcdee6d2"}} 
								resizeMode = {"stretch"}
								style={{
									height: 24,
								}}
							/>
							<View 
								style={{
									position: "absolute",
									bottom: -11,
									left: -3,
									width: 18,
									height: 18,
									backgroundColor: "#E73939",
									borderRadius: 20,
									paddingHorizontal: 7,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
										marginTop: 5,
									}}>
									{"9"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<Text 
					style={{
						color: "#202020",
						fontSize: 28,
						marginBottom: 36,
						marginLeft: 29,
					}}>
					{"안녕하세요!"}
				</Text>
				<View 
					style={{
						backgroundColor: "#F9F9F9",
						borderRadius: 10,
						paddingVertical: 13,
						paddingHorizontal: 15,
						marginBottom: 45,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#202020",
							fontSize: 14,
							marginBottom: 3,
						}}>
						{"관심상품 바로가기"}
					</Text>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 15,
								marginRight: 4,
								flex: 1,
							}}>
							{"관심상품이 활인 중입니다. \n바로 확인하러 갑시다!"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbf643c0-3384-43d9-b705-deaa29eb774c"}} 
							resizeMode = {"stretch"}
							style={{
								width: 30,
								height: 30,
							}}
						/>
					</View>
				</View>
				<Text 
					style={{
						color: "#202020",
						fontSize: 21,
						marginBottom: 19,
						marginLeft: 25,
					}}>
					{"구매한 상품"}
				</Text>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbb5bea1-3f87-4f0b-8074-75ef768e7e61"}} 
					resizeMode = {"stretch"}
					style={{
						height: 60,
						marginBottom: 22,
						marginHorizontal: 27,
					}}
				/>
				<Text 
					style={{
						color: "#202020",
						fontSize: 21,
						marginBottom: 16,
						marginLeft: 30,
					}}>
					{"카트에 활인된 상품"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 22,
						marginHorizontal: 26,
					}}>
					<TouchableOpacity 
						style={{
							width: 86,
							alignItems: "center",
							backgroundColor: "#FFEAEA",
							borderRadius: 18,
							paddingVertical: 11,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#E73939",
								fontSize: 16,
							}}>
							{"구매하기"}
						</Text>
					</TouchableOpacity>
					<View 
						style={{
							width: 118,
						}}>
						<TouchableOpacity 
							style={{
								alignItems: "center",
								backgroundColor: "#FFEAEA",
								borderRadius: 18,
								paddingVertical: 11,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#E73939",
									fontSize: 16,
								}}>
								{"내역 확인"}
							</Text>
						</TouchableOpacity>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0373c40b-d18d-4a6b-958b-6c41aad4bd3a"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								top: -2,
								right: -4,
								width: 14,
								height: 14,
							}}
						/>
					</View>
					<TouchableOpacity 
						style={{
							width: 116,
							alignItems: "center",
							backgroundColor: "#FFEAEA",
							borderRadius: 18,
							paddingVertical: 11,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								fontSize: 16,
							}}>
							{"상품 추가"}
						</Text>
					</TouchableOpacity>
				</View>
				<Text 
					style={{
						color: "#202020",
						fontSize: 21,
						marginBottom: 13,
						marginLeft: 22,
					}}>
					{"Stories"}
				</Text>
				<View >
					<ImageBackground 
						source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53b60d06-7430-41d4-9b46-7873a9444426"}} 
						resizeMode = {'stretch'}
						imageStyle={{borderRadius: 9,}}
						style={{
							height: 175,
							paddingTop: 4,
							paddingBottom: 73,
							marginHorizontal: 21,
						}}
						>
						<View 
							style={{
								alignItems: "center",
								backgroundColor: "#08C514",
								borderRadius: 4,
								paddingVertical: 5,
								marginBottom: 49,
								marginHorizontal: 3,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 13,
								}}>
								{"Live"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/862ae9c6-a078-4398-b937-11d76d2736cd"}} 
							resizeMode = {"stretch"}
							style={{
								height: 29,
								marginHorizontal: 37,
							}}
						/>
					</ImageBackground>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1df1c90e-1681-4ed1-bfdd-d9131ff6b0b9"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 9,
							height: 175,
							marginHorizontal: 131,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ebf96b5-3eec-4fc0-b4ce-559307b8abc3"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 9,
							height: 175,
							marginHorizontal: 110,
						}}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc077c6b-c667-4277-a0d2-6bc4fce6d661"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 9,
							height: 175,
						}}
					/>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "flex-start",
							backgroundColor: "#FFFFFF",
							paddingTop: 33,
						}}>
						<View 
							style={{
								width: 93,
								backgroundColor: "#FFFFFF",
								paddingVertical: 21,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93d73849-6287-403d-a26d-8b28ee377731"}} 
								resizeMode = {"stretch"}
								style={{
									height: 24,
									marginBottom: 17,
									marginHorizontal: 33,
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
							}}>
							<View 
								style={{
									backgroundColor: "#E73939",
									borderRadius: 18,
									paddingHorizontal: 14,
									marginBottom: 8,
								}}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d745da49-05f7-4c31-b530-9f96473dd7c1"}} 
									resizeMode = {"stretch"}
									style={{
										height: 22,
										marginTop: 12,
									}}
								/>
							</View>
							<Text 
								style={{
									color: "#000000",
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5490cf74-2e41-42e6-b7d3-65010bc4bc8a"}} 
								resizeMode = {"stretch"}
								style={{
									height: 23,
									marginBottom: 19,
									marginHorizontal: 33,
								}}
							/>
							<Text 
								style={{
									color: "#A0A3B1",
									fontSize: 14,
									marginHorizontal: 21,
								}}>
								{"개인정보"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}