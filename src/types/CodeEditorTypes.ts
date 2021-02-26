export type MonacoEditorLanguageOption = 'javascript' | 'typescript' | 'python';

export type ESBuildLanguageOption = 'ts' | 'js' | 'tsx' | 'jsx';

export interface EditorLanguageConfig {
  displayName: string;
  editorLanguageOption: MonacoEditorLanguageOption;
  bundlerLanguageOption: ESBuildLanguageOption;
}

export const TypeScriptLanguageConfig: EditorLanguageConfig = {
  displayName: 'TypeScript',
  editorLanguageOption: 'typescript',
  bundlerLanguageOption: 'tsx',
};

export const JavaScriptLanguageConfig: EditorLanguageConfig = {
  displayName: 'JavaScript',
  editorLanguageOption: 'javascript',
  bundlerLanguageOption: 'jsx',
};
