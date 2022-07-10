import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MarkdownFile } from '@interfaces/document.interface';

type StateProps = {
  document: MarkdownFile;
  documents: MarkdownFile[];
};

const RootSlice = createSlice({
  name: 'root',
  initialState: {
    document: {
      id: '0',
      name: 'welcome',
      content: '# Hello, World!'
    }
  } as StateProps,
  reducers: {
    setDocumentContent: (
      state: StateProps,
      { payload }: PayloadAction<string>
    ) => {
      state.document.content = payload;
      return state;
    }
  }
});

export const { setDocumentContent } = RootSlice.actions;

export default RootSlice.reducer;
