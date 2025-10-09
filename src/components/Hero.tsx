import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HeroContainer = styled.section`
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/hero/Town Church.png');
  background-size: cover;
  background-position: center;
  transform: translateY(0);
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const HeroContent = styled.div`
  max-width: 900px;
  position: relative;
  z-index: 3;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  color: white;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
  color: white;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 3;

  &:hover {
    background: linear-gradient(45deg, #ff5252, #ff7043);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const backgroundRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroContainer>
      <BackgroundImage ref={backgroundRef} />
      <Overlay />
      <HeroContent>
        <HeroTitle>{t('hero.title')}</HeroTitle>
        <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
        <CTAButton>{t('hero.cta')}</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 