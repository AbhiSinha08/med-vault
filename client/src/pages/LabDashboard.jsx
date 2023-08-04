import React from 'react';
import { useParams } from 'react-router-dom';

export default function LabDashboard() {
    let { id } = useParams();

    return (
        <div>LabDashboard</div>
    )
}
