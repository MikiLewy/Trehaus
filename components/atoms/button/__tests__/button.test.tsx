import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../button';

describe('Button', () => {
  it('should render button with loading state', () => {
    const buttonContent = 'test';
    const buttonLoadingContent = 'Ładowanie...';

    render(<Button loading>{buttonContent}</Button>);

    const button = screen.getByText(buttonLoadingContent);

    expect(button).toBeInTheDocument();
  });

  it('should render button with disabled state', () => {
    const buttonContent = 'test';

    render(<Button disabled>{buttonContent}</Button>);

    const button = screen.getByText(buttonContent);

    expect(button).toBeDisabled();
  });

  it('should call onClick function when button is clicked', () => {
    const buttonContent = 'test';

    const onClick = vi.fn();

    render(<Button onClick={onClick}>{buttonContent}</Button>);

    const button = screen.getByText(buttonContent);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick function when button is disabled', () => {
    const buttonContent = 'test';

    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        {buttonContent}
      </Button>,
    );

    const button = screen.getByText(buttonContent);

    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not call onClick function when button is loading', () => {
    const buttonContent = 'test';
    const buttonLoadingContent = 'Ładowanie...';

    const onClick = vi.fn();

    render(<Button loading>{buttonContent}</Button>);

    const button = screen.getByText(buttonLoadingContent);

    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render button with custom class', () => {
    const buttonContent = 'test';
    const customClass = 'custom-class';

    render(<Button className={customClass}>{buttonContent}</Button>);

    const button = screen.getByText(buttonContent);

    expect(button).toHaveClass(customClass);
  });

  it('should render button with custom data attribute', () => {
    const buttonContent = 'test';
    const dataTestId = 'test-button';

    render(<Button data-testid={dataTestId}>{buttonContent}</Button>);

    const button = screen.getByTestId(dataTestId);

    expect(button).toBeInTheDocument();
  });
});
