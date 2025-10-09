import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #007bff;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,123,255,0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #007bff, #00d4ff);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #007bff, #00d4ff);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ServiceButton = styled.button`
  background: transparent;
  color: #007bff;
  border: 2px solid #007bff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #007bff;
    color: white;
  }
`;

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <ServicesTitle>{t('services.title')}</ServicesTitle>
        
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🏖️</ServiceIcon>
            <ServiceTitle>{t('services.tourism')}</ServiceTitle>
            <ServiceDescription>
              {t('services.tourismDescription')}
            </ServiceDescription>
            <ServiceButton>{t('services.learnMore')}</ServiceButton>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🎭</ServiceIcon>
            <ServiceTitle>{t('services.culture')}</ServiceTitle>
            <ServiceDescription>
              {t('services.cultureDescription')}
            </ServiceDescription>
            <ServiceButton>{t('services.discover')}</ServiceButton>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🧗</ServiceIcon>
            <ServiceTitle>{t('services.adventure')}</ServiceTitle>
            <ServiceDescription>
              {t('services.adventureDescription')}
            </ServiceDescription>
            <ServiceButton>{t('services.explore')}</ServiceButton>
          </ServiceCard>
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services; 