import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

// Mock dos componentes de seção para testar a página de forma isolada
jest.mock('@/components/sections/HeaderSection', () => ({ __esModule: true, default: () => <div data-testid="header-section">Header Mock</div> }));
jest.mock('@/components/sections/HeroSection', () => ({ __esModule: true, default: () => <div data-testid="hero-section">Hero Mock</div> }));
jest.mock('@/components/sections/AboutSection', () => ({ __esModule: true, default: () => <div data-testid="about-section">About Mock</div> }));
jest.mock('@/components/sections/ServicesSection', () => ({ __esModule: true, default: () => <div data-testid="services-section">Services Mock</div> }));
jest.mock('@/components/sections/PlansSection', () => ({ __esModule: true, default: () => <div data-testid="plans-section">Plans Mock</div> }));
jest.mock('@/components/sections/HowItWorksSection', () => ({ __esModule: true, default: () => <div data-testid="how-it-works-section">How It Works Mock</div> }));
jest.mock('@/components/sections/SimuladorSection', () => ({ __esModule: true, default: () => <div data-testid="simulador-section">Simulador Mock</div> }));
jest.mock('@/components/sections/ContactSection', () => ({ __esModule: true, default: () => <div data-testid="contact-section">Contact Mock</div> }));
jest.mock('@/components/sections/FooterSection', () => ({ __esModule: true, default: () => <div data-testid="footer-section">Footer Mock</div> }));

describe('HomePage', () => {
  it('renderiza todos os componentes de seção', () => {
    render(<HomePage />);
    
    // Verifica se todos os componentes de seção estão presentes na página
    expect(screen.getByTestId('header-section')).toBeInTheDocument();
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('services-section')).toBeInTheDocument();
    expect(screen.getByTestId('plans-section')).toBeInTheDocument();
    expect(screen.getByTestId('how-it-works-section')).toBeInTheDocument();
    expect(screen.getByTestId('simulador-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    expect(screen.getByTestId('footer-section')).toBeInTheDocument();
  });

  it('possui a classe de estilo correta no contêiner principal', () => {
    const { container } = render(<HomePage />);
    
    // Verifica se o contêiner principal tem as classes CSS esperadas
    // Pegamos o primeiro elemento div no container, que deve ser nosso contêiner principal
    const mainContainer = container.firstChild;
    expect(mainContainer).toHaveClass('min-h-screen');
    expect(mainContainer).toHaveClass('bg-white');
    expect(mainContainer).toHaveClass('text-gray-800');
  });

  it('mantém a ordem correta dos componentes de seção', () => {
    render(<HomePage />);
    
    const sections = screen.getAllByTestId(/-section$/);
    
    // Verifica se os componentes estão na ordem esperada
    expect(sections[0]).toHaveAttribute('data-testid', 'header-section');
    expect(sections[1]).toHaveAttribute('data-testid', 'hero-section');
    expect(sections[2]).toHaveAttribute('data-testid', 'about-section');
    expect(sections[3]).toHaveAttribute('data-testid', 'services-section');
    expect(sections[4]).toHaveAttribute('data-testid', 'plans-section');
    expect(sections[5]).toHaveAttribute('data-testid', 'how-it-works-section');
    expect(sections[6]).toHaveAttribute('data-testid', 'simulador-section');
    expect(sections[7]).toHaveAttribute('data-testid', 'contact-section');
    expect(sections[8]).toHaveAttribute('data-testid', 'footer-section');
  });
});