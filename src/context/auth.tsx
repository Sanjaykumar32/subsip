import { ICredentials, ISignInResponse } from "interface";
import React, {
  createContext,
  ReactElement,
  useState,
  useContext,
  useCallback,
} from "react";
import { AuthService } from "services";

interface IAuthProvider {
  children: ReactElement;
}

interface IAuthContext {
  isAuthenticated: boolean;
  signIn: (credentials: ICredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const initState: IAuthContext = {
  isAuthenticated: false,
  signIn: async () => {
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

  const signIn = useCallback(async (credentials: ICredentials) => {
    try {
      const response: ISignInResponse = await AuthService.signIn(credentials);
      sessionStorage.setItem("token", response.token.token);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signOut = useCallback(async () => {
    sessionStorage.clear();
    setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
