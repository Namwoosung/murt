import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row}>
						<Text style={styles.text}>
							{"9:41"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b10b2d72-2870-4d36-921d-7b6d3dd411ed"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06d69dab-8b5d-4a90-a2a8-6ac5293d054c"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<View style={styles.box}>
						</View>
						<Text style={styles.text4}>
							{"MURT"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6eb690f-399c-4bca-80ed-5f3795b95ddc"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.column2}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10d7f58c-d387-48d8-8e80-1a3e91a22fef"}} 
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
				<View style={styles.row3}>
					<Text style={styles.text6}>
						{"Collection"}
					</Text>
					<Text style={styles.text7}>
						{"See All"}
					</Text>
				</View>
				<View style={styles.row4}>
					<View style={styles.column3}>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text8}>
							{"바디워시- A마트"}
						</Text>
						<Text style={styles.text9}>
							{"25,000 원"}
						</Text>
					</View>
					<View style={styles.column4}>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text10}>
							{"바디워시- B마트"}
						</Text>
						<Text style={styles.text11}>
							{"15,000 원"}
						</Text>
					</View>
					<View style={styles.column4}>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text12}>
							{"바디워시- C마트"}
						</Text>
						<Text style={styles.text13}>
							{"20,000 원"}
						</Text>
					</View>
				</View>
				<View style={styles.row5}>
					<View style={styles.column4}>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text14}>
							{"바디워시- D마트"}
						</Text>
						<Text style={styles.text15}>
							{"27,000 원"}
						</Text>
					</View>
					<View style={styles.column4}>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text16}>
							{"바디워시- E마트"}
						</Text>
						<Text style={styles.text17}>
							{"17,000 원"}
						</Text>
					</View>
					<View style={styles.column4}>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text16}>
							{"바디워시- F마트"}
						</Text>
						<Text style={styles.text17}>
							{"28,000 원"}
						</Text>
					</View>
				</View>
				<View style={styles.row6}>
					<View style={styles.column5}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eeedf45a-0894-4edf-a4fe-f2b43cc64d1d"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text18}>
							{"관심상품"}
						</Text>
					</View>
					<View style={styles.column6}>
						<View style={styles.view}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28081fe9-fe18-4863-a0b5-edb54290804c"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
						</View>
						<Text style={styles.text19}>
							{"MURT"}
						</Text>
					</View>
					<View style={styles.column7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3ab5d94-903f-4a5e-875d-98b4648dd040"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text18}>
							{"개인정보"}
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
	box2: {
		height: 116,
		borderRadius: 19,
		marginBottom: 14,
	},
	column: {
		marginBottom: 7,
	},
	column2: {
		width: 24,
	},
	column3: {
		width: 116,
		backgroundColor: "#FFEAEA",
		borderRadius: 19,
		paddingBottom: 19,
		paddingHorizontal: 8,
	},
	column4: {
		width: 116,
		backgroundColor: "#FFEAEA",
		borderRadius: 19,
		paddingBottom: 19,
	},
	column5: {
		width: 93,
		backgroundColor: "#FFFFFF",
		paddingVertical: 21,
	},
	column6: {
		width: 93,
		backgroundColor: "#FFFFFF",
		paddingVertical: 10,
		paddingHorizontal: 24,
	},
	column7: {
		width: 93,
		backgroundColor: "#FFFFFF",
		paddingVertical: 20,
		marginTop: 2,
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
		height: 24,
		marginBottom: 17,
		marginHorizontal: 33,
	},
	image6: {
		height: 22,
		marginTop: 12,
	},
	image7: {
		height: 23,
		marginBottom: 19,
		marginHorizontal: 33,
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
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 87,
		marginHorizontal: 27,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 49,
		marginHorizontal: 3,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 79,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		paddingTop: 31,
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
		color: "#000000",
		fontSize: 20,
	},
	text7: {
		color: "#000000",
		fontSize: 13,
	},
	text8: {
		color: "#000000",
		fontSize: 13,
		marginBottom: 12,
	},
	text9: {
		color: "#000000",
		fontSize: 10,
	},
	text10: {
		color: "#000000",
		fontSize: 13,
		marginBottom: 12,
		marginHorizontal: 11,
	},
	text11: {
		color: "#000000",
		fontSize: 10,
		marginLeft: 10,
	},
	text12: {
		color: "#000000",
		fontSize: 13,
		marginBottom: 12,
		marginHorizontal: 9,
	},
	text13: {
		color: "#000000",
		fontSize: 10,
		marginLeft: 8,
	},
	text14: {
		color: "#000000",
		fontSize: 13,
		marginBottom: 12,
		marginHorizontal: 7,
	},
	text15: {
		color: "#000000",
		fontSize: 10,
		marginLeft: 6,
	},
	text16: {
		color: "#000000",
		fontSize: 13,
		marginBottom: 12,
		marginHorizontal: 8,
	},
	text17: {
		color: "#000000",
		fontSize: 10,
		marginLeft: 7,
	},
	text18: {
		color: "#A0A3B1",
		fontSize: 14,
		marginHorizontal: 21,
	},
	text19: {
		color: "#000000",
		fontSize: 14,
	},
	view: {
		backgroundColor: "#E73939",
		borderRadius: 18,
		paddingHorizontal: 14,
		marginBottom: 8,
	},
});