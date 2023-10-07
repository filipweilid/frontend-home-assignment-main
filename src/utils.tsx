import { File, Folder, Image } from 'lucide-react';

export const getIcon = (type: 'doc' | 'folder' | 'image', size: number) => {
  switch (type) {
    case 'doc':
      return <File size={size} />;
    case 'folder':
      return <Folder size={size} />;
    case 'image':
      return <Image size={size} />;
    default:
      return '';
  }
};
