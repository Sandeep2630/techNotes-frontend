return (

    <View style={{ backgroundColor: "#F7F7F7", flex: 1 }}>
      <HeaderNav name="My Courses" navigation={navigation} />
      {isLoading == false ? (

        <View style={{ backgroundColor: "#FFF", height: high }}>
          <View style={styles.searchBarContainer}>
            <TextInput

              allowFontScaling={false}

              value={searchQuery}

              onChangeText={handleChangeText}

              style={[styles.searchBar, styles.placeholder1]}

              placeholder="Try out a course.."

              placeholderTextColor={

                colorScheme === "dark" ? "#D1D0D0" : "black"

              }

            />
            {searchQuery ? (

              <AntDesign

                name="close"

                size={20}

                color={colorScheme === "dark" ? "white" : "black"}

                onPress={onClear}

                style={styles.clearIcon2}

              />
            ) : (

              <FontAwesome name="search" size={20} style={styles.clearIcon2} />
            )}

            <View

              style={{

                alignSelf: "center",

                // left: wid / 15,

                marginTop: -4,

                backgroundColor: "#ECECEC",

                width: high / 21.35,

                height: high / 20.35,

                justifyContent: "center",

                alignContent: "center",

                borderRadius: 12,

              }}

            >
              <Image

                style={{ alignSelf: "center", width: 15, height: 15 }}

                source={require("../assets/images/filter.png")}

              />
            </View>
          </View>
          {!searchQuery ? (

            <View>
              {enrollCourseData?.length ? (

                <ScrollView

                  horizontal

                  showsHorizontalScrollIndicator={false}

                  style={{

                    marginTop: high / 65,

                    height: high / 3,

                    paddingLeft: wid / 12.8,

                  }}

                >
                  {enrollCourseData?.map((course: any, index: number) => {

                    return (

                      <EnrolledCourse

                        key={index}

                        courseManagementId={course.courseManagement.id}

                        imagePath={course.courseManagement.imagePath}

                        name={course.courseManagement.name}

                        detail={course.courseManagement.detail}

                        navigation={navigation}

                        isBuy={true}

                        price={course.courseManagement.price}

                        creationTime={course.courseManagement.creationTime}

                      />
                    );

                  })}

                </ScrollView>
              ) : (

                <Text

                  allowFontScaling={false}

                  style={{

                    marginTop: high / 65,

                    height: high / 3,

                    textAlignVertical: "center",

                    textAlign: "center",

                    fontSize: 20,

                    fontFamily: "Poppins-Bold",

                    backgroundColor: "#FFFFFF",

                  }}

                >
                  No Purchased Course

                </Text>
              )}

              <View>
                <Text

                  allowFontScaling={false}

                  style={{

                    fontSize: 20,

                    fontFamily: "Poppins-Bold",

                    backgroundColor: "#FFFFFF",

                    paddingLeft: wid / 11.2,

                    marginVertical: high / 60,

                  }}

                >
                  Popular Courses

                </Text>
              </View>
              <FlatList

                key={Math.random() * 100}

                showsHorizontalScrollIndicator={false}

                data={resData}

                style={{ width: wid, height: high / 2.8 }}

                renderItem={({ item }) => (

                  <PopularCourse item={item} navigation={navigation} />
                )}

              />
            </View>
          ) : (

            <View>
              {searchedData ? (

                <FlatList

                  key={Math.random() * 100}

                  showsHorizontalScrollIndicator={false}

                  data={searchedData}

                  style={{

                    width: wid,

                    height: verticalScale(650),

                  }}

                  renderItem={({ item }) => (

                    <PopularCourse item={item} navigation={navigation} />
                  )}

                />
              ) : (

                <Text

                  allowFontScaling={false}

                  style={{

                    marginTop: high / 9,

                    textAlign: "center",

                    fontSize: 20,

                    fontFamily: "Poppins-Bold",

                    backgroundColor: "#FFFFFF",

                  }}

                >
                  No Course Found

                </Text>
              )}

            </View>
          )}

        </View>
      ) : (

        <View

          style={{

            flex: 1,

            alignSelf: "center",

            justifyContent: "center",

            alignItems: "center",

            backgroundColor: "transparent",

          }}

        >
          <ActivityIndicator size="large" color="#319EAE" />
        </View>
      )}

    </View>
  );

}

const styles = StyleSheet.create({

  searchBarContainer: {

    marginHorizontal: wid / 14,

    marginTop: 15,

    padding: 2,

    backgroundColor: "#fff",

    flexDirection: "row",

    justifyContent: "space-between",

  },

  number: {

    fontFamily: "Poppins-Regular",

    left: wid / 70,

    fontSize: 14,

    color: "#8A8A8A",

    backgroundColor: "transparent",

  },

  cardText: {

    fontFamily: "Poppins-Regular",

    fontSize: 14,

  },

  topicCntr: {

    flexDirection: "row",

    marginBottom: 10,

    borderWidth: 1,

    alignSelf: "center",

    alignItems: "center",

    justifyContent: "space-between",

    borderRadius: 11,

    borderColor: "#F1F1F1",

    paddingHorizontal: 15,

    paddingVertical: 10,

    width: wid / 1.15,

    backgroundColor: "#FAFAFB",

  },

  searchBar: {

    width: wid / 1.45,

    height: high / 20.35,

    // alignSelf: "flex-start",

    // marginLeft: wid / 15,/

    paddingLeft: wid / 32.66,

    // paddingBottom: high / 106.75,

    // paddingTop: high / 122,

    backgroundColor: "#ECECEC",

    flexDirection: "row",

    borderRadius: 8,

    marginBottom: high / 142.33,

  },

  placeholder1: {

    fontFamily: "Poppins-Medium",

    fontStyle: "normal",

    fontSize: 13,

  },

  clearIcon: {

    // right: "28%",

    bottom: 13,

    color: "#8A8A8A",

    justifyContent: "center",

    alignSelf: "center",

    width: wid / 19.2,

    height: high / 42.7,

  },

  clearIcon2: {

    position: "absolute",

    bottom: 17,

    color: "#8A8A8A",

    right: wid / 5,

    justifyContent: "center",

    alignSelf: "center",

    alignItems: "center",

  },

});
Collapse