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
						marginBottom: 9,
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fde21330-767f-4266-bb8b-b0cff0aea88f"}} 
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
						color: "#202020",
						fontSize: 28,
						marginBottom: 8,
						marginLeft: 30,
					}}>
					{"Payment"}
				</Text>
				<View 
					style={{
						backgroundColor: "#FFEBEB",
						borderRadius: 10,
						paddingVertical: 13,
						paddingHorizontal: 17,
						marginBottom: 12,
						marginHorizontal: 27,
					}}>
					<Text 
						style={{
							color: "#202020",
							fontSize: 14,
							marginBottom: 3,
						}}>
						{"Shipping Address"}
					</Text>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
								marginRight: 4,
								flex: 1,
							}}>
							{"Magadi Main Rd, next to Prasanna Theatre, Cholourpalya, Bengaluru, Karnataka 560023"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef0ebc30-14f7-465f-a58d-a5ef1f60aad0"}} 
							resizeMode = {"stretch"}
							style={{
								width: 30,
								height: 30,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 23,
						marginHorizontal: 35,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							marginRight: 9,
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fe6f85e-37e4-4805-b403-0ebddd9ee22d"}} 
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
							flex: 1,
							alignItems: "flex-start",
							paddingHorizontal: 2,
							marginTop: 25,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 14,
							}}>
							{"왕 란- 12알"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 18,
								marginBottom: 15,
							}}>
							{"12,000 원"}
						</Text>
						<View 
							style={{
								width: 54,
								height: 25,
							}}>
							<View 
								style={{
									height: 25,
									backgroundColor: "#E5EBFC",
									borderRadius: 4,
								}}>
							</View>
							<Text 
								style={{
									position: "absolute",
									bottom: -1,
									right: 24,
									color: "#000000",
									fontSize: 14,
								}}>
								{"1"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 24,
						marginHorizontal: 37,
					}}>
					<View 
						style={{
							width: 129,
							backgroundColor: "#FFFFFF",
							borderRadius: 9,
							paddingHorizontal: 4,
							marginRight: 9,
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4619fc2e-f64b-4252-85ea-94f26785b351"}} 
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
							width: 66,
							marginTop: 25,
							marginRight: 12,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 15,
								marginHorizontal: 2,
							}}>
							{"모카 빵"}
						</Text>
						<Text 
							style={{
								color: "#F1AEAE",
								fontSize: 17,
								marginBottom: 15,
							}}>
							{"6,000 원"}
						</Text>
						<View 
							style={{
								alignItems: "center",
								backgroundColor: "#E5EBFC",
								borderRadius: 4,
								paddingTop: 11,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 14,
								}}>
								{"2"}
							</Text>
						</View>
					</View>
					<Text 
						style={{
							color: "#202020",
							fontSize: 18,
							marginTop: 50,
							flex: 1,
						}}>
						{"4,000 원"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#202020",
						fontSize: 21,
						marginBottom: 14,
						marginLeft: 31,
					}}>
					{"배송 옵션"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFEBEB",
						borderRadius: 10,
						paddingVertical: 7,
						paddingHorizontal: 12,
						marginBottom: 6,
						marginHorizontal: 26,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70271ed5-57b3-4415-95e7-242fd61da606"}} 
						resizeMode = {"stretch"}
						style={{
							width: 22,
							height: 22,
							marginRight: 10,
						}}
					/>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							marginRight: 9,
						}}>
						{"Standard"}
					</Text>
					<TouchableOpacity 
						style={{
							width: 72,
							alignItems: "center",
							backgroundColor: "#F5F8FF",
							borderRadius: 4,
							paddingVertical: 9,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#E73939",
								fontSize: 13,
							}}>
							{"5-7 일"}
						</Text>
					</TouchableOpacity>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
						}}>
						{"FREE"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFEBEB",
						borderRadius: 10,
						paddingVertical: 7,
						paddingHorizontal: 12,
						marginBottom: 10,
						marginHorizontal: 26,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3382b85c-2db8-42af-9db4-737fcc4dc83f"}} 
						resizeMode = {"stretch"}
						style={{
							width: 22,
							height: 22,
							marginRight: 11,
						}}
					/>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							marginRight: 18,
						}}>
						{"Express"}
					</Text>
					<TouchableOpacity 
						style={{
							width: 72,
							alignItems: "center",
							backgroundColor: "#F5F8FF",
							borderRadius: 4,
							paddingVertical: 9,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#E73939",
								fontSize: 13,
							}}>
							{"1-2 일"}
						</Text>
					</TouchableOpacity>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
						}}>
						{"2,000 원"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 16,
						marginHorizontal: 31,
					}}>
					{"Delivered on or before Thursday, 23 April 2020"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 14,
						marginHorizontal: 28,
					}}>
					<Text 
						style={{
							color: "#202020",
							fontSize: 21,
						}}>
						{"결제 방법"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/858adcf2-3599-4fbd-b538-58bcb3b4ac07"}} 
						resizeMode = {"stretch"}
						style={{
							width: 30,
							height: 30,
						}}
					/>
				</View>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#FFEBEB",
						borderRadius: 18,
						paddingVertical: 12,
						marginBottom: 10,
						marginHorizontal: 27,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#E73939",
							fontSize: 15,
						}}>
						{"Card"}
					</Text>
				</TouchableOpacity>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFEBEB",
						paddingVertical: 10,
						paddingHorizontal: 21,
						marginHorizontal: 2,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 20,
							marginRight: 20,
						}}>
						{"합계"}
					</Text>
					<Text 
						style={{
							color: "#202020",
							fontSize: 18,
						}}>
						{"20,000 원"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<TouchableOpacity 
						style={{
							width: 128,
							alignItems: "center",
							backgroundColor: "#E73939",
							borderRadius: 11,
							paddingVertical: 16,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#F3F3F3",
								fontSize: 16,
							}}>
							{"Pay"}
						</Text>
					</TouchableOpacity>
				</View>
				<View >
					<View 
						style={{
							height: 106,
							backgroundColor: "#FFFFFF",
						}}>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -2,
							left: 148,
							width: 93,
							height: 93,
							backgroundColor: "#FFFFFF",
							paddingHorizontal: 24,
						}}>
						<View 
							style={{
								backgroundColor: "#A8A8A8",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginTop: 10,
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e292ff55-7e58-46a7-857d-da77969f4ced"}} 
								resizeMode = {"stretch"}
								style={{
									height: 22,
									marginTop: 12,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#A8A8A8",
								fontSize: 14,
							}}>
							{"MURT"}
						</Text>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: -2,
							left: 0,
							width: 93,
							height: 93,
							backgroundColor: "#FFFFFF",
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ec5794b-0df6-400c-a52b-5724e0222707"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
								marginTop: 21,
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
							position: "absolute",
							bottom: -2,
							right: -1,
							width: 93,
							height: 93,
							backgroundColor: "#FFFFFF",
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5620402-70c0-43ca-b41d-bcfb5e8cbfee"}} 
							resizeMode = {"stretch"}
							style={{
								height: 23,
								marginTop: 20,
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