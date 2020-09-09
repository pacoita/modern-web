export interface ShareObject {
  title: string;
  text: string;
  url?: string;
  // Web Share Level 2 allows also files
  files?: File[];
}
