import RawButton from '@mui/material/Button';

interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'contained',
  disabled = false,
  color = 'primary',
}) => {
  return (
    <RawButton
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </RawButton>
  );
};
