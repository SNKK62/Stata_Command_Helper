import RawStack from '@mui/material/Stack';

interface StackProps {
  children: React.ReactNode;
  spacing?: number;
  direction?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  sx?: object;
}
export const Stack: React.FC<StackProps> = ({
  children,
  spacing = 2,
  direction = 'column',
  justifyContent = 'center',
  alignItems = 'center',
  sx = {},
}) => {
  return (
    <RawStack
      spacing={spacing}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      sx={sx}
    >
      {children}
    </RawStack>
  );
};
