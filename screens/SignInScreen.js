import React from 'react';
import { 
     View,
     Text,
     Image, 
     StyleSheet,
     useWindowDimensions,
     TextInput,
     Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from "aws-amplify";

const SignInScreen = () => {

     const navigation = useNavigation();
     const [loading, setLoading] = useState(false);

     const {
          control,
          handleSubmit,
          formState: {errors},
     } = useForm();

     const onSignInPressed = async data => {
          if (loading) {
               return;
          }
          try {
          const response = await Auth.signIn(data.eamil, data.passward);
               console.log(response);
               navigation.navigate('user');
          } catch(e) {
               Alert.alert('Oops', e.message);
          }
          setLoading(false);
     };
}



