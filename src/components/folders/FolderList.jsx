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
    return <p className="text-slate-500 text-center py-4 px-2">No folders yet.</p>;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-slate-700 mb-3 px-2">Your Folders</h3>
      <nav>
        <ul className="space-y-1">
          {folders.map((folder) => (
            <li key={folder.id}>
              <a
                href="#" // Placeholder link, should eventually navigate to the folder's content
                onClick={(e) => e.preventDefault()} // Prevent default for now
                className="group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                <span className="truncate">{folder.name}</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity space-x-1 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering link navigation
                      handleRename(folder.id, folder.name);
                    }}
                    className="p-1 text-xs bg-slate-200 text-slate-600 rounded hover:bg-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:opacity-60"
                    disabled={loading}
                    title="Rename folder"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering link navigation
                      handleDelete(folder.id, folder.name);
                    }}
                    className="p-1 text-xs bg-red-200 text-red-700 rounded hover:bg-red-300 focus:outline-none focus:ring-1 focus:ring-red-400 disabled:opacity-60"
                    disabled={loading}
                    title="Delete folder"
                  >
                    🗑️
                  </button>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FolderList;
