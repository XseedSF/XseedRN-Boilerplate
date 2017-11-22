const colors = {
    //Definidos en Zeplin
    redMain: '#d0021b',
    blueLight: '#2a7eca',
    blueMain: '#0054a5',
    blueDark: '#124c88',
    blue700: '#0C355E',
    skyBlue: '#6dcef5',
    grayLight: '#e1e1e1',
    grayMain: '#9b9b9b',
    grayDark: '#32323c',
    greenMain: '#32cb73',
    white: '#fff',
    //
    graySuperLight: '#f1f4f6',
    mainLight: '#3490dc',
    mainDark: '#1478c8',
    mainDarkDisabled: '#246094',
    //redLight: '#e74c3c',
    //blueLightDisabled: '#3490db',
    orangeDark: '#EF6C00',
    orangeLight: '#FFA726'
  };
  
  export default {
    colors,
    btn: {
      primary: {
        color: colors.white,
        backgroundColor: colors.blueMain,
        underlayColor: colors.blueDark,
        buttonStyle: {
          borderRadius: 5,
          height: 41
        },
        disabledStyle: {
          backgroundColor: colors.grayLight
        }
      },
      secondary: {
        color: colors.blueMain,
        backgroundColor: colors.white,
        underlayColor: colors.blueDark,
        buttonStyle: {
          borderColor: colors.blueMain,
          borderRadius: 5,
          borderWidth: 1,
          height: 41
        }
      },
      primaryWhite: {
        color: colors.blueMain,
        backgroundColor: colors.white,
        underlayColor: colors.grayLight,
        buttonStyle: {
          borderRadius: 5,
          height: 41
        },
        disabledStyle: {
          backgroundColor: colors.blueLight
        }
      },
      blueLight: {
        color: colors.white,
        backgroundColor: colors.grayDark
      },
      whiteBlue: {
        color: colors.mainDark,
        backgroundColor: colors.white
      }
    },
    text: {
      main: colors.mainDark,
      mainLight: colors.mainLight,
      gray: colors.grayDark
    },
    font: {
      splash: {
        fontFamily: 'Roboto',
        fontWeight: '900', //black
        fontSize: 26
      },
      h1: {
        fontFamily: 'Roboto',
        fontWeight: '900', //black
        fontSize: 20
      },
      h2: {
        fontFamily: 'Roboto',
        fontWeight: '400', //regular
        fontSize: 20
      },
      h3: {
        fontFamily: 'Roboto',
        fontWeight: '700', //bold
        fontSize: 16
      },
      h4: {
        fontFamily: 'Roboto',
        fontWeight: '400', //regular
        fontSize: 16
      },
      h5: {
        fontFamily: 'Roboto',
        fontWeight: '300', //light
        fontSize: 16
      },
      p: {
        fontFamily: 'Roboto',
        fontWeight: '400', //regular
        fontSize: 14
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400', //regular
        fontSize: 12
      }
    },
    navbar: {
      primary: {
        color: colors.mainLight,
        backgroundColor: colors.white
      }
    },
    footerMargin: {
      marginBottom: 60
    }
  };
  