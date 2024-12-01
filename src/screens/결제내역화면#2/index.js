import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	const [textInput5, onChangeTextInput5] = useState('');
	const [textInput6, onChangeTextInput6] = useState('');
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
						marginBottom: 21,
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36fd6ca4-ff53-47a9-aa1d-8ee5efcd1add"}} 
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
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							paddingTop: 30,
							paddingBottom: 18,
							marginTop: -8,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
							}}>
							{"MURT"}
						</Text>
					</View>
				</View>
				<Text 
					style={{
						color: "#202020",
						fontSize: 28,
						marginBottom: 52,
						marginLeft: 31,
					}}>
					{"설정"}
				</Text>
				<ScrollView 
					horizontal 
					style={{
						flexDirection: "row",
						marginBottom: 21,
						marginHorizontal: 28,
					}}>
					<View 
						style={{
							width: 280,
							backgroundColor: "#F1F4FE",
							borderRadius: 11,
							paddingTop: 14,
							paddingBottom: 32,
							paddingHorizontal: 17,
							marginRight: 10,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 38,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e029dcf5-677a-41cd-88fe-12c123d94406"}} 
								resizeMode = {"stretch"}
								style={{
									width: 56,
									height: 34,
								}}
							/>
							<View 
								style={{
									flex: 1,
								}}>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40cd665e-105f-40d5-81a5-ef46bbfa5df5"}} 
								resizeMode = {"stretch"}
								style={{
									width: 35,
									height: 35,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 13,
							}}>
							<Text 
								style={{
									color: "#202020",
									fontSize: 12,
									marginRight: 4,
									flex: 1,
								}}>
								{"****  ****  **** "}
							</Text>
							<Text 
								style={{
									color: "#202020",
									fontSize: 12,
								}}>
								{"1579"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text 
								style={{
									color: "#202020",
									fontSize: 10,
									marginRight: 4,
									flex: 1,
								}}>
								{"Mark"}
							</Text>
							<Text 
								style={{
									color: "#202020",
									fontSize: 10,
								}}>
								{"12/22"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							width: 280,
							backgroundColor: "#F9F9F9",
							borderRadius: 11,
							paddingTop: 21,
							paddingBottom: 32,
							paddingHorizontal: 17,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1e33931-5cb9-476d-8264-31aa7eec6795"}} 
							resizeMode = {"stretch"}
							style={{
								width: 67,
								height: 21,
								marginBottom: 46,
							}}
						/>
						<Text 
							style={{
								color: "#202020",
								fontSize: 12,
								marginBottom: 13,
							}}>
							{"****  ****  **** "}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 10,
							}}>
							{"mark"}
						</Text>
					</View>
				</ScrollView>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F1F4FE",
						borderRadius: 14,
						paddingHorizontal: 18,
						marginBottom: 4,
						marginHorizontal: 27,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91aeb239-7a07-4138-bb89-3e6389e8e858"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 14,
						}}
					/>
					<View 
						style={{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
								marginBottom: 3,
							}}>
							{"April,19 2020 12:31"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 15,
							}}>
							{"계란-12알"}
						</Text>
					</View>
					<TextInput
						placeholder={"12,000 원"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#000000",
							fontSize: 17,
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F1F4FE",
						borderRadius: 14,
						paddingHorizontal: 18,
						marginBottom: 4,
						marginHorizontal: 27,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e942be1d-5475-4383-a596-04c3565d920d"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 14,
						}}
					/>
					<View 
						style={{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
								marginBottom: 3,
							}}>
							{"April,19 2020 12:31"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 15,
							}}>
							{"양념 돼지 갈비"}
						</Text>
					</View>
					<TextInput
						placeholder={"35,000 원"}
						value={textInput2}
						onChangeText={onChangeTextInput2}
						style={{
							color: "#D97474",
							fontSize: 17,
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F1F4FE",
						borderRadius: 14,
						paddingHorizontal: 18,
						marginBottom: 4,
						marginHorizontal: 27,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3524bbfb-1bd9-46ab-b484-163ccc8cf960"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 14,
						}}
					/>
					<View 
						style={{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
								marginBottom: 3,
							}}>
							{"April,19 2020 12:31"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 15,
								marginHorizontal: 1,
							}}>
							{"바베큐 소스"}
						</Text>
					</View>
					<TextInput
						placeholder={"15,000 원"}
						value={textInput3}
						onChangeText={onChangeTextInput3}
						style={{
							color: "#000000",
							fontSize: 17,
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F1F4FE",
						borderRadius: 14,
						paddingHorizontal: 18,
						marginBottom: 4,
						marginHorizontal: 27,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efd5f0dc-6cd2-43ec-ab32-3fc59da5f925"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 14,
						}}
					/>
					<View 
						style={{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
								marginBottom: 3,
							}}>
							{"April,19 2020 12:31"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 15,
								marginHorizontal: 1,
							}}>
							{"바디워시"}
						</Text>
					</View>
					<TextInput
						placeholder={"20,000 원"}
						value={textInput4}
						onChangeText={onChangeTextInput4}
						style={{
							color: "#000000",
							fontSize: 17,
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F1F4FE",
						borderRadius: 14,
						paddingHorizontal: 18,
						marginBottom: 4,
						marginHorizontal: 27,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b7727fc-0a39-4b92-b0fd-d2bfa4210d28"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 14,
						}}
					/>
					<View 
						style={{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
								marginBottom: 3,
							}}>
							{"April,19 2020 12:31"}
						</Text>
						<Text 
							style={{
								color: "#1F2024",
								fontSize: 15,
							}}>
							{"크림 빵"}
						</Text>
					</View>
					<TextInput
						placeholder={"4,000 원"}
						value={textInput5}
						onChangeText={onChangeTextInput5}
						style={{
							color: "#000000",
							fontSize: 17,
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F1F4FE",
						borderRadius: 14,
						paddingHorizontal: 18,
						marginHorizontal: 27,
					}}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab9b286f-d98c-4dd4-9b37-bbcdd419f4d0"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 14,
						}}
					/>
					<View 
						style={{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 10,
								marginBottom: 3,
							}}>
							{"April,19 2020 12:31"}
						</Text>
						<Text 
							style={{
								color: "#202020",
								fontSize: 15,
								marginHorizontal: 1,
							}}>
							{"바나나 우유"}
						</Text>
					</View>
					<TextInput
						placeholder={"6.000 원"}
						value={textInput6}
						onChangeText={onChangeTextInput6}
						style={{
							color: "#000000",
							fontSize: 17,
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						backgroundColor: "#FFFFFF",
						paddingTop: 30,
					}}>
					<View 
						style={{
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 21,
							marginTop: 3,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6860eb43-11a9-489a-a431-8b80ff88dd99"}} 
							resizeMode = {"stretch"}
							style={{
								height: 24,
								marginBottom: 13,
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
								backgroundColor: "#A8A8A8",
								borderRadius: 18,
								paddingHorizontal: 14,
								marginBottom: 16,
							}}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a19c5730-09db-4594-9298-bf0adec72bec"}} 
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
							width: 93,
							backgroundColor: "#FFFFFF",
							paddingVertical: 20,
							marginTop: 3,
						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e7a8e63-c863-4d57-8280-5b62a2889860"}} 
							resizeMode = {"stretch"}
							style={{
								height: 23,
								marginBottom: 16,
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