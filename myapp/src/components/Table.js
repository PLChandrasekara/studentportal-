import React from "react";


const Table = ({ students, selectStudent }) => {
    return (
        <table border="1" style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Course</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.course}</td>
                        <td>{student.country}</td>
                        <td>
                            <button onClick={() => selectStudent(index)}>View Profile</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
