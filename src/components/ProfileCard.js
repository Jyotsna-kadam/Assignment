import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setProfile(data.results[0]));
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md max-w-sm mx-auto">
      {profile && (
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={profile.picture.large}
            alt="Profile"
          />
          <div>
            <h2 className="text-lg font-semibold">
              {profile.name.first} {profile.name.last}
            </h2>
            <p className="text-sm text-gray-600">{profile.email}</p>
            <p className="text-sm text-gray-600">{profile.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
