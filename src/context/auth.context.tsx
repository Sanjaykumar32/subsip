import { useAppDispatch } from "data";
import { UserThunk } from "data/thunk/user.thunk";
import { ICredentials, ISignInResponse, ISignUpRequest } from "interface";
import React, {
  createContext,
  ReactElement,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { AuthService } from "services";

interface IAuthProvider {
  children: ReactElement;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  signIn: (credentials: ICredentials) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (credentials: ISignUpRequest) => Promise<void>;
}

const initState: IAuthContext = {
  isAuthenticated: false,
  signIn: async () => {
    return;
  },
  signUp: async () => {
    return;
  },

  signOut: async () => {
    return;
  },
};
const AuthContext = createContext<IAuthContext>(initState);

/**
 *
 * @param param0
 * @returns {ReactElement}
 */
export function AuthProvider({ children }: IAuthProvider): ReactElement {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(
    initState.isAuthenticated
  );

  const dispatch = useAppDispatch();



  const signIn = useCallback(async (credentials: ICredentials) => {
    try {
      const response: ISignInResponse = await AuthService.signIn(credentials);
      localStorage.setItem("token", response.token.token);
      localStorage.setItem("userId", response.data.userId);

      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signUp = useCallback(async (credentials: ISignUpRequest) => {
    try {
      await AuthService.signUp(credentials);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signOut = useCallback(async () => {
    localStorage.clear();
    setAuthenticated(false);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [signOut, signIn, signUp]);

  // useEffect(() => {
  //   dispatch(UserThunk.fetchProfile());
  // }, [dispatch]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
