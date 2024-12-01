import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, StyleSheet, } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67721038-7fa7-4af2-becf-5477477594a7"}} 
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
				<View style={styles.column}>
					<Text style={styles.text4}>
						{"August 2021"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc1edd4e-df77-4449-8904-ac1216a6d29b"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fce395e-9a03-4bfb-addd-cca46db45fcf"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<View style={styles.column2}>
						<LinearGradient 
							start={{x:0, y:0}}
							end={{x:0, y:1}}
							colors={["#1D1A21", "#222026"]}
							style={styles.box}>
						</LinearGradient>
						<View style={styles.column3}>
							<View style={styles.row2}>
								<View style={styles.box2}>
								</View>
								<Text style={styles.text5}>
									{"음료수"}
								</Text>
								<View style={styles.box3}>
								</View>
								<Text style={styles.text5}>
									{"60,000 원"}
								</Text>
							</View>
							<View style={styles.row3}>
								<Text style={styles.text6}>
									{"Manual"}
								</Text>
								<Text style={styles.text6}>
									{"Aug 12"}
								</Text>
							</View>
						</View>
						<View style={styles.column3}>
							<View style={styles.row4}>
								<View style={styles.box4}>
								</View>
								<Text style={styles.text5}>
									{"식사"}
								</Text>
								<View style={styles.box3}>
								</View>
								<Text style={styles.text5}>
									{"160,000 원"}
								</Text>
							</View>
							<View style={styles.row5}>
								<Text style={styles.text7}>
									{"Manual"}
								</Text>
								<Text style={styles.text6}>
									{"Due Aug 20"}
								</Text>
							</View>
						</View>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c579ec9-d7e7-4e50-b388-37510e832912"}} 
							resizeMode = {'stretch'}
							style={styles.row6}
							>
							<Text style={styles.text8}>
								{"29"}
							</Text>
							<Text style={styles.text9}>
								{"30"}
							</Text>
							<Text style={styles.text10}>
								{"31"}
							</Text>
							<Text style={styles.text11}>
								{"1"}
							</Text>
							<Text style={styles.text12}>
								{"2"}
							</Text>
							<Text style={styles.text13}>
								{"3"}
							</Text>
							<Text style={styles.text14}>
								{"4"}
							</Text>
						</ImageBackground>
						<View style={styles.row7}>
							<Text style={styles.text6}>
								{"합계"}
							</Text>
							<Text style={styles.text5}>
								{"420,000 원"}
							</Text>
						</View>
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
	box: {
		height: 7,
		borderRadius: 15,
		marginBottom: 49,
		marginHorizontal: 132,
	},
	box2: {
		width: 10,
		height: 10,
		backgroundColor: "#F97C1B",
		borderRadius: 5,
		marginRight: 12,
	},
	box3: {
		flex: 1,
		alignSelf: "stretch",
	},
	box4: {
		width: 10,
		height: 10,
		backgroundColor: "#57D6C0",
		borderRadius: 5,
		marginRight: 10,
	},
	column: {
		marginLeft: 8,
	},
	column2: {
		backgroundColor: "#E73939",
		paddingTop: 10,
		paddingBottom: 356,
		marginTop: -1,
	},
	column3: {
		backgroundColor: "#FFEAEA",
		borderRadius: 15,
		paddingTop: 14,
		paddingBottom: 27,
		paddingRight: 8,
		marginBottom: 8,
		marginHorizontal: 15,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 11
		},
		shadowRadius: 20,
		elevation: 20,
	},
	image: {
		width: 17,
		height: 10,
		marginRight: 5,
	},
	image2: {
		width: 4,
		height: 10,
		marginHorizontal: 52,
	},
	image3: {
		height: 10,
		marginBottom: 9,
		marginHorizontal: 68,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 36,
		marginLeft: 33,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 7,
		marginLeft: 8,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 36,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
		marginLeft: 8,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 27,
	},
	row6: {
		height: 117,
		flexDirection: "row",
		paddingTop: 34,
		paddingBottom: 68,
		paddingHorizontal: 17,
		marginBottom: 19,
		marginHorizontal: 15,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 9,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 22,
		paddingRight: 7,
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
		color: "#1F2024",
		fontSize: 24,
		marginHorizontal: 120,
	},
	text5: {
		color: "#000000",
		fontSize: 18,
	},
	text6: {
		color: "#000000",
		fontSize: 14,
	},
	text7: {
		color: "#000000",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
	},
	text8: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
	},
	text9: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 35,
	},
	text10: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 41,
	},
	text11: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 46,
	},
	text12: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 43,
	},
	text13: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 42,
	},
	text14: {
		color: "#1F2024",
		fontSize: 14,
		marginTop: 1,
	},
});