import React, { useState } from 'react';
import useFolderStore from '../../store/folderStore';

const AddFolderForm = () => {
  const [folderName, setFolderName] = useState('');
  const { addFolder, loading, error } = useFolderStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!folderName.trim()) {
      // El store también valida, pero es bueno tener feedback inmediato
      alert('Folder name cannot be empty.');
      return;
    }
    const newFolder = await addFolder(folderName);
    if (newFolder) {
      setFolderName(''); // Clear input on success
    }
    // Errores se mostrarán a través del estado 'error' del store,
    // que podría ser consumido por un componente de notificación global o localmente.
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-6 bg-slate-50 rounded-lg shadow-sm"> {/* Ajustes de padding, color y sombra */}
      <h3 className="text-xl font-semibold text-slate-700 mb-4">Create New Folder</h3> {/* Ajuste de color y margen */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Enter folder name"
          className="flex-grow px-3.5 py-2.5 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Adding...' : 'Add Folder'}
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200 mt-3">
          {error}
        </p>
      )}
    </form>
  );
};

export default AddFolderForm;
