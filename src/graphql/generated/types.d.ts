// This file is generated: do not edit it manually!
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLStringOrFloat: any;
  JSON: any;
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
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAdaptations_AggregatedArgs = {
  filter: InputMaybe<Adaptations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAdaptations_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryAdaptations_TranslationsArgs = {
  filter: InputMaybe<Adaptations_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAdaptations_Translations_AggregatedArgs = {
  filter: InputMaybe<Adaptations_Translations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAdaptations_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter: InputMaybe<Languages_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QuerySeriesArgs = {
  filter: InputMaybe<Series_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeries_AggregatedArgs = {
  filter: InputMaybe<Series_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeries_By_IdArgs = {
  id: Scalars['ID'];
};


export type QuerySeries_TranslationsArgs = {
  filter: InputMaybe<Series_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeries_Translations_AggregatedArgs = {
  filter: InputMaybe<Series_Translations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeries_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryTimelinesArgs = {
  filter: InputMaybe<Timelines_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTimelines_AggregatedArgs = {
  filter: InputMaybe<Timelines_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTimelines_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryTimelines_TranslationsArgs = {
  filter: InputMaybe<Timelines_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTimelines_Translations_AggregatedArgs = {
  filter: InputMaybe<Timelines_Translations_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTimelines_Translations_By_IdArgs = {
  id: Scalars['ID'];
};

export type Adaptations = {
  __typename?: 'adaptations';
  code: Scalars['String'];
  date_created: Maybe<Scalars['Date']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']>;
  date_updated_func: Maybe<Datetime_Functions>;
  episode_number: Scalars['Int'];
  format: Scalars['String'];
  id: Maybe<Scalars['ID']>;
  image: Maybe<Directus_Files>;
  parution_date: Scalars['Date'];
  parution_date_func: Maybe<Date_Functions>;
  series: Maybe<Series>;
  sort: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  translations: Maybe<Array<Maybe<Adaptations_Translations>>>;
  translations_func: Maybe<Count_Functions>;
  user_created: Maybe<Scalars['String']>;
  user_updated: Maybe<Scalars['String']>;
};


export type AdaptationsImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AdaptationsSeriesArgs = {
  filter: InputMaybe<Series_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AdaptationsTranslationsArgs = {
  filter: InputMaybe<Adaptations_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Adaptations_Aggregated = {
  __typename?: 'adaptations_aggregated';
  avg: Maybe<Adaptations_Aggregated_Fields>;
  avgDistinct: Maybe<Adaptations_Aggregated_Fields>;
  count: Maybe<Adaptations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']>;
  countDistinct: Maybe<Adaptations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']>;
  max: Maybe<Adaptations_Aggregated_Fields>;
  min: Maybe<Adaptations_Aggregated_Fields>;
  sum: Maybe<Adaptations_Aggregated_Fields>;
  sumDistinct: Maybe<Adaptations_Aggregated_Fields>;
};

export type Adaptations_Aggregated_Count = {
  __typename?: 'adaptations_aggregated_count';
  code: Maybe<Scalars['Int']>;
  date_created: Maybe<Scalars['Int']>;
  date_updated: Maybe<Scalars['Int']>;
  episode_number: Maybe<Scalars['Int']>;
  format: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  image: Maybe<Scalars['Int']>;
  parution_date: Maybe<Scalars['Int']>;
  series: Maybe<Scalars['Int']>;
  sort: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['Int']>;
  translations: Maybe<Scalars['Int']>;
  user_created: Maybe<Scalars['Int']>;
  user_updated: Maybe<Scalars['Int']>;
};

export type Adaptations_Aggregated_Fields = {
  __typename?: 'adaptations_aggregated_fields';
  episode_number: Maybe<Scalars['Float']>;
  sort: Maybe<Scalars['Float']>;
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
  image: InputMaybe<Directus_Files_Filter>;
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
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  language_code: Maybe<Languages>;
  title: Scalars['String'];
};


export type Adaptations_TranslationsAdaptation_IdArgs = {
  filter: InputMaybe<Adaptations_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Adaptations_TranslationsLanguage_CodeArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Adaptations_Translations_Aggregated = {
  __typename?: 'adaptations_translations_aggregated';
  avg: Maybe<Adaptations_Translations_Aggregated_Fields>;
  avgDistinct: Maybe<Adaptations_Translations_Aggregated_Fields>;
  count: Maybe<Adaptations_Translations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']>;
  countDistinct: Maybe<Adaptations_Translations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']>;
  max: Maybe<Adaptations_Translations_Aggregated_Fields>;
  min: Maybe<Adaptations_Translations_Aggregated_Fields>;
  sum: Maybe<Adaptations_Translations_Aggregated_Fields>;
  sumDistinct: Maybe<Adaptations_Translations_Aggregated_Fields>;
};

export type Adaptations_Translations_Aggregated_Count = {
  __typename?: 'adaptations_translations_aggregated_count';
  adaptation_id: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  language_code: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['Int']>;
};

export type Adaptations_Translations_Aggregated_Fields = {
  __typename?: 'adaptations_translations_aggregated_fields';
  id: Maybe<Scalars['Float']>;
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
  count: Maybe<Scalars['Int']>;
};

export type Date_Filter_Operators = {
  _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq: InputMaybe<Scalars['String']>;
  _nnull: InputMaybe<Scalars['Boolean']>;
  _null: InputMaybe<Scalars['Boolean']>;
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
  day: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  week: Maybe<Scalars['Int']>;
  weekday: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
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
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  week: Maybe<Scalars['Int']>;
  weekday: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  duration: Maybe<Scalars['Int']>;
  embed: Maybe<Scalars['String']>;
  filename_disk: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize: Maybe<Scalars['String']>;
  folder: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['ID']>;
  location: Maybe<Scalars['String']>;
  metadata: Maybe<Scalars['JSON']>;
  metadata_func: Maybe<Count_Functions>;
  modified_by: Maybe<Scalars['String']>;
  modified_on: Scalars['Date'];
  modified_on_func: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags: Maybe<Scalars['JSON']>;
  tags_func: Maybe<Count_Functions>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  uploaded_by: Maybe<Scalars['String']>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func: Maybe<Datetime_Functions>;
  width: Maybe<Scalars['Int']>;
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
  filesize: InputMaybe<String_Filter_Operators>;
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
  code: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated';
  count: Maybe<Languages_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']>;
  countDistinct: Maybe<Languages_Aggregated_Count>;
  group: Maybe<Scalars['JSON']>;
};

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count';
  code: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
};

export type Languages_Filter = {
  _and: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code: InputMaybe<String_Filter_Operators>;
  name: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull: InputMaybe<Scalars['Boolean']>;
  _null: InputMaybe<Scalars['Boolean']>;
};

export type Series = {
  __typename?: 'series';
  code: Scalars['String'];
  date_created: Maybe<Scalars['Date']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']>;
  date_updated_func: Maybe<Datetime_Functions>;
  id: Maybe<Scalars['ID']>;
  image: Maybe<Directus_Files>;
  sort: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  timeline: Maybe<Timelines>;
  translations: Maybe<Array<Maybe<Series_Translations>>>;
  translations_func: Maybe<Count_Functions>;
  user_created: Maybe<Scalars['String']>;
  user_updated: Maybe<Scalars['String']>;
  year: Scalars['Int'];
};


export type SeriesImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeriesTimelineArgs = {
  filter: InputMaybe<Timelines_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeriesTranslationsArgs = {
  filter: InputMaybe<Series_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Series_Aggregated = {
  __typename?: 'series_aggregated';
  avg: Maybe<Series_Aggregated_Fields>;
  avgDistinct: Maybe<Series_Aggregated_Fields>;
  count: Maybe<Series_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']>;
  countDistinct: Maybe<Series_Aggregated_Count>;
  group: Maybe<Scalars['JSON']>;
  max: Maybe<Series_Aggregated_Fields>;
  min: Maybe<Series_Aggregated_Fields>;
  sum: Maybe<Series_Aggregated_Fields>;
  sumDistinct: Maybe<Series_Aggregated_Fields>;
};

export type Series_Aggregated_Count = {
  __typename?: 'series_aggregated_count';
  code: Maybe<Scalars['Int']>;
  date_created: Maybe<Scalars['Int']>;
  date_updated: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  image: Maybe<Scalars['Int']>;
  sort: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['Int']>;
  timeline: Maybe<Scalars['Int']>;
  translations: Maybe<Scalars['Int']>;
  user_created: Maybe<Scalars['Int']>;
  user_updated: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
};

export type Series_Aggregated_Fields = {
  __typename?: 'series_aggregated_fields';
  sort: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
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
  analysis: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  insights: Maybe<Scalars['String']>;
  language_code: Maybe<Languages>;
  serie_id: Maybe<Series>;
  staff: Maybe<Scalars['String']>;
  synopsis: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type Series_TranslationsLanguage_CodeArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Series_TranslationsSerie_IdArgs = {
  filter: InputMaybe<Series_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Series_Translations_Aggregated = {
  __typename?: 'series_translations_aggregated';
  avg: Maybe<Series_Translations_Aggregated_Fields>;
  avgDistinct: Maybe<Series_Translations_Aggregated_Fields>;
  count: Maybe<Series_Translations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']>;
  countDistinct: Maybe<Series_Translations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']>;
  max: Maybe<Series_Translations_Aggregated_Fields>;
  min: Maybe<Series_Translations_Aggregated_Fields>;
  sum: Maybe<Series_Translations_Aggregated_Fields>;
  sumDistinct: Maybe<Series_Translations_Aggregated_Fields>;
};

export type Series_Translations_Aggregated_Count = {
  __typename?: 'series_translations_aggregated_count';
  analysis: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  insights: Maybe<Scalars['Int']>;
  language_code: Maybe<Scalars['Int']>;
  serie_id: Maybe<Scalars['Int']>;
  staff: Maybe<Scalars['Int']>;
  synopsis: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['Int']>;
};

export type Series_Translations_Aggregated_Fields = {
  __typename?: 'series_translations_aggregated_fields';
  id: Maybe<Scalars['Float']>;
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
  _contains: InputMaybe<Scalars['String']>;
  _empty: InputMaybe<Scalars['Boolean']>;
  _ends_with: InputMaybe<Scalars['String']>;
  _eq: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains: InputMaybe<Scalars['String']>;
  _nempty: InputMaybe<Scalars['Boolean']>;
  _nends_with: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull: InputMaybe<Scalars['Boolean']>;
  _nstarts_with: InputMaybe<Scalars['String']>;
  _null: InputMaybe<Scalars['Boolean']>;
  _starts_with: InputMaybe<Scalars['String']>;
};

export type Timelines = {
  __typename?: 'timelines';
  code: Scalars['String'];
  date_created: Maybe<Scalars['Date']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']>;
  date_updated_func: Maybe<Datetime_Functions>;
  id: Maybe<Scalars['ID']>;
  image: Maybe<Directus_Files>;
  sort: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  translations: Maybe<Array<Maybe<Timelines_Translations>>>;
  translations_func: Maybe<Count_Functions>;
  user_created: Maybe<Scalars['String']>;
  user_updated: Maybe<Scalars['String']>;
};


export type TimelinesImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TimelinesTranslationsArgs = {
  filter: InputMaybe<Timelines_Translations_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Timelines_Aggregated = {
  __typename?: 'timelines_aggregated';
  avg: Maybe<Timelines_Aggregated_Fields>;
  avgDistinct: Maybe<Timelines_Aggregated_Fields>;
  count: Maybe<Timelines_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']>;
  countDistinct: Maybe<Timelines_Aggregated_Count>;
  group: Maybe<Scalars['JSON']>;
  max: Maybe<Timelines_Aggregated_Fields>;
  min: Maybe<Timelines_Aggregated_Fields>;
  sum: Maybe<Timelines_Aggregated_Fields>;
  sumDistinct: Maybe<Timelines_Aggregated_Fields>;
};

export type Timelines_Aggregated_Count = {
  __typename?: 'timelines_aggregated_count';
  code: Maybe<Scalars['Int']>;
  date_created: Maybe<Scalars['Int']>;
  date_updated: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  image: Maybe<Scalars['Int']>;
  sort: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['Int']>;
  translations: Maybe<Scalars['Int']>;
  user_created: Maybe<Scalars['Int']>;
  user_updated: Maybe<Scalars['Int']>;
};

export type Timelines_Aggregated_Fields = {
  __typename?: 'timelines_aggregated_fields';
  sort: Maybe<Scalars['Float']>;
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
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  language_code: Maybe<Languages>;
  name: Scalars['String'];
  timeline_id: Maybe<Timelines>;
};


export type Timelines_TranslationsLanguage_CodeArgs = {
  filter: InputMaybe<Languages_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Timelines_TranslationsTimeline_IdArgs = {
  filter: InputMaybe<Timelines_Filter>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Timelines_Translations_Aggregated = {
  __typename?: 'timelines_translations_aggregated';
  avg: Maybe<Timelines_Translations_Aggregated_Fields>;
  avgDistinct: Maybe<Timelines_Translations_Aggregated_Fields>;
  count: Maybe<Timelines_Translations_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']>;
  countDistinct: Maybe<Timelines_Translations_Aggregated_Count>;
  group: Maybe<Scalars['JSON']>;
  max: Maybe<Timelines_Translations_Aggregated_Fields>;
  min: Maybe<Timelines_Translations_Aggregated_Fields>;
  sum: Maybe<Timelines_Translations_Aggregated_Fields>;
  sumDistinct: Maybe<Timelines_Translations_Aggregated_Fields>;
};

export type Timelines_Translations_Aggregated_Count = {
  __typename?: 'timelines_translations_aggregated_count';
  description: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  language_code: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
  timeline_id: Maybe<Scalars['Int']>;
};

export type Timelines_Translations_Aggregated_Fields = {
  __typename?: 'timelines_translations_aggregated_fields';
  id: Maybe<Scalars['Float']>;
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

export type AdaptationBaseFragment = { __typename?: 'adaptations', code: string, format: string, dateCreated: any | null, episodeNumber: number, translations: Array<{ __typename?: 'adaptations_translations', title: string } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null };

export type AdaptationFullFragment = { __typename?: 'adaptations', code: string, format: string, dateCreated: any | null, episodeNumber: number, parutionDate: any, series: { __typename?: 'series', code: string } | null, translations: Array<{ __typename?: 'adaptations_translations', title: string, description: string | null } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null };

export type ListAdaptationsQueryVariables = Exact<{
  seriesCode: Scalars['String'];
  language: Scalars['String'];
}>;


export type ListAdaptationsQuery = { __typename?: 'Query', adaptations: Array<{ __typename?: 'adaptations', code: string, format: string, dateCreated: any | null, episodeNumber: number, translations: Array<{ __typename?: 'adaptations_translations', title: string } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null }> };

export type GetAdaptationByCodeQueryVariables = Exact<{
  code: Scalars['String'];
  language: Scalars['String'];
}>;


export type GetAdaptationByCodeQuery = { __typename?: 'Query', adaptations: Array<{ __typename?: 'adaptations', code: string, format: string, dateCreated: any | null, episodeNumber: number, parutionDate: any, series: { __typename?: 'series', code: string } | null, translations: Array<{ __typename?: 'adaptations_translations', title: string, description: string | null } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null }> };

export type SeriesBaseFragment = { __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, description: string | null } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null };

export type SeriesFullFragment = { __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, synopsis: string | null, staff: string | null, insights: string | null, analysis: string | null } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null, timeline: { __typename?: 'timelines', code: string, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null } | null };

export type SeriesLinkFragment = { __typename?: 'series', code: string, translations: Array<{ __typename?: 'series_translations', title: string } | null> | null, timeline: { __typename?: 'timelines', code: string } | null };

export type ListSeriesQueryVariables = Exact<{
  timelineCode: Scalars['String'];
  language: Scalars['String'];
}>;


export type ListSeriesQuery = { __typename?: 'Query', series: Array<{ __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, description: string | null } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null }> };

export type GetSeriesByCodeQueryVariables = Exact<{
  code: Scalars['String'];
  language: Scalars['String'];
}>;


export type GetSeriesByCodeQuery = { __typename?: 'Query', series: Array<{ __typename?: 'series', code: string, year: number, dateCreated: any | null, translations: Array<{ __typename?: 'series_translations', title: string, synopsis: string | null, staff: string | null, insights: string | null, analysis: string | null } | null> | null, image: { __typename?: 'directus_files', id: string | null, description: string | null } | null, timeline: { __typename?: 'timelines', code: string, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null } | null }> };

export type GetMultiSeriesByCodesQueryVariables = Exact<{
  codes: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  language: Scalars['String'];
}>;


export type GetMultiSeriesByCodesQuery = { __typename?: 'Query', series: Array<{ __typename?: 'series', code: string, translations: Array<{ __typename?: 'series_translations', title: string } | null> | null, timeline: { __typename?: 'timelines', code: string } | null }> };

export type TimelineBaseFragment = { __typename?: 'timelines', code: string, dateCreated: any | null, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null };

export type TimelineFullFragment = { __typename?: 'timelines', code: string, dateCreated: any | null, image: { __typename?: 'directus_files', filename_download: string, title: string | null } | null, translations: Array<{ __typename?: 'timelines_translations', name: string, description: string | null } | null> | null };

export type ListTimelinesQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type ListTimelinesQuery = { __typename?: 'Query', timelines: Array<{ __typename?: 'timelines', code: string, dateCreated: any | null, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null }> };

export type GetTimelineByCodeQueryVariables = Exact<{
  code: Scalars['String'];
  language: Scalars['String'];
}>;


export type GetTimelineByCodeQuery = { __typename?: 'Query', timelines: Array<{ __typename?: 'timelines', code: string, dateCreated: any | null, image: { __typename?: 'directus_files', filename_download: string, title: string | null } | null, translations: Array<{ __typename?: 'timelines_translations', name: string, description: string | null } | null> | null }> };

export type GetMultiTimelinesByCodesQueryVariables = Exact<{
  codes: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  language: Scalars['String'];
}>;


export type GetMultiTimelinesByCodesQuery = { __typename?: 'Query', timelines: Array<{ __typename?: 'timelines', code: string, dateCreated: any | null, translations: Array<{ __typename?: 'timelines_translations', name: string } | null> | null }> };
