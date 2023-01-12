import { useState } from 'react';
import Folder from './components/Folder';
import explorerdata from './data/explorerData';
import { useExplorer } from './useHooks/useExplorer';

function App() {
  const [explorerData, setExplorerData] = useState(explorerdata);
  const { insertNode, removeNode } = useExplorer();

  const nodeHnadlers = (handleType, ...rest) => {
    switch (handleType) {
      case 'addNode':
        let newData = insertNode(explorerData, ...rest);
        setExplorerData(newData);
        break;
      case 'removeNode':
        setExplorerData(removeNode(explorerData, ...rest));
        break;
      default:
        break
    }

  }
  return (
    <div className="App">
      <Folder nodeHnadlers={nodeHnadlers} data={explorerData} isRoot />
    </div>
  );
}

export default App;
