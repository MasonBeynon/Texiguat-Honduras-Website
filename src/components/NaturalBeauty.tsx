import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const NaturalContainer = styled.section`
  background: white;
`;

const NaturalHeader = styled.div`
  background: linear-gradient(135deg, #007bff, #00d4ff);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const NaturalHeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const NaturalHeaderSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const NaturalContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 2rem;
`;

const NaturalTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const NaturalDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: #28a745;
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(40,167,69,0.15);
  }
`;

const FeatureImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;

  &::before {
    content: var(--emoji, '🏔️');
    font-size: 3rem;
    opacity: 0.3;
  }

  &::after {
    content: 'Natural Beauty Image';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

const FeatureImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: white;
`;

const FeatureImageActual = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #28a745, #20c997);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
`;

const HighlightsSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-top: 3rem;
  text-align: left;
`;

const HighlightsTitle = styled.h3`
  font-size: 1.8rem;
  color: #28a745;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightItem = styled.li`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  color: #333;
  font-weight: 500;
  text-align: center;
  border-left: 4px solid #28a745;
  
  &:before {
    content: '🌿';
    margin-right: 0.5rem;
  }
`;

const NaturalBeauty: React.FC = () => {
  const { t } = useTranslation();

  const highlights = t('natural.highlights').split(', ');

  return (
    <NaturalContainer>
      <NaturalHeader>
        <NaturalHeaderTitle>{t('natural.title')}</NaturalHeaderTitle>
      </NaturalHeader>
      <NaturalContent>
        <NaturalDescription>{t('natural.description')}</NaturalDescription>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureImageContainer>
              <FeatureImageActual src="/images/natural/Rolling Hills.jpg" alt="Rolling Hills" />
            </FeatureImageContainer>
            <FeatureIcon>🏔️</FeatureIcon>
            <FeatureTitle>{t('natural.features.rollingHills.title')}</FeatureTitle>
            <FeatureText>{t('natural.features.rollingHills.description')}</FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureImageContainer>
              <FeatureImageActual src="/images/natural/Nueva Armania.jpg" alt="Nueva Armenia" />
            </FeatureImageContainer>
            <FeatureIcon>🏞️</FeatureIcon>
            <FeatureTitle>{t('natural.features.nuevaArmenia.title')}</FeatureTitle>
            <FeatureText>{t('natural.features.nuevaArmenia.description')}</FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureImageContainer>
              <FeatureImageActual src="/images/natural/Bridge.jpg" alt="River Bridge" />
            </FeatureImageContainer>
            <FeatureIcon>🌉</FeatureIcon>
            <FeatureTitle>{t('natural.features.riverBridge.title')}</FeatureTitle>
            <FeatureText>{t('natural.features.riverBridge.description')}</FeatureText>
          </FeatureCard>
        </FeaturesGrid>

        <HighlightsSection>
          <HighlightsTitle>{t('natural.highlightsTitle')}</HighlightsTitle>
          <HighlightsList>
            {highlights.map((highlight: string, index: number) => (
              <HighlightItem key={index}>{highlight}</HighlightItem>
            ))}
          </HighlightsList>
        </HighlightsSection>
      </NaturalContent>
    </NaturalContainer>
  );
};

export default NaturalBeauty; 