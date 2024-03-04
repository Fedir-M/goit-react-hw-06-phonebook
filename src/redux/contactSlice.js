import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
