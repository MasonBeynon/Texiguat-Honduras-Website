import React, { useState } from 'react';
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MuralsContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: #f0f0f0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 400px;
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 800px;
  object-fit: contain;
  display: block;
  user-select: none;

  @media (max-width: 768px) {
    max-height: 500px;
  }
`;

const Pin = styled.button<{ x: number; y: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  transform: translate(-50%, -100%);
  background: #007bff;
  border: 3px solid white;
  border-radius: 50% 50% 50% 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 123, 255, 0.4);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: translate(-50%, -100%) scale(1.2);
    background: #0056b3;
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid white;
  }
`;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: ${props => props.isOpen ? 'fadeIn' : 'none'} 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 15px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: rotate(90deg);
  }
`;

const ModalImage = styled.div`
  width: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &::before {
    content: '🖼️';
    font-size: 4rem;
    opacity: 0.3;
    position: absolute;
  }

  &::after {
    content: 'Mural Image';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    opacity: 0.7;
    color: #6c757d;
  }
`;

const ModalText = styled.div`
  padding: 2.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ModalDescription = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const ModalSubtitle = styled.h3`
  font-size: 1.3rem;
  color: #007bff;
  margin: 1.5rem 0 0.8rem 0;
  font-weight: 600;
`;

const ModalTextContent = styled.p`
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const HeroesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface MuralData {
  id: string;
  x: number; // percentage position on map
  y: number; // percentage position on map
  imagePath?: string;
  translationKey: string;
  hasExtraContent?: boolean;
}

const Murals: React.FC = () => {
  const { t } = useTranslation();
  const [selectedMural, setSelectedMural] = useState<string | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  // Mural positions on the map (x, y as percentages)
  // These can be adjusted based on actual mural locations
  const murals: MuralData[] = [
    {
      id: 'october1',
      x: 30,
      y: 25,
      imagePath: '/images/murals/october1-independence.jpg',
      translationKey: 'october1',
      hasExtraContent: true
    },
    {
      id: 'porceres',
      x: 45,
      y: 40,
      imagePath: '/images/murals/porceres-chicken.jpg',
      translationKey: 'porceres'
    },
    {
      id: 'heroes',
      x: 60,
      y: 30,
      imagePath: '/images/murals/heroes-mural.jpg',
      translationKey: 'heroes',
      hasExtraContent: true
    },
    {
      id: 'chess',
      x: 55,
      y: 50,
      imagePath: '/images/murals/chess-mural.jpg',
      translationKey: 'chess'
    },
    {
      id: 'devil',
      x: 40,
      y: 60,
      imagePath: '/images/murals/devil-church-mural.jpg',
      translationKey: 'devil'
    },
    {
      id: 'lastnames',
      x: 50,
      y: 20,
      imagePath: '/images/murals/lastnames-mural.jpg',
      translationKey: 'lastnames'
    },
    {
      id: 'indigenous',
      x: 35,
      y: 45,
      imagePath: '/images/murals/indigenous-life-mural.jpg',
      translationKey: 'indigenous'
    },
    {
      id: 'mythical',
      x: 65,
      y: 55,
      imagePath: '/images/murals/mythical-music-mural.jpg',
      translationKey: 'mythical'
    }
  ];

  const handlePinClick = (muralId: string) => {
    setSelectedMural(muralId);
  };

  const handleCloseModal = () => {
    setSelectedMural(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedMural) {
        handleCloseModal();
      }
    };

    if (selectedMural) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedMural]);

  const handleImageError = (muralId: string) => {
    setImageError(prev => ({ ...prev, [muralId]: true }));
  };

  const selectedMuralData = murals.find(m => m.id === selectedMural);

  return (
    <MuralsContainer>
      <MuralsHeader>
        <MuralsHeaderTitle>{t('murals.title')}</MuralsHeaderTitle>
      </MuralsHeader>
      <MuralsContent>
        <MapWrapper>
          <MapImage 
            src="/images/about/Texiguat-satalite.png" 
            alt="Texiguat Satellite Map"
          />
          {murals.map((mural) => (
            <Pin
              key={mural.id}
              x={mural.x}
              y={mural.y}
              onClick={() => handlePinClick(mural.id)}
              aria-label={t(`murals.${mural.translationKey}.title`)}
            />
          ))}
        </MapWrapper>

        <ModalOverlay isOpen={selectedMural !== null} onClick={handleOverlayClick}>
          {selectedMuralData && (
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleCloseModal} aria-label="Close">
                ×
              </CloseButton>
              
              <ModalImage>
                {selectedMuralData.imagePath && !imageError[selectedMuralData.id] ? (
                  <img 
                    src={selectedMuralData.imagePath} 
                    alt={t(`murals.${selectedMuralData.translationKey}.title`)}
                    onError={() => handleImageError(selectedMuralData.id)}
                  />
                ) : null}
              </ModalImage>

              <ModalText>
                <ModalTitle>{t(`murals.${selectedMuralData.translationKey}.title`)}</ModalTitle>
                <ModalDescription>
                  {t(`murals.${selectedMuralData.translationKey}.description`)}
                </ModalDescription>

                {selectedMuralData.id === 'october1' && (
                  <>
                    <ModalSubtitle>{t('murals.october1.celebrationTitle')}</ModalSubtitle>
                    <ModalTextContent>{t('murals.october1.celebration')}</ModalTextContent>
                  </>
                )}

                {selectedMuralData.id === 'heroes' && (
                  <HeroesGrid>
                    <div>
                      <ModalSubtitle>José Cecilio de Valle</ModalSubtitle>
                      <ModalTextContent>{t('murals.heroes.valle')}</ModalTextContent>
                      
                      <ModalSubtitle>Lempira</ModalSubtitle>
                      <ModalTextContent>{t('murals.heroes.lempira')}</ModalTextContent>
                    </div>
                    
                    <div>
                      <ModalSubtitle>José Trinidad Reyes</ModalSubtitle>
                      <ModalTextContent>{t('murals.heroes.reyes')}</ModalTextContent>
                      
                      <ModalSubtitle>Francisco Morazán</ModalSubtitle>
                      <ModalTextContent>{t('murals.heroes.morazan')}</ModalTextContent>
                    </div>
                  </HeroesGrid>
                )}
              </ModalText>
            </ModalContent>
          )}
        </ModalOverlay>
      </MuralsContent>
    </MuralsContainer>
  );
};

export default Murals;
