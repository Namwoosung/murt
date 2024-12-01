import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ac7dc3e-b887-460d-b30b-fe8bb870a2e2"}} 
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb7ece7c-3bfd-402b-b6e7-77f8e937f48e"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<View style={styles.box}>
					</View>
					<Text style={styles.text4}>
						{"August 2021"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c7b3e44-bc18-4ff1-8b27-fe210e7b3837"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
				</View>
				<View style={styles.row3}>
					<Text style={styles.text5}>
						{"Sun"}
					</Text>
					<Text style={styles.text5}>
						{"Mon"}
					</Text>
					<Text style={styles.text5}>
						{"Tue"}
					</Text>
					<Text style={styles.text5}>
						{"Wed"}
					</Text>
					<Text style={styles.text5}>
						{"Thur"}
					</Text>
					<Text style={styles.text5}>
						{"Fri"}
					</Text>
					<Text style={styles.text5}>
						{"Sat"}
					</Text>
				</View>
				<View style={styles.row4}>
					<Text style={styles.text6}>
						{"1"}
					</Text>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text7}>
							{"2"}
						</Text>
					</TouchableOpacity>
					<Text style={styles.text7}>
						{"3"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Text style={styles.text8}>
						{"4"}
					</Text>
					<Text style={styles.text8}>
						{"5"}
					</Text>
					<Text style={styles.text8}>
						{"6"}
					</Text>
					<Text style={styles.text7}>
						{"7"}
					</Text>
				</View>
				<View style={styles.row5}>
					<Text style={styles.text7}>
						{"8"}
					</Text>
					<Text style={styles.text7}>
						{"9"}
					</Text>
					<Text style={styles.text7}>
						{"10"}
					</Text>
					<Text style={styles.text7}>
						{"11"}
					</Text>
					<Text style={styles.text7}>
						{"12"}
					</Text>
					<Text style={styles.text7}>
						{"13"}
					</Text>
					<Text style={styles.text7}>
						{"14"}
					</Text>
				</View>
				<View style={styles.box3}>
				</View>
				<View style={styles.row6}>
					<Text style={styles.text7}>
						{"15"}
					</Text>
					<Text style={styles.text7}>
						{"16"}
					</Text>
					<Text style={styles.text7}>
						{"17"}
					</Text>
					<Text style={styles.text7}>
						{"18"}
					</Text>
					<Text style={styles.text7}>
						{"19"}
					</Text>
					<Text style={styles.text7}>
						{"20"}
					</Text>
					<Text style={styles.text7}>
						{"21"}
					</Text>
				</View>
				<View style={styles.row7}>
					<View style={styles.box4}>
					</View>
					<View style={styles.box5}>
					</View>
				</View>
				<View style={styles.row8}>
					<Text style={styles.text7}>
						{"22"}
					</Text>
					<Text style={styles.text7}>
						{"23"}
					</Text>
					<Text style={styles.text7}>
						{"24"}
					</Text>
					<Text style={styles.text7}>
						{"25"}
					</Text>
					<Text style={styles.text7}>
						{"26"}
					</Text>
					<Text style={styles.text7}>
						{"27"}
					</Text>
					<Text style={styles.text7}>
						{"28"}
					</Text>
				</View>
				<View style={styles.row9}>
					<Text style={styles.text7}>
						{"29"}
					</Text>
					<Text style={styles.text7}>
						{"30"}
					</Text>
					<Text style={styles.text7}>
						{"31"}
					</Text>
					<Text style={styles.text7}>
						{"1"}
					</Text>
					<Text style={styles.text7}>
						{"2"}
					</Text>
					<Text style={styles.text7}>
						{"3"}
					</Text>
					<Text style={styles.text7}>
						{"4"}
					</Text>
				</View>
				<View style={styles.column}>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#1D1A21", "#222026"]}
						style={styles.box6}>
					</LinearGradient>
					<View style={styles.column2}>
						<View style={styles.row10}>
							<View style={styles.box7}>
							</View>
							<Text style={styles.text9}>
								{"음료수"}
							</Text>
							<View style={styles.box2}>
							</View>
							<Text style={styles.text9}>
								{"60,000 원"}
							</Text>
						</View>
						<View style={styles.row11}>
							<Text style={styles.text10}>
								{"Manual"}
							</Text>
							<Text style={styles.text10}>
								{"Aug 12"}
							</Text>
						</View>
					</View>
					<View style={styles.column2}>
						<View style={styles.row12}>
							<View style={styles.box8}>
							</View>
							<Text style={styles.text9}>
								{"식사"}
							</Text>
							<View style={styles.box2}>
							</View>
							<Text style={styles.text9}>
								{"160,000 원"}
							</Text>
						</View>
						<View style={styles.row13}>
							<Text style={styles.text11}>
								{"Manual"}
							</Text>
							<Text style={styles.text10}>
								{"Due Aug 20"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3229567-4032-4af3-b7f6-9670bb04bf59"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<View style={styles.row14}>
						<Text style={styles.text10}>
							{"합계"}
						</Text>
						<Text style={styles.text9}>
							{"420,000 원"}
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
	box: {
		flex: 1,
	},
	box2: {
		flex: 1,
		alignSelf: "stretch",
	},
	box3: {
		height: 6,
		backgroundColor: "#F97C1B",
		borderRadius: 5,
		marginBottom: 22,
		marginHorizontal: 142,
	},
	box4: {
		width: 6,
		height: 6,
		backgroundColor: "#57D6C0",
		borderRadius: 5,
	},
	box5: {
		width: 6,
		height: 6,
		backgroundColor: "#6663FF",
		borderRadius: 5,
	},
	box6: {
		height: 7,
		borderRadius: 15,
		marginBottom: 29,
		marginHorizontal: 132,
	},
	box7: {
		width: 10,
		height: 10,
		backgroundColor: "#F97C1B",
		borderRadius: 5,
		marginRight: 12,
	},
	box8: {
		width: 10,
		height: 10,
		backgroundColor: "#57D6C0",
		borderRadius: 5,
		marginRight: 10,
	},
	button: {
		width: 28,
		alignItems: "center",
		borderColor: "#FF4343",
		borderRadius: 14,
		borderWidth: 1,
		paddingVertical: 9,
		marginRight: 32,
	},
	column: {
		backgroundColor: "#E73939",
		paddingTop: 10,
		paddingBottom: 45,
		marginHorizontal: 7,
	},
	column2: {
		backgroundColor: "#FFEAEA",
		borderRadius: 15,
		paddingTop: 14,
		paddingBottom: 27,
		paddingRight: 8,
		marginBottom: 8,
		marginHorizontal: 16,
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
	},
	image3: {
		height: 117,
		marginBottom: 19,
		marginHorizontal: 16,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 36,
		marginHorizontal: 15,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 56,
		marginHorizontal: 60,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 21,
		marginHorizontal: 39,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 44,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 2,
		marginHorizontal: 40,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 2,
		marginHorizontal: 42,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 22,
		marginHorizontal: 88,
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 30,
		marginHorizontal: 40,
	},
	row9: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 35,
		marginHorizontal: 42,
	},
	row10: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 7,
		marginLeft: 8,
	},
	row11: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 36,
	},
	row12: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
		marginLeft: 8,
	},
	row13: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 27,
	},
	row14: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 10,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 22,
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
		marginRight: 48,
	},
	text5: {
		color: "#1F2024",
		fontSize: 12,
	},
	text6: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 33,
	},
	text7: {
		color: "#1F2024",
		fontSize: 14,
	},
	text8: {
		color: "#1F2024",
		fontSize: 14,
		marginRight: 43,
	},
	text9: {
		color: "#000000",
		fontSize: 18,
	},
	text10: {
		color: "#000000",
		fontSize: 14,
	},
	text11: {
		color: "#000000",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
	},
});