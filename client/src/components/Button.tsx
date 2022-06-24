import React, {useState} from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    minWidth: '140px',
    padding: '19px 12px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '15px',
    cursor: 'default',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontWeight: '600',
    fontSize: '16px',
    outline: 'none',
    border: 'none',
  },
};

const Button = ({disabled, ...props}: ButtonProps): JSX.Element => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...props}
      style={{
        ...styles.container,
        ...props.style,
        opacity: disabled ? 0.5 : hovered ? 0.8 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default Button;
