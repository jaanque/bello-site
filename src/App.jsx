import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, BrowserRouter } from 'react-router-dom';
import useAuthStore from './store/authStore';
import AuthPage from './pages/AuthPage';
import AddFolderForm from './components/folders/AddFolderForm';
import FolderList from './components/folders/FolderList';

// Placeholder para un componente de Dashboard/Home
const DashboardPage = () => {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    // El listener en useAuthStore o aquí debería manejar la redirección
    // o el cambio de estado que haga que ProtectedRoute redirija.
    // navigate('/auth'); // Opcional: forzar navegación
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 md:p-8"> {/* Ajustado padding y color de fondo */}
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-6 sm:p-8"> {/* Sombra más sutil, padding ajustado, max-width aumentado */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"> {/* Mejorado responsive y margen */}
          <h1 className="text-3xl font-bold text-slate-800 mb-4 sm:mb-0">Welcome, {user?.email}!</h1>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            Sign Out
          </button>
        </div>
        <p className="text-slate-600 mb-8 text-lg">Manage your folders and saved pages from here.</p> {/* Margen y tamaño de texto ajustado */}

        {/* Sección de Gestión de Carpetas */}
        <div className="mt-8">
          <AddFolderForm />
          <FolderList />
        </div>

        {/* Aquí iría el contenido principal de la aplicación, como páginas dentro de carpetas */}
        <Outlet /> {/* Para rutas anidadas si es necesario */}
      </div>
    </div>
  );
};

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const { session, loading } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) {
      navigate('/auth');
    }
  }, [session, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null; // O un spinner, mientras ocurre la redirección del useEffect
  }

  return children;
};


function App() {
  const { fetchSession, listenToAuthStateChange } = useAuthStore();

  useEffect(() => {
    fetchSession(); // Carga la sesión inicial al montar la app
    const unsubscribe = listenToAuthStateChange(); // Escucha cambios de auth
    return () => {
      unsubscribe(); // Limpia el listener al desmontar
    };
  }, [fetchSession, listenToAuthStateChange]);

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      >
        {/* Ejemplo de ruta anidada si se necesita más adelante */}
        {/* <Route path="profile" element={<ProfilePage />} /> */}
      </Route>
      {/* Puedes añadir una ruta catch-all para 404 si lo deseas */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
