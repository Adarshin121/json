import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Dataview = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/students")
        .then((response)=>{
            console.log(response.data)
            setStudents(response.data);
        })
    }, []);

    return (
        <div>
            <h1>Students</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Mark</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, index) => (
                            <TableRow key={index}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.age}</TableCell>
                                <TableCell>{student.mark}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Dataview;
