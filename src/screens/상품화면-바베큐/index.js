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
						backgroundColor: "#EAF2FF",
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							paddingVertical: 18,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 19,
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fec560a2-59e0-4ab7-a0dd-d2008998cad5"}} 
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
								marginBottom: 4,
								marginHorizontal: 24,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e351d8a-fd25-4366-9edb-0c20089270e3"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
									marginRight: 30,
								}}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9f5d0d4-f436-4474-8c23-dfc6afe17536"}} 
								resizeMode = {"stretch"}
								style={{
									width: 243,
									height: 254,
									marginTop: 14,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginHorizontal: 159,
							}}>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#E73939",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
							<View 
								style={{
									width: 8,
									height: 8,
									backgroundColor: "#1F2024",
									borderRadius: 24,
								}}>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							paddingVertical: 24,
							paddingHorizontal: 25,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 12,
							}}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: 18,
									marginRight: 4,
									flex: 1,
								}}>
								{"바베큐 소스"}
							</Text>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ff0c863-4f7d-441f-b4f1-1285abc9a254"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 14,
								marginBottom: 27,
							}}>
							{"15,000 원"}
						</Text>
						<Text 
							style={{
								color: "#71727A",
								fontSize: 12,
								marginBottom: 66,
							}}>
							{"어떤 고기에도 맛있는 바볘큐 소스"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 8,
							}}>
							{"Size"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 35,
							}}>
							<View 
								style={{
									width: 61,
									alignItems: "center",
									backgroundColor: "#FFEAEA",
									borderRadius: 12,
									paddingVertical: 8,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#E73939",
										fontSize: 10,
									}}>
									{"Small"}
								</Text>
							</View>
							<View 
								style={{
									width: 69,
									alignItems: "center",
									backgroundColor: "#E73939",
									borderRadius: 12,
									paddingVertical: 9,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
									}}>
									{"medium"}
								</Text>
							</View>
							<View 
								style={{
									width: 42,
									alignItems: "center",
									backgroundColor: "#FFEAEA",
									borderRadius: 12,
									paddingVertical: 8,
								}}>
								<Text 
									style={{
										color: "#E73939",
										fontSize: 10,
									}}>
									{"big"}
								</Text>
							</View>
						</View>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 12,
								marginBottom: 61,
							}}>
							{"Number"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c370b9e2-7a19-4efc-85a9-63812942ea81"}} 
							resizeMode = {"stretch"}
							style={{
								width: 71,
								height: 24,
								marginBottom: 61,
							}}
						/>
						<TouchableOpacity 
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#E73939",
								borderRadius: 12,
								paddingVertical: 18,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee050b74-0102-44fe-8ae8-b87a18d38bb3"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 9,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
								}}>
								{"Add to bag"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}