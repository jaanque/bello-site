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
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Contenedor principal del formulario y título */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo - se puede mantener o eliminar si se prefiere un look más minimalista */}
        <img
          className="mx-auto h-10 w-auto" // Reducido ligeramente el tamaño del logo
          src="/vite.svg" // Placeholder logo
          alt="App Logo"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-800">
          {isSignUp ? 'Create your account' : 'Sign in to your account'}
        </h2>
      </div>

      {/* Card del formulario */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <AuthForm
            type={isSignUp ? 'signUp' : 'signIn'}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
            // No pasamos clases de layout aquí, AuthForm se enfocará en los campos
          />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Or</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md"
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
