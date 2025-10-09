import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LanguageButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#007bff' : 'transparent'};
  color: ${props => props.active ? 'white' : '#007bff'};
  border: 1px solid #007bff;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.active ? '#0056b3' : '#f8f9fa'};
  }
`;

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContainer>
      <LanguageButton
        active={i18n.language === 'en'}
        onClick={() => changeLanguage('en')}
      >
        {t('language.en')}
      </LanguageButton>
      <LanguageButton
        active={i18n.language === 'es'}
        onClick={() => changeLanguage('es')}
      >
        {t('language.es')}
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSwitcher; 