import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import Typography from '../../../components/Typography';

import useThemeScheme from '../../../hooks/useThemeScheme';

interface StubListProps {
  loading?: boolean;
}

const StubList: FunctionComponent<StubListProps> = (props) => {
  const { loading } = props;

  const themeScheme = useThemeScheme();

  return (
    <View style={styles.stubList}>
      <Typography variant="body-large" color={themeScheme.colors.gray}>
        {loading ? 'Завантаження...' : 'Список пустий'}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  stubList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StubList;
