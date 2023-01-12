const explorerData = {
    id: '1',
    name: 'Folder1',
    isFolder: true,
    items: [
        {
            id: '10',
            name: 'file.js',
            isFolder: false,
            items:[],  
        },
        {
            id: '2',
            name: 'Folder2',
            isFolder: true,
            items: [{
                id: '4',
                name: 'Folder3',
                isFolder: true,
                items: [
                    {
                        id: '5',
                        name: 'text-file1.txt',
                        isFolder: false,
                        items: [],
                    }
                ],
            },
            {
                id: '6',
                name: 'text-fil2e.txt',
                isFolder: false,
                items: [],
            }],
        },
        {
            id: '3',
            name: 'text-file.txt',
            isFolder: false,
            items: [],
        },
        {
            id: '7',
            name: 'Folder2',
            isFolder: true,
            items: [{
                id: '4',
                name: 'Folder3',
                isFolder: true,
                items: [
                    {
                        id: '8',
                        name: 'text-file1.txt',
                        isFolder: false,
                        items: [],
                    }
                ],
            },
            {
                id: '9',
                name: 'text-fil2e.txt',
                isFolder: false,
                items: [],
            }],
        },
    ]
}

export default explorerData;