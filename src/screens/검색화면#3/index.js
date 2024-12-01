import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Text style={styles.text2}>
						{"􀙇"}
					</Text>
					<Text style={styles.text3}>
						{"􀛨"}
					</Text>
				</View>
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<TextInput
						placeholder={"바디워시"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={styles.input}
					/>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
				</View>
				<Text style={styles.text4}>
					{"Recent searches"}
				</Text>
				<View style={styles.row3}>
					<Text style={styles.text5}>
						{"양념 불고기"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
				</View>
				<View style={styles.row3}>
					<Text style={styles.text5}>
						{"계란"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
				</View>
				<View style={styles.row4}>
					<Text style={styles.text5}>
						{"숯"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.row5}>
						<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"Q"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"W"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"E"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"R"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"T"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"Y"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"U"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"I"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button4} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"O"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"P"}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row6}>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"A"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"S"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"D"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"F"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"G"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"H"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"J"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"K"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"L"}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row7}>
						<View style={styles.view}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
						</View>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"Z"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button6} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"X"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button7} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"C"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"V"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"B"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button6} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"N"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text6}>
								{"M"}
							</Text>
						</TouchableOpacity>
						<View style={styles.view2}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
						</View>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image7}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
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
	},
	button2: {
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
	},
	button3: {
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
	},
	button4: {
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
	},
	button5: {
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
	},
	button6: {
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
	},
	button7: {
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
	},
	column: {
		backgroundColor: "#D3D5DD",
		paddingVertical: 8,
	},
	image: {
		width: 17,
		height: 10,
		marginRight: 5,
	},
	image2: {
		width: 16,
		height: 16,
		marginRight: 18,
	},
	image3: {
		width: 1,
		height: 16,
	},
	image4: {
		width: 11,
		height: 10,
	},
	image5: {
		height: 32,
		marginTop: 6,
	},
	image6: {
		height: 32,
		marginTop: 5,
	},
	image7: {
		height: 124,
	},
	input: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 3,
		flex: 1,
		paddingVertical: 14,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 18,
		paddingLeft: 33,
		paddingRight: 14,
		marginBottom: 10,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F7F8FD",
		borderRadius: 24,
		paddingHorizontal: 16,
		marginBottom: 33,
		marginHorizontal: 16,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 38,
		marginHorizontal: 33,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 259,
		marginHorizontal: 33,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 11,
		marginHorizontal: 5,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 11,
		marginHorizontal: 17,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
		marginHorizontal: 3,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	text: {
		color: "#1F2024",
		fontSize: 15,
		marginRight: 4,
		flex: 1,
	},
	text2: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 6,
	},
	text3: {
		color: "#1F2024",
		fontSize: 17,
	},
	text4: {
		color: "#71727A",
		fontSize: 10,
		marginBottom: 35,
		marginLeft: 33,
	},
	text5: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
	},
	text6: {
		color: "#1F2024",
		fontSize: 24,
	},
	view: {
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
	},
	view2: {
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
	},
});