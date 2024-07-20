import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';

export type RootStackParamList = {
  MainStackNavigator: undefined;
};

export type MainStackParamList = {
  BooksScreen: undefined;
  ReadBookScreen: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

type MainStackScreenProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  StackScreenProps<MainStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type MainStackNavigatorProps = RootStackScreenProps<'MainStackNavigator'>;

export type BooksScreenProps = MainStackScreenProps<'BooksScreen'>;

export type ReadBookScreenProps = MainStackScreenProps<'ReadBookScreen'>;
