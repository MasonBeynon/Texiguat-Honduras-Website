import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const AboutDescription = styled.p`
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
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #007bff;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const LocationInfo = styled.div`
  background: linear-gradient(135deg, #007bff, #00d4ff);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin: 3rem 0;
  text-align: center;
`;

const LocationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const LocationText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const LocationImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const MapsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const TownImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TownImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const MapLabel = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 0.5rem;
  opacity: 0.9;
  font-weight: 500;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>{t('about.title')}</AboutTitle>
        <AboutDescription>{t('about.description')}</AboutDescription>
        
        <LocationInfo>
          <LocationTitle>{t('about.locationTitle')}</LocationTitle>
          <LocationText>{t('about.location')}</LocationText>
          <MapsGrid>
            <MapWrapper>
              <LocationImage src="/images/about/location-map.png" alt="Location Map" />
            </MapWrapper>
            <TownImageWrapper>
              <TownImage src="/images/about/Texiguat-satalite.png" alt="Texiguat Satellite Map" />
            </TownImageWrapper>
          </MapsGrid>
        </LocationInfo>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🏨</FeatureIcon>
            <FeatureTitle>{t('about.features.hotel.title')}</FeatureTitle>
            <FeatureText>{t('about.features.hotel.description')}</FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🏫</FeatureIcon>
            <FeatureTitle>{t('about.features.school.title')}</FeatureTitle>
            <FeatureText>{t('about.features.school.description')}</FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🏛️</FeatureIcon>
            <FeatureTitle>{t('about.features.government.title')}</FeatureTitle>
            <FeatureText>{t('about.features.government.description')}</FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>⛪</FeatureIcon>
            <FeatureTitle>{t('about.features.church.title')}</FeatureTitle>
            <FeatureText>{t('about.features.church.description')}</FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🏪</FeatureIcon>
            <FeatureTitle>{t('about.features.pulperias.title')}</FeatureTitle>
            <FeatureText>{t('about.features.pulperias.description')}</FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🎨</FeatureIcon>
            <FeatureTitle>{t('about.features.murals.title')}</FeatureTitle>
            <FeatureText>{t('about.features.murals.description')}</FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 