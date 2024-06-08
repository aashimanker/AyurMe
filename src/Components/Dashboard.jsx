import React, { useEffect, useState } from 'react';
import { account, databases } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';
import conf from '../../conf/conf';

import FoodPlanDisplay from './FoodPlanDisplay';

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [diet, setDiet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    isLogin();
  }, []);

  const isLogin = async () => {
    try {
      const user = await account.get();
      setEmail(user.email);
      setName(user.name);
      RecommendedDiet();
    } catch (error) {
      navigate('/Signin');
    }
  };

  const RecommendedDiet = async () => {
    try {
      const user = await account.get();
      const response = await databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId);

      const filteredDocuments = response.documents.filter(document => document.username === user.name);
      const foodPlanData = filteredDocuments.map(document => document.foodPlan);
      setDiet(foodPlanData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const onLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/Signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <span className="text-gray-700">{email}</span>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <span className="text-gray-700">{name}</span>
            </div>
            {diet.length > 0 && <FoodPlanDisplay foodPlan={diet} />}
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
