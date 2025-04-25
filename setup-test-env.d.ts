import '@testing-library/jest-dom/matchers';

declare global {
  namespace jest {
    interface Matchers<R = void> {
      toBeInTheDocument(): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveClass(...classNames: string[]): R;
      // Adicione outros matchers do jest-dom que você estiver usando e causando erros
    }
  }
}