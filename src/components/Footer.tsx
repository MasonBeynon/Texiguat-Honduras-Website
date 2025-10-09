import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Page = 'home' | 'history' | 'murals' | 'natural' | 'stay-updated';

interface FooterProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 2rem;

  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 2rem;
  margin-top: 2rem;
  text-align: center;
  color: #95a5a6;
`;

const FooterLink = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  padding: 0;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  display: block;
  width: 100%;

  &:hover {
    color: #0056b3;
  }
`;

const Footer: React.FC<FooterProps> = ({ currentPage, onPageChange }) => {
  const { t } = useTranslation();

  const handlePageChange = (page: Page) => {
    onPageChange(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>{t('footer.texiguat')}</h3>
          <p>{t('footer.description')}</p>
        </FooterSection>
        
        <FooterSection>
          <h3>{t('footer.quickLinks')}</h3>
          <FooterLink onClick={() => handlePageChange('home')}>{t('navigation.home')}</FooterLink>
          <FooterLink onClick={() => handlePageChange('history')}>{t('navigation.history')}</FooterLink>
          <FooterLink onClick={() => handlePageChange('murals')}>{t('navigation.murals')}</FooterLink>
          <FooterLink onClick={() => handlePageChange('natural')}>{t('navigation.natural')}</FooterLink>
          <FooterLink onClick={() => handlePageChange('stay-updated')}>{t('navigation.stayUpdated')}</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <h3>{t('footer.location')}</h3>
          <p>{t('footer.locationDetails.0')}</p>
          <p>{t('footer.locationDetails.1')}</p>
          <p>{t('footer.locationDetails.2')}</p>
        </FooterSection>
        
        <FooterSection>
          <h3>{t('footer.stayConnected')}</h3>
          <p>{t('footer.stayConnectedDescription')}</p>
          <p style={{ fontSize: '0.9rem', color: '#95a5a6' }}>
            <a href="https://www.facebook.com/texiguat" target="_blank" rel="noopener noreferrer" style={{ color: '#3498db' }}>
              {t('footer.followFacebook')}
            </a>
          </p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>{t('footer.copyright')}</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 