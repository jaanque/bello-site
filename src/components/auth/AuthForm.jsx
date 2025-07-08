import React, { useState } from 'react';

const AuthForm = ({ type = 'signIn', onSubmit, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  // El contenedor principal con padding, fondo blanco y sombra ahora se maneja en AuthPage.jsx
  // Este componente se enfoca solo en los campos del formulario.
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* El título del formulario puede ser opcional o manejado por AuthPage si se prefiere */}
      {/* <h2 className="text-xl font-semibold text-center text-slate-700">
        {type === 'signUp' ? 'Create an Account' : 'Sign In'}
      </h2> */}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={type === 'signIn' ? 'current-password' : 'new-password'}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
          {error}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Processing...' : (type === 'signUp' ? 'Sign Up' : 'Sign In')}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
