import { create } from 'zustand';
import { supabase } from '../services/supabaseClient';
import useAuthStore from './authStore'; // Para obtener el user_id
import toast from 'react-hot-toast';

const folderStore = create((set, get) => ({
  folders: [],
  loading: false,
  error: null,

  // Fetch folders for the current user
  fetchFolders: async () => {
    const user = useAuthStore.getState().user;
    if (!user) {
      set({ folders: [], error: 'User not authenticated' });
      return;
    }

    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('folders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true });

      if (error) {
        toast.error(`Error fetching folders: ${error.message}`);
        throw error;
      }
      set({ folders: data || [], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      // Toast ya mostrado
    }
  },

  // Add a new folder
  addFolder: async (folderName) => {
    const user = useAuthStore.getState().user;
    if (!user) {
      const msg = 'User not authenticated for adding folder';
      set({ error: msg });
      toast.error(msg);
      return null;
    }
    if (!folderName || folderName.trim() === '') {
      const msg = 'Folder name cannot be empty';
      set({ error: msg });
      toast.error(msg);
      return null;
    }

    set({ loading: true, error: null });
    const toastId = toast.loading('Adding folder...');
    try {
      const { data, error } = await supabase
        .from('folders')
        .insert([{ name: folderName.trim(), user_id: user.id }])
        .select();

      if (error) {
        toast.error(error.message, { id: toastId });
        throw error;
      }

      if (data && data.length > 0) {
        set((state) => ({
          folders: [...state.folders, data[0]],
          loading: false,
        }));
        toast.success('Folder added successfully!', { id: toastId });
        return data[0];
      }
      set({loading: false });
      toast.dismiss(toastId);
      return null;

    } catch (error) {
      set({ error: error.message, loading: false });
      if (!error.message.includes('supabase')) { // Avoid double toast
         // toast.error(`Failed to add folder: ${error.message}`, { id: toastId });
      }
      return null;
    }
  },

  // Update an existing folder (rename)
  updateFolder: async (folderId, newName) => {
    if (!newName || newName.trim() === '') {
      const msg = 'New folder name cannot be empty';
      set({ error: msg });
      toast.error(msg);
      return null;
    }
    set({ loading: true, error: null });
    const toastId = toast.loading('Updating folder...');
    try {
      const { data, error } = await supabase
        .from('folders')
        .update({ name: newName.trim() })
        .eq('id', folderId)
        .select();

      if (error) {
        toast.error(error.message, { id: toastId });
        throw error;
      }

      if (data && data.length > 0) {
        set((state) => ({
          folders: state.folders.map((folder) =>
            folder.id === folderId ? data[0] : folder
          ),
          loading: false,
        }));
        toast.success('Folder updated successfully!', { id: toastId });
        return data[0];
      }
      set({ loading: false });
      toast.dismiss(toastId);
      return null;

    } catch (error) {
      set({ error: error.message, loading: false });
      // Toast ya mostrado
      return null;
    }
  },

  // Delete a folder
  deleteFolder: async (folderId) => {
    set({ loading: true, error: null });
    const toastId = toast.loading('Deleting folder...');
    try {
      const { error } = await supabase
        .from('folders')
        .delete()
        .eq('id', folderId);

      if (error) {
        toast.error(error.message, { id: toastId });
        throw error;
      }

      set((state) => ({
        folders: state.folders.filter((folder) => folder.id !== folderId),
        loading: false,
      }));
      toast.success('Folder deleted successfully!', { id: toastId });
      return true;
    } catch (error) {
      set({ error: error.message, loading: false });
      // Toast ya mostrado
      return false;
    }
  },
}));

export default folderStore;
