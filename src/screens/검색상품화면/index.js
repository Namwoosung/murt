import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row}>
						<Text style={styles.text}>
							{"9:41"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1668497d-25ad-4481-a5bc-6c226e15e4b8"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5b632df-fd00-42de-b4ab-15232c01061e"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<View style={styles.box}>
						</View>
						<Text style={styles.text4}>
							{"MURT"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbc80b72-b4fe-4808-8377-f7ebd3d0ab35"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.column2}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ec05bc8-870a-4531-972d-e368d4668fcb"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
							<View style={styles.absoluteView}>
								<Text style={styles.text5}>
									{"9"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.column3}>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b174bdb-a42f-48ce-b58e-915fa0163d8a"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d66e2057-0a73-40ac-800d-0062236a0fc9"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<TextInput
							placeholder={"바디워시"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
					</View>
				</View>
				<View style={styles.row4}>
					<View style={styles.column4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0851270-b9ae-4faa-a7e7-00bcd68f258e"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text6}>
							{"바디워시"}
						</Text>
						<Text style={styles.text7}>
							{"20,000 원"}
						</Text>
					</View>
					<View style={styles.column4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d2a92ab-cfc6-40c3-b9c0-9abe1972c612"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text6}>
							{"바디워시"}
						</Text>
						<Text style={styles.text7}>
							{"22,000 원"}
						</Text>
					</View>
				</View>
				<View style={styles.row5}>
					<View style={styles.column4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e996814-e5a9-406f-a4b9-7677db44e1fd"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text6}>
							{"바디워시"}
						</Text>
						<Text style={styles.text7}>
							{"15,000 원"}
						</Text>
					</View>
					<View style={styles.column4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/012e750e-7807-46db-9ce0-4beca9f34fa8"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text6}>
							{"바디워시"}
						</Text>
						<Text style={styles.text7}>
							{"23,000 원"}
						</Text>
					</View>
				</View>
				<View >
					<View style={styles.view2}>
						<View style={styles.column5}>
							<View style={styles.view3}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/196553dd-6792-46ad-a2b0-dac89a9c2206"}} 
									resizeMode = {"stretch"}
									style={styles.image8}
								/>
							</View>
							<Text style={styles.text8}>
								{"MURT"}
							</Text>
						</View>
					</View>
					<View style={styles.absoluteColumn}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffcbe754-0728-4765-85d3-bd63e32a92bf"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Text style={styles.text9}>
							{"개인정보"}
						</Text>
					</View>
					<View style={styles.absoluteColumn2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76e68857-e4b3-4b89-b3cc-dbe19eeb5d90"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Text style={styles.text9}>
							{"관심상품"}
						</Text>
					</View>
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
	absoluteColumn: {
		position: "absolute",
		bottom: -1,
		right: 0,
		width: 93,
		height: 93,
		backgroundColor: "#FFFFFF",
	},
	absoluteColumn2: {
		position: "absolute",
		bottom: -2,
		left: 0,
		width: 93,
		height: 93,
		backgroundColor: "#FFFFFF",
	},
	absoluteView: {
		position: "absolute",
		bottom: -11,
		left: -3,
		width: 18,
		height: 18,
		backgroundColor: "#E73939",
		borderRadius: 20,
		paddingHorizontal: 7,
	},
	box: {
		flex: 1,
		alignSelf: "stretch",
	},
	column: {
		marginBottom: 100,
	},
	column2: {
		width: 24,
	},
	column3: {
		marginBottom: 29,
		marginHorizontal: 16,
	},
	column4: {
		width: 173,
		backgroundColor: "#F7F8FD",
		borderRadius: 16,
		paddingBottom: 16,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 10,
		paddingHorizontal: 24,
		marginTop: 33,
	},
	image: {
		width: 17,
		height: 10,
		marginRight: 5,
	},
	image2: {
		width: 20,
		height: 20,
	},
	image3: {
		width: 24,
		height: 24,
		marginRight: 16,
	},
	image4: {
		height: 24,
	},
	image5: {
		width: 12,
		height: 12,
		marginTop: 12,
	},
	image6: {
		width: 16,
		height: 16,
		marginRight: 18,
	},
	image7: {
		height: 120,
		marginBottom: 18,
	},
	image8: {
		height: 22,
		marginTop: 12,
	},
	image9: {
		height: 23,
		marginTop: 20,
		marginBottom: 19,
		marginHorizontal: 33,
	},
	image10: {
		height: 24,
		marginTop: 21,
		marginBottom: 17,
		marginHorizontal: 33,
	},
	input: {
		color: "#1F2024",
		fontSize: 14,
		flex: 1,
		paddingVertical: 16,
	},
	row: {
		height: 44,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 18,
		paddingLeft: 33,
		paddingRight: 14,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		padding: 24,
		marginTop: -11,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F7F8FD",
		borderRadius: 24,
		paddingHorizontal: 16,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
		marginHorizontal: 14,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 51,
		marginHorizontal: 14,
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
		color: "#000000",
		fontSize: 20,
		marginRight: 85,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 10,
		marginTop: 5,
	},
	text6: {
		color: "#1F2024",
		fontSize: 12,
		marginBottom: 9,
		marginLeft: 18,
	},
	text7: {
		color: "#1F2024",
		fontSize: 14,
		marginLeft: 17,
	},
	text8: {
		color: "#000000",
		fontSize: 14,
	},
	text9: {
		color: "#A0A3B1",
		fontSize: 14,
		marginHorizontal: 21,
	},
	view: {
		borderColor: "#C5C6CC",
		borderRadius: 12,
		borderWidth: 1,
		paddingHorizontal: 12,
	},
	view2: {
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 148,
	},
	view3: {
		backgroundColor: "#E73939",
		borderRadius: 18,
		paddingHorizontal: 14,
		marginBottom: 8,
	},
});