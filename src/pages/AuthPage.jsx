import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
import useAuthStore from '../store/authStore';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { session, signUp, signIn, loading, error } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Si ya hay una sesión al cargar la página (ej. usuario ya logueado),
    // redirigir a la página principal.
    if (session) {
      navigate('/'); // Redirigir a la página principal o dashboard
    }
  }, [session, navigate]);

  const handleSubmit = async (email, password) => {
    let authSuccess = false;
    if (isSignUp) {
      const result = await signUp(email, password);
      // Para signUp, la sesión puede no estar disponible inmediatamente si se requiere confirmación por email.
      // Sin embargo, si la confirmación no es necesaria o está deshabilitada para desarrollo,
      // 'result.user' podría existir. La redirección se basa en 'session' en el useEffect.
      // Si Supabase devuelve una sesión directamente tras el signUp (auto-confirmación), el useEffect lo manejará.
      // Si no, el usuario deberá confirmar su email y luego iniciar sesión.
      if (result && result.user) {
        console.log("Sign up attempt data:", result);
        // No navegamos aquí directamente, dejamos que el useEffect basado en 'session' lo haga.
        // Si hay sesión, useEffect redirige. Si no (esperando confirmación), se queda en AuthPage.
        // El toast de éxito/confirmación ya se maneja en authStore.
      } else if (result && result.error) {
        console.error("Sign up error:", result.error);
      }
    } else {
      const sessionData = await signIn(email, password);
      if (sessionData) {
        console.log("Sign in success, session:", sessionData);
        authSuccess = true;
      } else {
        // El error ya se maneja y se muestra mediante el 'error' state de useAuthStore
        // y el toast en authStore.
        console.error("Sign in error occurred.");
      }
    }

    // Después de un signIn exitoso, el estado de 'session' se actualizará,
    // y el useEffect de arriba se encargará de la redirección.
    // No es necesario navegar explícitamente aquí si el useEffect ya lo hace.
    // if (authSuccess) {
    // navigate('/'); // Esto sería redundante si el useEffect ya funciona correctamente.
    // }
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
