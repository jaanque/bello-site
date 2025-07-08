import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Asumiremos que usaremos react-router-dom más adelante
import AuthForm from '../components/auth/AuthForm';
import useAuthStore from '../store/authStore';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { session, signUp, signIn, loading, error, fetchSession } = useAuthStore();

  // Esto es un placeholder para la navegación.
  // En una app real con react-router-dom, useNavigate se usaría para redirigir.
  const navigate = (path) => {
    console.log(`Navigating to ${path}, (redirecting to ${window.location.origin}${path})`);
    // window.location.href = path; // Esto causaría un full page reload.
                                 // react-router-dom lo manejaría mejor.
  };

  useEffect(() => {
    // Si ya hay una sesión al cargar la página (ej. usuario ya logueado),
    // redirigir a la página principal.
    // fetchSession(); // Podríamos llamar a fetchSession aquí o en App.jsx
    if (session) {
      navigate('/'); // Redirigir a la página principal o dashboard
    }
  }, [session, navigate]);

  const handleSubmit = async (email, password) => {
    let result;
    if (isSignUp) {
      result = await signUp(email, password);
    } else {
      result = await signIn(email, password);
    }
    // Si el login/signup fue exitoso y tenemos una sesión,
    // la redirección ocurrirá por el useEffect de arriba.
    // Si hubo error, se mostrará en el AuthForm.
    if (result && result.user) {
        console.log("Auth success, session:", result);
        // navigate('/'); // Opcional: forzar navegación aquí también
    } else if (result && result.error) {
        console.error("Auth error:", result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/vite.svg" // Placeholder logo
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isSignUp ? 'Create your account' : 'Sign in to your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm
            type={isSignUp ? 'signUp' : 'signIn'}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
