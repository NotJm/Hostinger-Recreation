import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ContainerTopLogo />
      <ContainerForm />
    </View>
  );
}

export const ContainerTopLogo = () => {
  return (
    <View style={styles.containerTopLogo}>
      <Image source={require('./assets/logo.svg')}></Image>
    </View>
  );
}


export const ContainerForm = () => {
  return (
    <View style={styles.containerForm}>
      <Text style={styles.textStyleDefault}>Acceso</Text>
      <ButtonGroup />
      <LineHorizontal />
      <ContentForm />
    </View>
  );
}

export const ButtonGroup = () => {
  return (
    <View style={styles.containerButtonGroup}>
      <TouchableOpacity style={styles.buttonGoogle}>
        <Image source={require('./assets/google.svg')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFacebook}>
        <Image source={require('./assets/facebook.svg')}></Image>
      </TouchableOpacity>
    </View>
  );
}

export const LineHorizontal = () => {
  return (
    <View style={styles.horizontalLine}>
      <Text style={styles.paragraph}>o</Text>
    </View>
  );
}

export const ContentForm = () => {
  return (
    <View style={styles.contentForm}>
      <TextInput style={styles.inputDefault} placeholder='Correo Electronico' />
      <TextInput style={styles.inputDefault} placeholder='Contraseña' />
      <TouchableOpacity style={styles.buttonAccess}>
        <Text style={styles.textButton}>Acceso</Text>
      </TouchableOpacity>
      <Text style={styles.textStyleLink}>¿Has olvidado tu contraseña?</Text>
      <View style={styles.containerText}>
        <Text style={styles.textStyleDefault}>
          ¿No eres miembro todavia?
          <Text style={styles.textStyleLink2}>Elige un plan de alojamiento</Text>
          !Y empieza ahora!
        </Text>
      </View>
    </View>
  );
}

/*-------------------------------*/
/*             STYLES            */
/*-------------------------------*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Container Styles
  containerTopLogo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 36
  },
  containerForm: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50,
    gap: 24,
  },
  containerButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
  },
  contentForm: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  containerText: {
    width: '50vh',
  },
  // Inputs Styles
  inputDefault: {
    width: '60vh',
    paddingLeft: 10,
    height: '7vh',
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: '#dadce0',
    borderWidth: 2,
    borderRadius: 5,
  },
  // Button Styles
  buttonGoogle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 60,
    borderStyle: 'solid',
    borderColor: '#dadce0',
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonAccess: {
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: '#6747c7',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60vh',
    height: 80,
    borderRadius: 12,
  },
  buttonFacebook: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 60,
    backgroundColor: '#1877f2',
    borderRadius: 5,
  },
  // Staff Styles
  textStyleDefault: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  textStyleLink: {
    fontSize: 20,
    color: '#6747c7',
    fontWeight: 'bold'
  },
  textStyleLink2: {
    fontSize: '1.5rem',
    color: '#6747c7',
    fontWeight: 'bold'
  },
  textButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  }
});
