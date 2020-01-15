const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.WHITE,
      paddingTop: 8,
      paddingHorizontal: 16,
    },
    contentContainer: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    title: {
      paddingTop: 16,
      marginLeft: 16,
    },
    titleText: {
      color: colors.DARK_GRAY,
    },
    bannerImage: {
      height: width * bannerProportion,
      marginBottom: 12,
    },
  })