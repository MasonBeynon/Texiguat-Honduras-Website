import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';

type Page = 'home' | 'history' | 'murals' | 'natural' | 'stay-updated';

interface NavigationProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const NavContainer = styled.nav`
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.9rem;
  }
`;

const NavLink = styled.button<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? '#007bff' : '#333'};
  font-weight: ${props => props.$isActive ? '600' : '500'};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  position: relative;
  font-size: 1rem;

  &:hover {
    color: #007bff;
  }

  ${props => props.$isActive && `
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: #007bff;
      border-radius: 1px;
    }
  `}
`;

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const { t } = useTranslation();

  const handlePageChange = (page: Page) => {
    onPageChange(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo onClick={() => handlePageChange('home')}>Texiguat, Honduras</Logo>
        <NavLinks>
          <NavLink 
            $isActive={currentPage === 'home'}
            onClick={() => handlePageChange('home')}
          >
            {t('navigation.home')}
          </NavLink>
          <NavLink 
            $isActive={currentPage === 'history'}
            onClick={() => handlePageChange('history')}
          >
            {t('navigation.history')}
          </NavLink>
          <NavLink 
            $isActive={currentPage === 'murals'}
            onClick={() => handlePageChange('murals')}
          >
            {t('navigation.murals')}
          </NavLink>
          <NavLink 
            $isActive={currentPage === 'natural'}
            onClick={() => handlePageChange('natural')}
          >
            {t('navigation.natural')}
          </NavLink>
          <NavLink 
            $isActive={currentPage === 'stay-updated'}
            onClick={() => handlePageChange('stay-updated')}
          >
            {t('navigation.stayUpdated')}
          </NavLink>
          <LanguageSwitcher />
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation; 