export default function getFileNameWithoutExtension(fileName: string): string {
    return fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
  }