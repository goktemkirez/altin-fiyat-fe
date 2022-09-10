import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import authAxios from "./components/axios";

function App() {
  const [goldData, setGoldData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // setLoading(true);

      const result = await authAxios.get(`/goldPrice`);

      console.log(result.data.result);
      setGoldData(result.data.result);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        // setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>
              Adi
            </th>
          </tr>
        </thead>
        <tbody>
          {goldData.map((data, index) => (
            <tr key={index}>
              <td>
                {data?.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
