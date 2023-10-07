import { Node } from '../App';
import { getIcon } from '../utils';

interface Props {
  node?: Node | null;
  onSelect: (id: string) => void;
}

const Preview = ({ node, onSelect }: Props) => {
  if (!node) return null;

  const handleSelect = (id: string) => {
    onSelect(id);
  };

  return (
    <main className="p-4">
      {node.type === 'folder' ? (
        <>
          <div className="flex flex-wrap">
            {node.children?.map((child) => (
              <div
                key={child.id}
                className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 text-center cursor-pointer"
                onClick={() => handleSelect(child.id)}
              >
                <div className="flex justify-center">
                  {getIcon(child.type, 36)}
                </div>
                <p>{child.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Preview</h1>
          <p>Name: {node.name}</p>
          <p>Type: {node.type}</p>
        </>
      )}
    </main>
  );
};

export default Preview;
