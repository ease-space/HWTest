import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';

interface ReadBookScreenParams {
  chapters: string[];
  chapterIndex: number;
}

export type RootStackParamList = {
  MainStackNavigator: undefined;
};

export type MainStackParamList = {
  BooksCategoriesScreen: undefined;
  ReadBookScreen: ReadBookScreenParams;
};

type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

type MainStackScreenProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  StackScreenProps<MainStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type MainStackNavigatorProps = RootStackScreenProps<'MainStackNavigator'>;

export type BooksCategoriesScreenProps = MainStackScreenProps<'BooksCategoriesScreen'>;

export type ReadBookScreenProps = MainStackScreenProps<'ReadBookScreen'>;
