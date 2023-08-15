// This file is generated: do not edit it manually!
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  adaptations: Array<Adaptations>;
  adaptations_aggregated: Array<Adaptations_Aggregated>;
  adaptations_by_id: Maybe<Adaptations>;
  adaptations_translations: Array<Adaptations_Translations>;
  adaptations_translations_aggregated: Array<Adaptations_Translations_Aggregated>;
  adaptations_translations_by_id: Maybe<Adaptations_Translations>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id: Maybe<Languages>;
  series: Array<Series>;
  series_aggregated: Array<Series_Aggregated>;
  series_by_id: Maybe<Series>;
  series_translations: Array<Series_Translations>;
  series_translations_aggregated: Array<Series_Translations_Aggregated>;
  series_translations_by_id: Maybe<Series_Translations>;
  timelines: Array<Timelines>;
  timelines_aggregated: Array<Timelines_Aggregated>;
  timelines_by_id: Maybe<Timelines>;
  timelines_translations: Array<Timelines_Translations>;
  timelines_translations_aggregated: Array<Timelines_Translations_Aggregated>;
  timelines_translations_by_id: Maybe<Timelines_Translations>;
};


export type QueryAdaptationsArgs = {
  filter: InputMaybe<Adaptations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAdaptations_AggregatedArgs = {
  filter: InputMaybe<Adaptations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAdaptations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdaptations_TranslationsArgs = {
  filter: InputMaybe<Adaptations_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAdaptations_Translations_AggregatedArgs = {
  filter: InputMaybe<Adaptations_Translations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAdaptations_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter: InputMaybe<Languages_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySeriesArgs = {
  filter: InputMaybe<Series_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_AggregatedArgs = {
  filter: InputMaybe<Series_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySeries_TranslationsArgs = {
  filter: InputMaybe<Series_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_Translations_AggregatedArgs = {
  filter: InputMaybe<Series_Translations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTimelinesArgs = {
  filter: InputMaybe<Timelines_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTimelines_AggregatedArgs = {
  filter: InputMaybe<Timelines_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTimelines_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTimelines_TranslationsArgs = {
  filter: InputMaybe<Timelines_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTimelines_Translations_AggregatedArgs = {
  filter: InputMaybe<Timelines_Translations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTimelines_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};

export type Adaptations = {
  __typename?: 'adaptations';
  code: Scalars['String']['output'];
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  episode_number: Scalars['Int']['output'];
  format: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  parution_date: Scalars['Date']['output'];
  parution_date_func: Maybe<Date_Functions>;
  series: Maybe<Series>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  translations: Maybe<Array<Maybe<Adaptations_Translations>>>;
  translations_func: Maybe<Count_Functions>;
  user_created: Maybe<Scalars['String']['output']>;
  user_updated: Maybe<Scalars['String']['output']>;
};


export type AdaptationsSeriesArgs = {
  filter: InputMaybe<Series_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AdaptationsTranslationsArgs = {
  filter: InputMaybe<Adaptations_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Adaptations_Aggregated = {
  __typename?: 'adaptations_aggregated';
  avg: Maybe<Adaptations_Aggregated_Fields>;
  avgDistinct: Maybe<Adaptations_Aggregated_Fields>;
  count: Maybe<Adaptations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Adaptations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Adaptations_Aggregated_Fields>;
  min: Maybe<Adaptations_Aggregated_Fields>;
  sum: Maybe<Adaptations_Aggregated_Fields>;
  sumDistinct: Maybe<Adaptations_Aggregated_Fields>;
};

export type Adaptations_Aggregated_Count = {
  __typename?: 'adaptations_aggregated_count';
  code: Maybe<Scalars['Int']['output']>;
  date_created: Maybe<Scalars['Int']['output']>;
  date_updated: Maybe<Scalars['Int']['output']>;
  episode_number: Maybe<Scalars['Int']['output']>;
  format: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  parution_date: Maybe<Scalars['Int']['output']>;
  series: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Scalars['Int']['output']>;
  user_updated: Maybe<Scalars['Int']['output']>;
};

export type Adaptations_Aggregated_Fields = {
  __typename?: 'adaptations_aggregated_fields';
  episode_number: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type Adaptations_Filter = {
  _and: InputMaybe<Array<InputMaybe<Adaptations_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Adaptations_Filter>>>;
  code: InputMaybe<String_Filter_Operators>;
  date_created: InputMaybe<Date_Filter_Operators>;
  date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated: InputMaybe<Date_Filter_Operators>;
  date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  episode_number: InputMaybe<Number_Filter_Operators>;
  format: InputMaybe<String_Filter_Operators>;
  id: InputMaybe<String_Filter_Operators>;
  parution_date: InputMaybe<Date_Filter_Operators>;
  parution_date_func: InputMaybe<Date_Function_Filter_Operators>;
  series: InputMaybe<Series_Filter>;
  sort: InputMaybe<Number_Filter_Operators>;
  status: InputMaybe<String_Filter_Operators>;
  translations: InputMaybe<Adaptations_Translations_Filter>;
  translations_func: InputMaybe<Count_Function_Filter_Operators>;
  user_created: InputMaybe<String_Filter_Operators>;
  user_updated: InputMaybe<String_Filter_Operators>;
};

export type Adaptations_Translations = {
  __typename?: 'adaptations_translations';
  adaptation_id: Maybe<Adaptations>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language_code: Maybe<Languages>;
  title: Scalars['String']['output'];
};


export type Adaptations_TranslationsAdaptation_IdArgs = {
  filter: InputMaybe<Adaptations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Adaptations_TranslationsLanguage_CodeArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Adaptations_Translations_Aggregated = {
  __typename?: 'adaptations_translations_aggregated';
  avg: Maybe<Adaptations_Translations_Aggregated_Fields>;
  avgDistinct: Maybe<Adaptations_Translations_Aggregated_Fields>;
  count: Maybe<Adaptations_Translations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Adaptations_Translations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Adaptations_Translations_Aggregated_Fields>;
  min: Maybe<Adaptations_Translations_Aggregated_Fields>;
  sum: Maybe<Adaptations_Translations_Aggregated_Fields>;
  sumDistinct: Maybe<Adaptations_Translations_Aggregated_Fields>;
};

export type Adaptations_Translations_Aggregated_Count = {
  __typename?: 'adaptations_translations_aggregated_count';
  adaptation_id: Maybe<Scalars['Int']['output']>;
  description: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  language_code: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type Adaptations_Translations_Aggregated_Fields = {
  __typename?: 'adaptations_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type Adaptations_Translations_Filter = {
  _and: InputMaybe<Array<InputMaybe<Adaptations_Translations_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Adaptations_Translations_Filter>>>;
  adaptation_id: InputMaybe<Adaptations_Filter>;
  description: InputMaybe<String_Filter_Operators>;
  id: InputMaybe<Number_Filter_Operators>;
  language_code: InputMaybe<Languages_Filter>;
  title: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq: InputMaybe<Scalars['String']['input']>;
  _gt: InputMaybe<Scalars['String']['input']>;
  _gte: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt: InputMaybe<Scalars['String']['input']>;
  _lte: InputMaybe<Scalars['String']['input']>;
  _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Date_Function_Filter_Operators = {
  day: InputMaybe<Number_Filter_Operators>;
  month: InputMaybe<Number_Filter_Operators>;
  week: InputMaybe<Number_Filter_Operators>;
  weekday: InputMaybe<Number_Filter_Operators>;
  year: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  __typename?: 'date_functions';
  day: Maybe<Scalars['Int']['output']>;
  month: Maybe<Scalars['Int']['output']>;
  week: Maybe<Scalars['Int']['output']>;
  weekday: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type Datetime_Function_Filter_Operators = {
  day: InputMaybe<Number_Filter_Operators>;
  hour: InputMaybe<Number_Filter_Operators>;
  minute: InputMaybe<Number_Filter_Operators>;
  month: InputMaybe<Number_Filter_Operators>;
  second: InputMaybe<Number_Filter_Operators>;
  week: InputMaybe<Number_Filter_Operators>;
  weekday: InputMaybe<Number_Filter_Operators>;
  year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day: Maybe<Scalars['Int']['output']>;
  hour: Maybe<Scalars['Int']['output']>;
  minute: Maybe<Scalars['Int']['output']>;
  month: Maybe<Scalars['Int']['output']>;
  second: Maybe<Scalars['Int']['output']>;
  week: Maybe<Scalars['Int']['output']>;
  weekday: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  duration: Maybe<Scalars['Int']['output']>;
  embed: Maybe<Scalars['String']['output']>;
  filename_disk: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  folder: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  metadata_func: Maybe<Count_Functions>;
  modified_by: Maybe<Scalars['String']['output']>;
  modified_on: Maybe<Scalars['Date']['output']>;
  modified_on_func: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags: Maybe<Scalars['JSON']['output']>;
  tags_func: Maybe<Count_Functions>;
  title: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  uploaded_by: Maybe<Scalars['String']['output']>;
  uploaded_on: Maybe<Scalars['Date']['output']>;
  uploaded_on_func: Maybe<Datetime_Functions>;
  width: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset: InputMaybe<String_Filter_Operators>;
  description: InputMaybe<String_Filter_Operators>;
  duration: InputMaybe<Number_Filter_Operators>;
  embed: InputMaybe<String_Filter_Operators>;
  filename_disk: InputMaybe<String_Filter_Operators>;
  filename_download: InputMaybe<String_Filter_Operators>;
  filesize: InputMaybe<Number_Filter_Operators>;
  folder: InputMaybe<String_Filter_Operators>;
  height: InputMaybe<Number_Filter_Operators>;
  id: InputMaybe<String_Filter_Operators>;
  location: InputMaybe<String_Filter_Operators>;
  metadata: InputMaybe<String_Filter_Operators>;
  metadata_func: InputMaybe<Count_Function_Filter_Operators>;
  modified_by: InputMaybe<String_Filter_Operators>;
  modified_on: InputMaybe<Date_Filter_Operators>;
  modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  storage: InputMaybe<String_Filter_Operators>;
  tags: InputMaybe<String_Filter_Operators>;
  tags_func: InputMaybe<Count_Function_Filter_Operators>;
  title: InputMaybe<String_Filter_Operators>;
  type: InputMaybe<String_Filter_Operators>;
  uploaded_by: InputMaybe<String_Filter_Operators>;
  uploaded_on: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  width: InputMaybe<Number_Filter_Operators>;
};

export type Languages = {
  __typename?: 'languages';
  code: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
};

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated';
  count: Maybe<Languages_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Languages_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
};

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count';
  code: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
};

export type Languages_Filter = {
  _and: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code: InputMaybe<String_Filter_Operators>;
  name: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Series = {
  __typename?: 'series';
  code: Scalars['String']['output'];
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image: Maybe<Directus_Files>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  timeline: Maybe<Timelines>;
  translations: Maybe<Array<Maybe<Series_Translations>>>;
  translations_func: Maybe<Count_Functions>;
  user_created: Maybe<Scalars['String']['output']>;
  user_updated: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};


export type SeriesImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SeriesTimelineArgs = {
  filter: InputMaybe<Timelines_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SeriesTranslationsArgs = {
  filter: InputMaybe<Series_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Series_Aggregated = {
  __typename?: 'series_aggregated';
  avg: Maybe<Series_Aggregated_Fields>;
  avgDistinct: Maybe<Series_Aggregated_Fields>;
  count: Maybe<Series_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Series_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Series_Aggregated_Fields>;
  min: Maybe<Series_Aggregated_Fields>;
  sum: Maybe<Series_Aggregated_Fields>;
  sumDistinct: Maybe<Series_Aggregated_Fields>;
};

export type Series_Aggregated_Count = {
  __typename?: 'series_aggregated_count';
  code: Maybe<Scalars['Int']['output']>;
  date_created: Maybe<Scalars['Int']['output']>;
  date_updated: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['Int']['output']>;
  timeline: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Scalars['Int']['output']>;
  user_updated: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type Series_Aggregated_Fields = {
  __typename?: 'series_aggregated_fields';
  sort: Maybe<Scalars['Float']['output']>;
  year: Maybe<Scalars['Float']['output']>;
};

export type Series_Filter = {
  _and: InputMaybe<Array<InputMaybe<Series_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Series_Filter>>>;
  code: InputMaybe<String_Filter_Operators>;
  date_created: InputMaybe<Date_Filter_Operators>;
  date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated: InputMaybe<Date_Filter_Operators>;
  date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  id: InputMaybe<String_Filter_Operators>;
  image: InputMaybe<Directus_Files_Filter>;
  sort: InputMaybe<Number_Filter_Operators>;
  status: InputMaybe<String_Filter_Operators>;
  timeline: InputMaybe<Timelines_Filter>;
  translations: InputMaybe<Series_Translations_Filter>;
  translations_func: InputMaybe<Count_Function_Filter_Operators>;
  user_created: InputMaybe<String_Filter_Operators>;
  user_updated: InputMaybe<String_Filter_Operators>;
  year: InputMaybe<Number_Filter_Operators>;
};

export type Series_Translations = {
  __typename?: 'series_translations';
  analysis: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insights: Maybe<Scalars['String']['output']>;
  language_code: Maybe<Languages>;
  serie_id: Maybe<Series>;
  staff: Maybe<Scalars['String']['output']>;
  synopsis: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type Series_TranslationsLanguage_CodeArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Series_TranslationsSerie_IdArgs = {
  filter: InputMaybe<Series_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Series_Translations_Aggregated = {
  __typename?: 'series_translations_aggregated';
  avg: Maybe<Series_Translations_Aggregated_Fields>;
  avgDistinct: Maybe<Series_Translations_Aggregated_Fields>;
  count: Maybe<Series_Translations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Series_Translations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Series_Translations_Aggregated_Fields>;
  min: Maybe<Series_Translations_Aggregated_Fields>;
  sum: Maybe<Series_Translations_Aggregated_Fields>;
  sumDistinct: Maybe<Series_Translations_Aggregated_Fields>;
};

export type Series_Translations_Aggregated_Count = {
  __typename?: 'series_translations_aggregated_count';
  analysis: Maybe<Scalars['Int']['output']>;
  description: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  insights: Maybe<Scalars['Int']['output']>;
  language_code: Maybe<Scalars['Int']['output']>;
  serie_id: Maybe<Scalars['Int']['output']>;
  staff: Maybe<Scalars['Int']['output']>;
  synopsis: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type Series_Translations_Aggregated_Fields = {
  __typename?: 'series_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type Series_Translations_Filter = {
  _and: InputMaybe<Array<InputMaybe<Series_Translations_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Series_Translations_Filter>>>;
  analysis: InputMaybe<String_Filter_Operators>;
  description: InputMaybe<String_Filter_Operators>;
  id: InputMaybe<Number_Filter_Operators>;
  insights: InputMaybe<String_Filter_Operators>;
  language_code: InputMaybe<Languages_Filter>;
  serie_id: InputMaybe<Series_Filter>;
  staff: InputMaybe<String_Filter_Operators>;
  synopsis: InputMaybe<String_Filter_Operators>;
  title: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains: InputMaybe<Scalars['String']['input']>;
  _empty: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with: InputMaybe<Scalars['String']['input']>;
  _eq: InputMaybe<Scalars['String']['input']>;
  _icontains: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _ncontains: InputMaybe<Scalars['String']['input']>;
  _nempty: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with: InputMaybe<Scalars['String']['input']>;
  _neq: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with: InputMaybe<Scalars['String']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type Timelines = {
  __typename?: 'timelines';
  code: Scalars['String']['output'];
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image: Maybe<Directus_Files>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  translations: Maybe<Array<Maybe<Timelines_Translations>>>;
  translations_func: Maybe<Count_Functions>;
  user_created: Maybe<Scalars['String']['output']>;
  user_updated: Maybe<Scalars['String']['output']>;
};


export type TimelinesImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TimelinesTranslationsArgs = {
  filter: InputMaybe<Timelines_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Timelines_Aggregated = {
  __typename?: 'timelines_aggregated';
  avg: Maybe<Timelines_Aggregated_Fields>;
  avgDistinct: Maybe<Timelines_Aggregated_Fields>;
  count: Maybe<Timelines_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Timelines_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Timelines_Aggregated_Fields>;
  min: Maybe<Timelines_Aggregated_Fields>;
  sum: Maybe<Timelines_Aggregated_Fields>;
  sumDistinct: Maybe<Timelines_Aggregated_Fields>;
};

export type Timelines_Aggregated_Count = {
  __typename?: 'timelines_aggregated_count';
  code: Maybe<Scalars['Int']['output']>;
  date_created: Maybe<Scalars['Int']['output']>;
  date_updated: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Scalars['Int']['output']>;
  user_updated: Maybe<Scalars['Int']['output']>;
};

export type Timelines_Aggregated_Fields = {
  __typename?: 'timelines_aggregated_fields';
  sort: Maybe<Scalars['Float']['output']>;
};

export type Timelines_Filter = {
  _and: InputMaybe<Array<InputMaybe<Timelines_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Timelines_Filter>>>;
  code: InputMaybe<String_Filter_Operators>;
  date_created: InputMaybe<Date_Filter_Operators>;
  date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated: InputMaybe<Date_Filter_Operators>;
  date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  id: InputMaybe<String_Filter_Operators>;
  image: InputMaybe<Directus_Files_Filter>;
  sort: InputMaybe<Number_Filter_Operators>;
  status: InputMaybe<String_Filter_Operators>;
  translations: InputMaybe<Timelines_Translations_Filter>;
  translations_func: InputMaybe<Count_Function_Filter_Operators>;
  user_created: InputMaybe<String_Filter_Operators>;
  user_updated: InputMaybe<String_Filter_Operators>;
};

export type Timelines_Translations = {
  __typename?: 'timelines_translations';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language_code: Maybe<Languages>;
  name: Scalars['String']['output'];
  timeline_id: Maybe<Timelines>;
};


export type Timelines_TranslationsLanguage_CodeArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Timelines_TranslationsTimeline_IdArgs = {
  filter: InputMaybe<Timelines_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Timelines_Translations_Aggregated = {
  __typename?: 'timelines_translations_aggregated';
  avg: Maybe<Timelines_Translations_Aggregated_Fields>;
  avgDistinct: Maybe<Timelines_Translations_Aggregated_Fields>;
  count: Maybe<Timelines_Translations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Timelines_Translations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Timelines_Translations_Aggregated_Fields>;
  min: Maybe<Timelines_Translations_Aggregated_Fields>;
  sum: Maybe<Timelines_Translations_Aggregated_Fields>;
  sumDistinct: Maybe<Timelines_Translations_Aggregated_Fields>;
};

export type Timelines_Translations_Aggregated_Count = {
  __typename?: 'timelines_translations_aggregated_count';
  description: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  language_code: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
  timeline_id: Maybe<Scalars['Int']['output']>;
};

export type Timelines_Translations_Aggregated_Fields = {
  __typename?: 'timelines_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type Timelines_Translations_Filter = {
  _and: InputMaybe<Array<InputMaybe<Timelines_Translations_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Timelines_Translations_Filter>>>;
  description: InputMaybe<String_Filter_Operators>;
  id: InputMaybe<Number_Filter_Operators>;
  language_code: InputMaybe<Languages_Filter>;
  name: InputMaybe<String_Filter_Operators>;
  timeline_id: InputMaybe<Timelines_Filter>;
};

export type AdaptationFullFragment = { __typename?: 'adaptations', code: string, format: string, dateCreated: any | null, episodeNumber: number, parutionDate: any, translations: Array<{ __typename?: 'adaptations_translations', title: string, description: string | null } | null> | null };

export type ListAdaptationsQueryVariables = Exact<{
  seriesCode: Scalars['String']['input'];
  language: Scalars['String']['input'];
}>;


export type ListAdaptationsQuery = { __typename?: 'Query', adaptations: Array<{ __typename?: 'adaptations', code: string, format: string, dateCreated: any | null, episodeNumber: number, parutionDate: any, translations: Array<{ __typename?: 'adaptations_translations', title: string, description: string | null } | null> | null }> };

export type SeriesBaseFragment = { __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, description: string | null } | null> | null, image: { __typename?: 'directus_files', id: string, description: string | null } | null };

export type SeriesFullFragment = { __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, synopsis: string | null, staff: string | null, insights: string | null, analysis: string | null } | null> | null, image: { __typename?: 'directus_files', id: string, description: string | null } | null, timeline: { __typename?: 'timelines', code: string, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null } | null };

export type SeriesLinkFragment = { __typename?: 'series', code: string, translations: Array<{ __typename?: 'series_translations', title: string } | null> | null, timeline: { __typename?: 'timelines', code: string } | null };

export type ListSeriesQueryVariables = Exact<{
  timelineCode: Scalars['String']['input'];
  language: Scalars['String']['input'];
}>;


export type ListSeriesQuery = { __typename?: 'Query', series: Array<{ __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, description: string | null } | null> | null, image: { __typename?: 'directus_files', id: string, description: string | null } | null }> };

export type GetSeriesByCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
  language: Scalars['String']['input'];
}>;


export type GetSeriesByCodeQuery = { __typename?: 'Query', series: Array<{ __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, synopsis: string | null, staff: string | null, insights: string | null, analysis: string | null } | null> | null, image: { __typename?: 'directus_files', id: string, description: string | null } | null, timeline: { __typename?: 'timelines', code: string, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null } | null }> };

export type GetMultiSeriesByCodesQueryVariables = Exact<{
  codes: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
}>;


export type GetMultiSeriesByCodesQuery = { __typename?: 'Query', series: Array<{ __typename?: 'series', code: string, translations: Array<{ __typename?: 'series_translations', title: string } | null> | null, timeline: { __typename?: 'timelines', code: string } | null }> };

export type TimelineBaseFragment = { __typename?: 'timelines', code: string, dateCreated: any | null, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null };

export type TimelineFullFragment = { __typename?: 'timelines', code: string, dateCreated: any | null, image: { __typename?: 'directus_files', filename_download: string, title: string | null } | null, translations: Array<{ __typename?: 'timelines_translations', name: string, description: string | null } | null> | null };

export type ListTimelinesQueryVariables = Exact<{
  language: Scalars['String']['input'];
}>;


export type ListTimelinesQuery = { __typename?: 'Query', timelines: Array<{ __typename?: 'timelines', code: string, dateCreated: any | null, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null }> };

export type GetTimelineByCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
  language: Scalars['String']['input'];
}>;


export type GetTimelineByCodeQuery = { __typename?: 'Query', timelines: Array<{ __typename?: 'timelines', code: string, dateCreated: any | null, image: { __typename?: 'directus_files', filename_download: string, title: string | null } | null, translations: Array<{ __typename?: 'timelines_translations', name: string, description: string | null } | null> | null }> };

export type GetMultiTimelinesByCodesQueryVariables = Exact<{
  codes: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
}>;


export type GetMultiTimelinesByCodesQuery = { __typename?: 'Query', timelines: Array<{ __typename?: 'timelines', code: string, dateCreated: any | null, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null }> };
