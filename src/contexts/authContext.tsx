import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import AppLoading from 'expo-app-loading';
import firebaseCredentials from '../../android/app/google-services.json';

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  function onAuthStateChanged(userData: any) {
    setUser(userData);
    if (loading) setLoading(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: firebaseCredentials.client[0].oauth_client[1].client_id,
      offlineAccess: true,
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  async function signIn() {
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const data = await auth().signInWithCredential(googleCredential);

      firestore()
        .collection('users')
        .doc(data.user.uid)
        .get()
        .then((userData) => {
          if (userData.exists) {
            setUser(data.user);
          } else {
            firestore().collection('users').doc(data.user.uid).set({
              displayName: data.user.displayName,
              email: data.user.email,
              admin: false,
              photo_url: data.user.photoURL,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function signOut() {
    auth().signOut();

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
