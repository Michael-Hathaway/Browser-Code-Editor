import { EditorLanguageConfig } from '../types';

interface LanguageOptionDropdownProps {
  languageConfigList: EditorLanguageConfig[];
  language: EditorLanguageConfig;
  setLanguage: (language: EditorLanguageConfig) => void;
}

const LanguageOptionDropdown: React.FC<LanguageOptionDropdownProps> = ({
  languageConfigList,
  language,
  setLanguage,
}) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    for (let i = 0; i < languageConfigList.length; i++) {
      if (languageConfigList[i].displayName === event.target.value) {
        setLanguage(languageConfigList[i]);
      }
    }
  };

  const renderLanguageOptions = () => {
    return languageConfigList.map((languageOption) => {
      return (
        <option
          key={languageOption.displayName}
          value={languageOption.displayName}
        >
          {languageOption.displayName}
        </option>
      );
    });
  };

  return (
    <select value={language.displayName} onChange={handleLanguageChange}>
      {renderLanguageOptions()}
    </select>
  );
};

export default LanguageOptionDropdown;
