export const useExplorer = () => {
    const insertNode = (tree, folderId, name, isFolder) => {
        const node = {
            id: new Date().getTime(),
            name,
            isFolder,
            items: [],
        }
        if (tree.id === folderId) {
            tree.items.unshift(node);
            return tree;
        }
        const latestNode = tree.items.map(item => insertNode(item, folderId, name, isFolder));
        return { ...tree, items: latestNode }
    }

    const removeNode = (tree, folderId) => {
        debugger
        const isFound = tree.items.some(item => item.id === folderId);
        if (isFound) {
            const latestNode = tree.items.filter(item => item.id !== folderId);
            return { ...tree, items: latestNode };
        }
        const latestNode = tree.items.map(item => removeNode(item, folderId));
        return { ...tree, items: latestNode };

    }
    return ({
        insertNode, removeNode
    })
} 