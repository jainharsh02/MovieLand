// import { app } from "../firebase/config";
// import useAuthStore from "../store/useAuthStore";
// import { toastError } from "../utils/toast";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// // import { useRouter } from 'react-router-dom'
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const useAuth = ({ loginURL, logoutURL }) => {
//   const auth = getAuth(app);
//   const router = useNavigate();
//   const [isLoading, setLoading] = useState(true);
//   const { user, isAuthenticated, setIsAuthenticated, setUser } = useAuthStore();

//   const signup = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         if (userCredentials) {
//           setIsAuthenticated(true);
//           setUser(userCredentials.user);
//           loginURL && router(loginURL, { register: true });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toastError(err.message);
//       });
//   };

//   const logout = () => {
//     signOut(auth)
//       .then(() => {
//         setIsAuthenticated(false);
//         setUser({});
//         logoutURL && router(logoutURL, { replace: true });
//       })
//       .catch((err) => {
//         console.log(err);
//         toastError(err.message);
//       });
//   };

//   const login = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         if (userCredentials) {
//           setIsAuthenticated(true);
//           setUser(userCredentials.user);
//           loginURL && router(loginURL, { replace: true });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toastError(err.message);
//       });
//   };

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsAuthenticated(true);
//       } else setIsAuthenticated(false);
//       loginURL && router(loginURL, { replace: true });
//       setLoading(false);
//     });
//   }, [auth, router, setIsAuthenticated, loginURL]);

//   return { user, isAuthenticated, setUser, signup, login, logout, isLoading };
// };

// export default useAuth;

import { app } from "../firebase/config";
import useAuthStore from "../store/useAuthStore";
import { toastError } from "../utils/toast";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useAuth = ({ loginURL, logoutURL }) => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setLoading] = useState(true);
  const { user, isAuthenticated, setIsAuthenticated, setUser } = useAuthStore();

  const handleRedirect = (path) => {
    if (location.pathname !== path) {
      navigate(path, { replace: true });
    }
  };

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (userCredentials) {
          setIsAuthenticated(true);
          setUser(userCredentials.user);
          loginURL && handleRedirect(loginURL);
        }
      })
      .catch((err) => {
        console.log(err);
        toastError(err.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        setUser({});
        logoutURL && handleRedirect(logoutURL);
      })
      .catch((err) => {
        console.log(err);
        toastError(err.message);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (userCredentials) {
          setIsAuthenticated(true);
          setUser(userCredentials.user);
          loginURL && handleRedirect(loginURL);
        }
      })
      .catch((err) => {
        console.log(err);
        toastError(err.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });
  }, [auth, setIsAuthenticated, setUser]);

  return { user, isAuthenticated, setUser, signup, login, logout, isLoading };
};

export default useAuth;
