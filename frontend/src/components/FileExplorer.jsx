import {useState} from 'react'

const fileData = [
  {
    type: "folder",
    name: "src",
    children: [
      { type: "file", name: "App.js" },
      { type: "file", name: "index.js" }
    ]
  },
  {
    type: "file",
    name: "package.json"
  }
];
const TreeNode = ({ node }) => {
  const [open, setOpen] = useState(false);

  if (node.type === "folder") {
    return (
      <div className="ml-2">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center cursor-pointer hover:bg-gray-800 p-1 rounded"
        >
          {open ? "📂" : "📁"} <span className="ml-2">{node.name}</span>
        </div>
        {open && (
          <div className="ml-6">
            {node.children.map((child, idx) => (
              <TreeNode key={idx} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="ml-6 cursor-pointer hover:bg-gray-800 p-1 rounded">
      📄 {node.name}
    </div>
  );
};

const FileExplorer = () => {
  return (
    <div className="bg-black text-white w-64 h-screen p-3 overflow-y-auto">
      <h2 className="font-bold mb-3">Explorer</h2>
      {fileData.map((node, idx) => (
        <TreeNode key={idx} node={node} />
      ))}
    </div>
  );
};

export default FileExplorer;
