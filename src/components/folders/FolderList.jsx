import React, { useEffect } from 'react';
import useFolderStore from '../../store/folderStore';

const FolderList = () => {
  const { folders, fetchFolders, updateFolder, deleteFolder, loading, error } = useFolderStore();

  useEffect(() => {
    fetchFolders();
  }, [fetchFolders]);

  const handleRename = async (folderId, currentName) => {
    const newName = prompt('Enter new folder name:', currentName);
    if (newName && newName.trim() !== '' && newName !== currentName) {
      await updateFolder(folderId, newName);
    }
  };

  const handleDelete = async (folderId, folderName) => {
    if (window.confirm(`Are you sure you want to delete the folder "${folderName}"? This will also delete all pages within it.`)) {
      await deleteFolder(folderId);
    }
  };

  if (loading && folders.length === 0) { // Muestra loading solo si no hay carpetas para mostrar
    return <p className="text-slate-500 text-center py-4">Loading folders...</p>;
  }

  if (error) {
    return (
      <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200 text-center">
        Error fetching folders: {error}
      </p>
    );
  }

  if (folders.length === 0) {
    return <p className="text-slate-500 text-center py-4">No folders yet. Create one above!</p>;
  }

  return (
    <div className="space-y-4"> {/* Aumentado el espaciado entre carpetas */}
      <h3 className="text-2xl font-semibold text-slate-700 mb-4">Your Folders</h3> {/* Ajuste de tamaño, color y margen */}
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="p-5 bg-white shadow-sm rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0" // Padding aumentado, sombra más sutil, responsive
        >
          <span className="text-slate-700 font-medium text-lg">{folder.name}</span> {/* Tamaño de texto aumentado */}
          <div className="space-x-2 flex-shrink-0">
            <button
              onClick={() => handleRename(folder.id, folder.name)}
              className="px-3.5 py-1.5 text-sm bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              Rename
            </button>
            <button
              onClick={() => handleDelete(folder.id, folder.name)}
              className="px-3.5 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
