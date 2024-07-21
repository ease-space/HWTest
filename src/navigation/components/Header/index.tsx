import React, { Fragment, FunctionComponent } from 'react';
import { Header as BaseHeader, StackHeaderProps } from '@react-navigation/stack';
import { HeaderOptions } from '@react-navigation/elements';

import HeaderTitle from '../HeaderTitle';

interface HeaderProps extends StackHeaderProps {
  headerTitleShown?: boolean;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const { options, headerTitleShown = true, ...otherProps } = props;

  const { headerTitle, ...otherOptions } = options;

  const renderFragment = () => <Fragment />;

  const customOptions: HeaderOptions = {
    ...otherOptions,
    headerTitle: headerTitleShown ? headerTitle || HeaderTitle : renderFragment,
  };

  return <BaseHeader options={customOptions} {...otherProps} />;
};

export default Header;
