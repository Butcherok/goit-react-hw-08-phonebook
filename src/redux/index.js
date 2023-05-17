export {
  contactsApi,
  useFetchContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
} from './contacts/operations';
export { setFilter } from './filterSlice';
// export { setTheme } from './themeSlice';

export * from './selectors';

export * from './auth/operations';
export { signUp, signIn, logOut, refresh } from './auth/slice';
