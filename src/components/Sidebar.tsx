import { useEffect, useState } from 'react';
import { Node } from '../App';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { getIcon } from '../utils';

interface Props {
  data: Node[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const Sidebar = ({ data, selectedId, onSelect }: Props) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (selectedId) {
      const parentIds = findParentIds(selectedId, data);
      setOpenFolders(
        (prevSet) => new Set([...prevSet, ...parentIds, selectedId])
      );
    }
  }, [selectedId, data]);

  const findParentIds = (
    id: string,
    nodes: Node[],
    path: string[] = []
  ): string[] => {
    for (const node of nodes) {
      if (node.id === id) {
        return path;
      }
      if (node.children) {
        const newPath = findParentIds(id, node.children, [...path, node.id]);
        if (newPath.length > 0) {
          return newPath;
        }
      }
    }
    return [];
  };

  const toggleFolder = (id: string) => {
    if (id !== selectedId) return;

    setOpenFolders((prevSet) => {
      const newSet = new Set(prevSet);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderTree = (nodes: Node[]) => {
    return (
      <ul className="pl-4">
        {nodes.map((node) => (
          <li key={node.id}>
            <div
              className={`${
                node.id === selectedId ? 'bg-blue-600' : ''
              } hover:bg-gray-600 py-1 px-2 rounded transition ease-in-out duration-150 flex items-center space-x-2 cursor-pointer`}
              onClick={() => {
                if (node.type === 'folder') toggleFolder(node.id);
                onSelect(node.id);
              }}
            >
              <span className="text-lg">
                <div className="flex gap-2">
                  {node.type === 'folder' ? (
                    openFolders.has(node.id) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )
                  ) : (
                    <div style={{ width: '16px' }} />
                  )}
                  {getIcon(node.type, 16)}
                </div>
              </span>
              <span>{node.name}</span>
            </div>
            {node.children &&
              openFolders.has(node.id) &&
              renderTree(node.children)}
          </li>
        ))}
      </ul>
    );
  };

  return <aside className="pr-2 h-full">{renderTree(data)}</aside>;
};

export default Sidebar;
