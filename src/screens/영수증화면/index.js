import React from "react";
import { SafeAreaView, View, ScrollView, Image, ImageBackground, Text, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3777d17-678c-4076-9507-1640f56a950b"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<ImageBackground 
						source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea636dc4-94bd-47fd-baa3-6ed09f200c55"}} 
						resizeMode = {'stretch'}
						style={styles.row}
						>
						<Text style={styles.text}>
							{"부가세"}
						</Text>
						<Text style={styles.text2}>
							{"1,784 원"}
						</Text>
					</ImageBackground>
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
	column: {
		backgroundColor: "#DB0000",
		paddingVertical: 56,
	},
	image: {
		height: 43,
		marginBottom: 36,
		marginHorizontal: 172,
	},
	row: {
		height: 656,
		flexDirection: "row",
		paddingTop: 420,
		paddingBottom: 220,
		paddingHorizontal: 29,
		marginHorizontal: 22,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	text: {
		color: "#000000",
		fontSize: 16,
		marginRight: 4,
		flex: 1,
	},
	text2: {
		color: "#000000",
		fontSize: 16,
	},
});