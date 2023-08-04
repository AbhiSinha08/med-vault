import React from 'react';
import { useParams } from 'react-router-dom';

export default function DoctorDashboard() {
    let { id } = useParams();

    return (
        <div>DoctorDashboard</div>
    )
}
