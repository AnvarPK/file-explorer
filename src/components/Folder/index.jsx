import React, { useState } from 'react';
import './style.css';

const Folder = props => {
    const { data, nodeHnadlers, parentFolder, isRoot = false } = props;
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [isFolder, setIsFolder] = useState(false);
    if (!data) return null;

    const contentShowHndler = (e) => {
        e.stopPropagation();
        setIsContentVisible(!isContentVisible)
    };

    const showInsert = (e, isFolder) => {
        e.stopPropagation();
        setIsFolder(isFolder);
        setIsInputVisible(!isInputVisible);
        setIsContentVisible(true);
    }

    const addNode = (e) => {
        e.stopPropagation();
        if (e.keyCode === 13) {
            nodeHnadlers('addNode', data.id, e.target.value, isFolder);
            setIsInputVisible(false);
        }
    }

    const removeNode = (e) => {
        e.stopPropagation();
        nodeHnadlers('removeNode', data.id, parentFolder, isFolder);
    };
    if (data.isFolder) {
        return (
            <>
                <div className='folder' onClick={contentShowHndler}>
                    <div className='folder__meta'>
                        <span className='folder__icon'>📁</span>
                        <span className='folder__name'>{data.name}</span>
                    </div>
                    <div className='folder__add'>
                        <span className='add-folder' onClick={(e) => showInsert(e, true)}>+📁</span>
                        <span className='add-file' onClick={(e) => showInsert(e, false)}>+📄</span>
                        {!isRoot && <span className='remove-item' onClick={removeNode}>-🗑️</span>}
                    </div>
                </div >
                {isInputVisible && <div className='new-item'>
                    <span className='new-item__icon'>{isFolder ? '📁' : '📄'}</span>
                    <span className='new-item__name' ><input onKeyDown={addNode} /></span>
                </div>}
                <div className='folder-content' style={{ display: isContentVisible ? 'block' : 'none' }}>
                    {data.items.map(item => <Folder data={item} key={item.id} nodeHnadlers={nodeHnadlers} parentFolder={data} />)}
                </div>
            </>
        )
    }
    else {
        return <>
            <div className='file'>
                <div className="file__meta">
                    <span className='file__icon'>📄</span>
                    <span className='file__name'>{data.name}</span>
                </div>
                <div className='file__remove'>
                    <span className='remove-item' onClick={removeNode}>-🗑️</span>
                </div>
            </div>
        </>
    }
}

Folder.propTypes = {}

export default Folder