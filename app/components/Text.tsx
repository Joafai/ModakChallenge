import React from 'react';
import {Text, TextStyle, TextProps} from 'react-native';

interface TextComponentProps extends TextProps {
  bold?: boolean;
  italic?: boolean;
  style?: TextStyle;
}

const TextComponent: React.FC<TextComponentProps> = props => {
  const {children, bold = false, italic = false, style, ...restProps} = props;

  const baseStyle: TextStyle = {
    fontFamily: 'Avenir',
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
  };

  const mergedStyle = [baseStyle, style];

  return (
    <Text style={mergedStyle} {...restProps}>
      {children}
    </Text>
  );
};

export default TextComponent;
