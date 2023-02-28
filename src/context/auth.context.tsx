import { useAppDispatch } from "data";
import { AuthenticationThunk } from "data/thunk";
import { UserThunk } from "data/thunk/user.thunk";
import {
  ICredentials,
  ISendOTpRequest,
  ISignInResponse,
  ISignUpRequest,
} from "interface";
import React, {
  createContext,
  ReactElement,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { AuthService } from "services";


interface IAuthProvider {
  children: ReactElement;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  signIn: (credentials: ICredentials) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (credentials: ISignUpRequest) => Promise<void>;
  checkOtp: (credentials: ISendOTpRequest) => Promise<void>;
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

  checkOtp: async () => {
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
  const token = localStorage.getItem("token");

  const dispatch = useAppDispatch();


  // const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState<boolean>(
    initState.isAuthenticated
  );

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
      console.log("token here");
    } else {
      setAuthenticated(false);
      // navigate('/auth/sign-in')
      console.log("token false here");
    }
  }, [token]);

  const signIn = useCallback(async (credentials: ICredentials) => {
    try {
      const response: ISignInResponse = await AuthService.signIn(credentials);
      localStorage.setItem("token", response.token.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("iGroupId", response.data.iGroupId);
      if (response.success == 1) {
        localStorage.setItem("email", credentials.email);
      }
      setAuthenticated(true);

      toast.success("You have successfully logged in!");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signUp = useCallback(async (credentials: ISignUpRequest) => {
    try {
      const res: any = await AuthService.signUp(credentials)

      if (res.success == 1) {
        // toast.success('Signup SuccessFull');

        const res = await dispatch(AuthenticationThunk.sendOtp({ email: credentials.email }))
        sessionStorage.setItem("signUp", '1')
        sessionStorage.setItem('email', credentials?.email)
        sessionStorage.setItem('password', credentials?.password)
      }
    } catch (error: any) {
      console.log(error.response.data.message, 'error ');
      if (error.response.data.message) {
        toast.error('A user is already registered with this e-mail address.'
          , {
            duration: 10000,
          }
        );
      }
    }
  }, []);


  const checkOtp = useCallback(async (credentials: ISendOTpRequest) => {
    try {
      const res = await AuthService.checkOtpSend(credentials);
      // setAuthenticated(true);
     
      const logInEmail:any = sessionStorage.getItem('email')
      const logInPassword :any = sessionStorage.getItem('password')
       console.log(logInEmail , logInPassword , 'sesstion value')

      if (res.success == 1) {
        toast.success("Otp Verifition Successfull", {
          duration: 3000,
        })
        toast.success("Your Account Create Successfully Please Login Now", {
          duration: 5000,
        });

        try {
          const response: any = await AuthService.signIn({ email: logInEmail, password: logInPassword });
       console.log(response , 'response login')
           localStorage.setItem("token", response.token.token);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("iGroupId", response.data.iGroupId);
          if (response.success == 1) {
            localStorage.setItem("email", logInEmail);
          }
          setAuthenticated(true);
          sessionStorage.clear()
          toast.success("You have successfully logged in!" 
          , {
            duration: 10000,
          }
          );
        } catch (error) {
          console.log(error);
        }


      }
     
    } catch (error:any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }, []);

  const signOut = useCallback(async () => {
    localStorage.clear();
    setAuthenticated(false);
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setAuthenticated(true);
  //   } else {
  //     setAuthenticated(false);
  //   }
  // }, [signOut, signIn, signUp]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signOut, signUp, checkOtp }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
