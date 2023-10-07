import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';

interface Response {
  response: Tree[];
}
export interface Tree {
  id: string;
  type: 'doc' | 'folder' | 'image';
  name: string;
  children?: Tree[];
}

const App = () => {
  const [data, setData] = useState<Tree[] | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [flattenedData, setFlattenedData] = useState<Record<string, Tree>>({});
  const [error, setError] = useState<string | null>(null);

  const sortTree = (nodes: Tree[]): Tree[] => {
    return nodes
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((node) => ({
        ...node,
        children: node.children ? sortTree([...node.children]) : undefined,
      }));
  };

  const flattenTree = (nodes: Tree[], acc: Record<string, Tree>) => {
    nodes.forEach((node) => {
      acc[node.id] = node;
      if (node.children) {
        flattenTree(node.children, acc);
      }
    });
  };

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tree')
      .then((response) => response.json())
      .then((json: Response) => {
        const sortedData = sortTree(json.response);
        setData(sortedData);

        const dataRecord: Record<string, Tree> = {};
        flattenTree(sortedData, dataRecord);
        setFlattenedData(dataRecord);
      })
      .catch((err) => {
        console.error(err.message);
        setError('Failed to load data.');
      });
  }, []);

  return (
    <div className="grid h-screen grid-rows-[100px,1fr] grid-cols-[300px,1fr]">
      <div className="row-span-1 col-span-2 bg-gray-800 text-white">
        <h1 className="text-2xl p-8">Home assignment</h1>
      </div>
      <div className="bg-gray-700 text-white">
        {error ? (
          error
        ) : data ? (
          <Sidebar data={data} selectedId={selected} onSelect={handleSelect} />
        ) : (
          'Loading...'
        )}
      </div>
      <div className="bg-gray-300">
        <Preview
          node={selected ? flattenedData[selected] : null}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default App;
