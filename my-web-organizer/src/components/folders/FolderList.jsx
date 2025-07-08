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
    return <p className="text-gray-500">Loading folders...</p>;
  }

  if (error) {
    return <p className="text-red-600">Error fetching folders: {error}</p>;
  }

  if (folders.length === 0) {
    return <p className="text-gray-500">No folders yet. Create one above!</p>;
  }

  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Folders</h3>
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
        >
          <span className="text-gray-700 font-medium">{folder.name}</span>
          <div className="space-x-2">
            <button
              onClick={() => handleRename(folder.id, folder.name)}
              className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Rename
            </button>
            <button
              onClick={() => handleDelete(folder.id, folder.name)}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50"
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
