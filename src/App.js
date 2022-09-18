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
      <iframe src="https://api.genelpara.com/iframe/?symbol=altin&altin=GA,C,Y,T,CMR&stil=stil-8&renk=beyaz" title="Altın Fiyatları" frameborder="0" width="1000" height="405"></iframe>
      <table>
        <thead>
          <tr>
            <th>
              Adi
            </th>
            <th>
              {'Alış'}
            </th>
            <th>
              {'Satış'}
            </th>
          </tr>
        </thead>
        <tbody>
          {goldData.map((data, index) => (
            <tr key={index}>
              <td>
                {data?.name}
              </td>
              <td>
                {data?.buying}
              </td>
              <td>
                {data?.selling}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
