import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HistoryContainer = styled.section`
  background: white;
`;

const HistoryHeader = styled.div`
  background: linear-gradient(135deg, #007bff, #00d4ff);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const HistoryHeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const HistoryHeaderSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const HistoryContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const HistoryTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  font-weight: bold;
  text-align: center;
`;

const HistoryRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    text-align: center;
  }
`;

const HistoryRowAlternate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  flex-direction: row-reverse;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    text-align: center;
  }
`;

const HistoryImage = styled.div`
  flex: 1;
  min-height: 300px;
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '🏛️';
    font-size: 4rem;
    opacity: 0.3;
  }

  &::after {
    content: 'History Image';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

const HistoryTextContent = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const HistoryCardTitle = styled.h3`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const HistoryCardDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const HistoryCardSubtitle = styled.h4`
  font-size: 1.3rem;
  color: #333;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`;

const HistoryCardText = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const History: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HistoryContainer>
      <HistoryHeader>
        <HistoryHeaderTitle>{t('history.title')}</HistoryHeaderTitle>
      </HistoryHeader>
      <HistoryContentWrapper>
        <HistoryRowAlternate>
          <HistoryImage />
          <HistoryTextContent>
            <HistoryCardTitle>{t('history.families.title')}</HistoryCardTitle>
            <HistoryCardDescription>{t('history.families.description')}</HistoryCardDescription>
          </HistoryTextContent>
        </HistoryRowAlternate>
        
        <HistoryRow>
          <HistoryImage />
          <HistoryTextContent>
            <HistoryCardTitle>{t('history.morazan.title')}</HistoryCardTitle>
            <HistoryCardDescription>{t('history.morazan.description')}</HistoryCardDescription>
            <HistoryCardSubtitle>{t('history.morazan.legacyTitle')}</HistoryCardSubtitle>
            <HistoryCardText>{t('history.morazan.legacy')}</HistoryCardText>
          </HistoryTextContent>
        </HistoryRow>
        
        <HistoryRowAlternate>
          <HistoryImage />
          <HistoryTextContent>
            <HistoryCardTitle>{t('history.church.title')}</HistoryCardTitle>
            <HistoryCardDescription>{t('history.church.description')}</HistoryCardDescription>
            <HistoryCardSubtitle>{t('history.church.jaguarsTitle')}</HistoryCardSubtitle>
            <HistoryCardText>{t('history.church.jaguars')}</HistoryCardText>
            <HistoryCardSubtitle>{t('history.church.legendTitle')}</HistoryCardSubtitle>
            <HistoryCardText>{t('history.church.legend')}</HistoryCardText>
          </HistoryTextContent>
        </HistoryRowAlternate>
      </HistoryContentWrapper>
    </HistoryContainer>
  );
};

export default History; 