import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FacebookContainer = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1877f2 0%, #0d6efd 100%);
  color: white;
`;

const FacebookContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const FacebookTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const FacebookDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.95;
`;

const FacebookCard = styled.div`
  background: white;
  color: #333;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  margin-bottom: 2rem;
`;

const FacebookIcon = styled.div`
  width: 100px;
  height: 100px;
  background: #1877f2;
  border-radius: 50%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 25px rgba(24, 119, 242, 0.4);
  
  svg {
    width: 50px;
    height: 50px;
    fill: white;
  }
`;

const FacebookCardTitle = styled.h3`
  font-size: 1.8rem;
  color: #1877f2;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const FacebookCardText = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const FacebookButton = styled.a`
  background: #1877f2;
  color: white;
  text-decoration: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(24, 119, 242, 0.4);

  &:hover {
    background: #0d6efd;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(24, 119, 242, 0.5);
  }
`;

const UpdateNote = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const UpdateNoteText = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
`;

const Facebook: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FacebookContainer>
      <FacebookContent>
        <FacebookTitle>{t('stayUpdated.title')}</FacebookTitle>
        <FacebookDescription>
          {t('stayUpdated.description')}
        </FacebookDescription>
        
        <FacebookCard>
          <FacebookIcon>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </FacebookIcon>
          <FacebookCardTitle>{t('stayUpdated.facebookPage')}</FacebookCardTitle>
          <FacebookCardText>
            {t('stayUpdated.facebookDescription')}
            <br />• {t('stayUpdated.facebookFeatures.0')}
            <br />• {t('stayUpdated.facebookFeatures.1')}
            <br />• {t('stayUpdated.facebookFeatures.2')}
            <br />• {t('stayUpdated.facebookFeatures.3')}
            <br />• {t('stayUpdated.facebookFeatures.4')}
          </FacebookCardText>
          <FacebookButton 
            href="https://www.facebook.com/texiguat" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t('stayUpdated.visitButton')}
          </FacebookButton>
        </FacebookCard>

        <UpdateNote>
          <UpdateNoteText>
            {t('stayUpdated.note')}
          </UpdateNoteText>
        </UpdateNote>
      </FacebookContent>
    </FacebookContainer>
  );
};

export default Facebook; 