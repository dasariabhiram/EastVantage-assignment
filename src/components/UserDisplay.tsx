import React from 'react';
import useUserData from '../utils/useUserData';
import Button from './Button';

const UserDisplay: React.FC = () => {
  const { data, loading, error, refreshData } = useUserData();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-6">User Information</h1>
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <div>
            <p className="text-gray-800">
              <strong>Name:</strong> {data.name.first} {data.name.last}
            </p>
            <p className="text-gray-800">
              <strong>Email:</strong> {data.email}
            </p>
          </div>
        )}
        <Button onClick={refreshData} label="Refresh" />
      </div>
    </div>
  );
};

export default UserDisplay;
