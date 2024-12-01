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
						marginBottom: 3,
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04313593-785a-4d3e-bf3d-9af0b6db4344"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/126ab1bd-885d-4ccf-85a9-b432b8ed9186"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e70d069-5078-4dec-ad01-dcb60032ed56"}} 
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef41d3d9-5d5b-46d6-b799-4d8655fb56df"}} 
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
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ea182e4-c5e0-47f2-937c-93a91306814a"}} 
					resizeMode = {"stretch"}
					style={{
						borderRadius: 5,
						height: 109,
						marginBottom: 16,
						marginHorizontal: 25,
					}}
				/>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						marginBottom: 26,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7d26850-cd7b-4d54-bfc4-a0172b964dce"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 5,
								height: 101,
								marginTop: 5,
							}}
						/>
					</View>
					<View 
						style={{
							width: 196,
							paddingHorizontal: 1,
							marginTop: 25,
						}}>
						<Text 
							style={{
								color: "#71727A",
								fontSize: 12,
								marginBottom: 11,
							}}>
							{"양념돼지 LA갈비 한돈"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 18,
								marginBottom: 13,
							}}>
							{"양념 돼지 갈비"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<TouchableOpacity 
								style={{
									width: 103,
									alignItems: "center",
									backgroundColor: "#F9F9F9",
									borderRadius: 9,
									paddingVertical: 11,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 13,
									}}>
									{"구매 내역"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									width: 86,
									alignItems: "center",
									borderColor: "#E73939",
									borderRadius: 9,
									borderWidth: 2,
									paddingVertical: 9,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#E73939",
										fontSize: 16,
									}}>
									{"장바구니"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						marginBottom: 26,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c463eeb-c6fa-4fc9-b664-95f7b54e53b2"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 5,
								height: 101,
								marginTop: 5,
							}}
						/>
					</View>
					<View 
						style={{
							width: 196,
							paddingHorizontal: 1,
							marginTop: 25,
						}}>
						<Text 
							style={{
								color: "#71727A",
								fontSize: 12,
								marginBottom: 11,
							}}>
							{"어떤 고기에도 맛있는 바볘큐 소스"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 14,
								marginBottom: 17,
							}}>
							{"바베큐 소스"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<TouchableOpacity 
								style={{
									width: 103,
									alignItems: "center",
									backgroundColor: "#F9F9F9",
									borderRadius: 9,
									paddingVertical: 11,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 13,
									}}>
									{"구매 내역"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									width: 86,
									alignItems: "center",
									borderColor: "#E73939",
									borderRadius: 9,
									borderWidth: 2,
									paddingVertical: 9,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#E73939",
										fontSize: 16,
									}}>
									{"장바구니"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						marginBottom: 51,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5409379b-9f08-4b81-99c8-03cd12ed0cf8"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 5,
								height: 101,
								marginTop: 5,
							}}
						/>
					</View>
					<View 
						style={{
							width: 104,
							paddingHorizontal: 1,
							marginTop: 24,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 12,
							}}>
							{"시원한 향의 바디워시"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 14,
								marginBottom: 17,
							}}>
							{"바디워시"}
						</Text>
						<TouchableOpacity 
							style={{
								alignItems: "center",
								backgroundColor: "#F9F9F9",
								borderRadius: 9,
								paddingVertical: 11,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
								}}>
								{"구매 내역"}
							</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity 
						style={{
							width: 86,
							alignItems: "center",
							borderColor: "#E73939",
							borderRadius: 9,
							borderWidth: 2,
							paddingVertical: 9,
							marginTop: 79,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#E73939",
								fontSize: 16,
							}}>
							{"장바구니"}
						</Text>
					</TouchableOpacity>
				</View>
				<View >
					<Text 
						style={{
							color: "#71727A",
							fontSize: 12,
							marginBottom: 11,
							marginHorizontal: 117,
						}}>
						{"크림이 가득 차있는 빵"}
					</Text>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: 18,
							marginBottom: 16,
							marginHorizontal: 164,
						}}>
						{"크림 빵"}
					</Text>
					<View >
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "flex-start",
								backgroundColor: "#FFFFFF",
								paddingTop: 31,
							}}>
							<View 
								style={{
									width: 93,
									backgroundColor: "#FFFFFF",
									paddingVertical: 21,
									marginTop: 2,
								}}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c08e607-dc91-462d-9378-8ee8d35b281a"}} 
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
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23a77329-b50c-4fca-aa34-9021ed7dae08"}} 
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
									marginTop: 2,
								}}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b99e516-aae0-4dac-b6ce-546734b72d6e"}} 
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
						<View 
							style={{
								position: "absolute",
								top: -82,
								left: 24,
								width: 129,
								height: 109,
								backgroundColor: "#FFFFFF",
								borderRadius: 9,
								paddingHorizontal: 4,
								shadowColor: "#0000001A",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 5
								},
								shadowRadius: 10,
								elevation: 10,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d04107e3-436b-4e9e-b0e2-fa6ae2cb554d"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 5,
									height: 101,
									marginTop: 5,
								}}
							/>
						</View>
						<View 
							style={{
								position: "absolute",
								top: -3,
								right: 124,
								width: 103,
								height: 30,
								backgroundColor: "#F9F9F9",
								borderRadius: 9,
								paddingHorizontal: 28,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
									marginTop: 11,
								}}>
								{"구매 내역"}
							</Text>
						</View>
						<View 
							style={{
								position: "absolute",
								top: -3,
								right: 31,
								width: 86,
								height: 30,
								borderColor: "#E73939",
								borderRadius: 9,
								borderWidth: 2,
								paddingHorizontal: 18,
							}}>
							<Text 
								style={{
									color: "#E73939",
									fontSize: 16,
									marginTop: 9,
								}}>
								{"장바구니"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}