import React, { useCallback, useRef, useContext } from 'react';
import {
  KeyboardAvoidingView, Platform, View, ScrollView, Alert, Image
} from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logoImg.png';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  MoreInformationButton,
  MoreInformationButtonText,
} from './styles';

interface SignInFormData {
  identifier: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();
  const { signIn, user } = useAuth();
  // const { signIn } = useAuth();

  console.log(user);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          identifier: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          identifier: data.identifier,
          password: data.password,
        });
      } catch (err) {
        // if (err instanceof Yup.ValidationError) {
        //   const errors = getValidationErrors(err);

        //   console.log(errors);

        //   formRef.current?.setErrors(errors);

        //   return;
        // }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >

          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>

              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="email"
                placeholder="Digite seu e-mail"
                returnKeyType="next"
              />

              <Input
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="password"
                icon="lock"
                placeholder="Digite sua senha"
              />

              <Button onPress={() => {
                formRef.current?.submitForm();
              }}
              >
                Entrar
              </Button>
            </Form>
            <ForgotPassword onPress={() => console.log('esqueci')}>
              <ForgotPasswordText>
                Esqueci minha senha
              </ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <MoreInformationButton onPress={() => navigation.navigate('MoreInformation')}>
        <Icon name="info" size={18} color="#402a54" />
        <MoreInformationButtonText>Saiba mais</MoreInformationButtonText>
      </MoreInformationButton>
    </>
  );
};
export default SignIn;
