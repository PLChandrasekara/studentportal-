import React from "react";

const Profile = ({ student }) => {
    return (
        <div>
            <h2>Profile</h2>
            <img
                className="profile"
                src={require(`../assets/profilepic/${student.profilePic}`).default}
                alt="Profile"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h3>{`${student.firstName} ${student.lastName}`}</h3>
            <p><b>Age:</b> {student.age}</p>
            <p><b>Gender:</b> {student.gender}</p>
            <p><b>Course:</b> {student.course}</p>
            <p><b>Country:</b> {student.address.country}</p>
            <p><b>City:</b> {student.address.city}</p>
            <p><b>Skills:</b> {student.skills.join(", ")}</p>
        </div>
    );
};

export default Profile;
