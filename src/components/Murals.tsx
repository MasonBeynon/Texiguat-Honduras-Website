import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const MuralsContainer = styled.section`
  background: white;
`;

const MuralsHeader = styled.div`
  background: linear-gradient(135deg, #007bff, #00d4ff);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const MuralsHeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const MuralsHeaderSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MuralsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const MuralsTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  font-weight: bold;
  text-align: center;
`;

const MuralRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  background: #f8f9fa;
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

const MuralRowAlternate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  background: #f8f9fa;
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

const MuralImage = styled.div`
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
    content: '🖼️';
    font-size: 4rem;
    opacity: 0.3;
  }

  &::after {
    content: 'Mural Image';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

const MuralContent = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const MuralTitle = styled.h3`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const MuralDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const MuralSubtitle = styled.h4`
  font-size: 1.2rem;
  color: #007bff;
  margin: 1.5rem 0 0.8rem 0;
  font-weight: 600;
`;

const MuralText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Murals: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MuralsContainer>
      <MuralsHeader>
        <MuralsHeaderTitle>{t('murals.title')}</MuralsHeaderTitle>
      </MuralsHeader>
      <MuralsContent>
        
        <MuralRow>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.october1.title')}</MuralTitle>
            <MuralDescription>{t('murals.october1.description')}</MuralDescription>
            <MuralSubtitle>{t('murals.october1.celebrationTitle')}</MuralSubtitle>
            <MuralText>{t('murals.october1.celebration')}</MuralText>
          </MuralContent>
        </MuralRow>
        
        <MuralRowAlternate>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.porceres.title')}</MuralTitle>
            <MuralDescription>{t('murals.porceres.description')}</MuralDescription>
          </MuralContent>
        </MuralRowAlternate>
        
        <MuralRow>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.heroes.title')}</MuralTitle>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
              <div>
                <MuralSubtitle>José Cecilio de Valle</MuralSubtitle>
                <MuralText>{t('murals.heroes.valle')}</MuralText>
                
                <MuralSubtitle>Lempira</MuralSubtitle>
                <MuralText>{t('murals.heroes.lempira')}</MuralText>
              </div>
              
              <div>
                <MuralSubtitle>José Trinidad Reyes</MuralSubtitle>
                <MuralText>{t('murals.heroes.reyes')}</MuralText>
                
                <MuralSubtitle>Francisco Morazán</MuralSubtitle>
                <MuralText>{t('murals.heroes.morazan')}</MuralText>
              </div>
            </div>
          </MuralContent>
        </MuralRow>
        
        <MuralRowAlternate>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.chess.title')}</MuralTitle>
            <MuralDescription>{t('murals.chess.description')}</MuralDescription>
          </MuralContent>
        </MuralRowAlternate>
        
        <MuralRow>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.devil.title')}</MuralTitle>
            <MuralDescription>{t('murals.devil.description')}</MuralDescription>
          </MuralContent>
        </MuralRow>
        
        <MuralRowAlternate>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.lastnames.title')}</MuralTitle>
            <MuralDescription>{t('murals.lastnames.description')}</MuralDescription>
          </MuralContent>
        </MuralRowAlternate>
        
        <MuralRow>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.indigenous.title')}</MuralTitle>
            <MuralDescription>{t('murals.indigenous.description')}</MuralDescription>
          </MuralContent>
        </MuralRow>
        
        <MuralRowAlternate>
          <MuralImage />
          <MuralContent>
            <MuralTitle>{t('murals.mythical.title')}</MuralTitle>
            <MuralDescription>{t('murals.mythical.description')}</MuralDescription>
          </MuralContent>
        </MuralRowAlternate>
      </MuralsContent>
    </MuralsContainer>
  );
};

export default Murals; 