import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
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
				<Text 
					style={{
						color: "#1F2024",
						fontSize: FontSize.body_large,
						marginBottom: 12,
						marginLeft: 25,
					}}>
					{"Sign up"}
				</Text>
				<Text 
					style={{
						color: "#71727A",
						fontSize: FontSize.body_small,
						marginBottom: 28,
						marginHorizontal: 25,
					}}>
					{"Create an account to get started "}
				</Text>
				<Text 
					style={{
						color: "#2E3036",
						fontSize: FontSize.body_small,
						marginBottom: 7,
						marginLeft: 25,
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
						paddingVertical: 16,
						paddingHorizontal: 18,
						marginBottom: 19,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#1F2024",
							fontSize: FontSize.body_medium,
							marginRight: 2,
						}}>
						{"Mark"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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
						fontSize: FontSize.body_small,
						marginBottom: 8,
						marginLeft: 25,
					}}>
					{"Email Address"}
				</Text>
				<View 
					style={{
						borderColor: "#C5C6CC",
						borderRadius: 12,
						borderWidth: 1,
						paddingVertical: 19,
						paddingHorizontal: 18,
						marginBottom: 20,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#8F9098",
							fontSize: FontSize.body_medium,
						}}>
						{"name@email.com"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#2E3036",
						fontSize: FontSize.body_small,
						marginBottom: 7,
						marginLeft: 25,
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
						paddingVertical: 16,
						paddingHorizontal: 17,
						marginBottom: 16,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#8F9098",
							fontSize: FontSize.body_medium,
							marginRight: 4,
							flex: 1,
						}}>
						{"Create a passaword"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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
						paddingVertical: 16,
						paddingHorizontal: 17,
						marginBottom: 27,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#8F9098",
							fontSize: FontSize.body_medium,
							marginRight: 4,
							flex: 1,
						}}>
						{"Confirm password"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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
						marginHorizontal: 24,
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
							fontSize: FontSize.body_small,
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
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 13,
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
									fontSize: FontSize.headline_small,
								}}>
								{"Q"}
							</Text>
						</View>
						<View 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"W"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"E"}
							</Text>
						</View>
						<View 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"R"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"T"}
							</Text>
						</View>
						<View 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"Y"}
							</Text>
						</View>
						<View 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"U"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"I"}
							</Text>
						</View>
						<View 
							style={{
								width: 32,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 13,
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
									fontSize: FontSize.headline_small,
								}}>
								{"O"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"P"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 11,
							marginHorizontal: 17,
						}}>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"A"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 13,
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
									fontSize: FontSize.headline_small,
								}}>
								{"S"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"D"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"F"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 13,
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
									fontSize: FontSize.headline_small,
								}}>
								{"G"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"H"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"J"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"K"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"L"}
							</Text>
						</View>
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
								backgroundColor: Colors.surfaceContainerLowest,
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
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 32,
									marginTop: 6,
								}}
							/>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"Z"}
							</Text>
						</View>
						<View 
							style={{
								width: 35,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"X"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 13,
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
									fontSize: FontSize.headline_small,
								}}>
								{"C"}
							</Text>
						</View>
						<View 
							style={{
								width: 33,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"V"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"B"}
							</Text>
						</View>
						<View 
							style={{
								width: 35,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"N"}
							</Text>
						</View>
						<View 
							style={{
								width: 34,
								alignItems: "center",
								backgroundColor: Colors.surfaceContainerLowest,
								borderRadius: 5,
								paddingVertical: 14,
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
									fontSize: FontSize.headline_small,
								}}>
								{"M"}
							</Text>
						</View>
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
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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
						<View 
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
							}}>
							<Text 
								style={{
									color: "#1F2024",
									fontSize: FontSize.body_large,
								}}>
								{"123"}
							</Text>
						</View>
						<View 
							style={{
								width: 197,
								backgroundColor: Colors.surfaceContainerLowest,
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
									fontSize: FontSize.body_large,
								}}>
								{"space"}
							</Text>
						</View>
						<View 
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
							}}>
							<Text 
								style={{
									color: Colors.surfaceContainerLowest,
									fontSize: FontSize.body_large,
								}}>
								{"return"}
							</Text>
						</View>
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
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 26,
								height: 26,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
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