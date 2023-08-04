import React from 'react';
import { useParams } from 'react-router-dom';

export default function PatientDashboard() {
    let { id } = useParams();
    
    return (
        <div>PatientDashboard</div>
    )
}
