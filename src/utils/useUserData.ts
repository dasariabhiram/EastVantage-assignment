
import { useState, useEffect } from 'react';
import axios from 'axios';

interface UserData {
  name: {
    first: string;
    last: string;
  };
  email: string;
}

const useUserData = () => {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api');
      const { name, email }: UserData = response.data.results[0];
      setData({ name, email });
      localStorage.setItem('userData', JSON.stringify({ name, email }));
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  const refreshData = () => {
    setLoading(true);
    setError(null);
    fetchData();
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setData(JSON.parse(storedUserData));
    } else {
      fetchData();
    }
  }, []);

  return { data, loading, error, refreshData };
};

export default useUserData;
