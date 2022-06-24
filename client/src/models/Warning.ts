export enum WarningTypes {
  DOWNLOAD_SERVER,
  UPLOAD_SERVER,
  DATA_INCONSISTENCY,
}

export type Warning = {
  id: number;
  title: string;
  description: string;
  type: WarningTypes;
};
