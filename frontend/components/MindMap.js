import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './MindMap.module.css';

const MindMap = () => {
    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchMindMap = async () => {
                try {
                    const response = await axios.get(`/api/mindmap/${id}`);
                    setNodes(response.data.nodes);
                } catch (err) {
                    setError('Failed to load mind map');
                } finally {
                    setLoading(false);
                }
            };
            fetchMindMap();
        }
    }, [id]);

    const handleNodeClick = (nodeId) => {
        // Logic to handle node click, e.g., navigate to details or edit
        console.log(`Node clicked: ${nodeId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.mindMapContainer}>
            {nodes.length === 0 ? (
                <div>No nodes available</div>
            ) : (
                <ul className={styles.mindMap}>
                    {nodes.map((node) => (
                        <li key={node.id} onClick={() => handleNodeClick(node.id)} className={styles.node}>
                            {node.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MindMap;