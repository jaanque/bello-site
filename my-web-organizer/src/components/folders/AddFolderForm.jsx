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
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-800 mb-2">Create New Folder</h3>
      <div className="flex space-x-2">
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Enter folder name"
          className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Adding...' : 'Add Folder'}
        </button>
      </div>
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
    </form>
  );
};

export default AddFolderForm;
