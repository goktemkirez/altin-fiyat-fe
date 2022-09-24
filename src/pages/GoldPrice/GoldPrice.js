import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import authAxios from "../../components/axios";
import { Box } from "@mui/material"

import TableExample from "../../components/TableExample"

function GoldPrice() {
    const [goldData, setGoldData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            // setLoading(true);

            const result = await authAxios.get(`/goldPrice`);

            console.log(result.data?.result[0]?.time);
            setGoldData(result.data?.result);
            console.log(result.data?.result[0]?.datetime)
        } catch (error) {
            console.log("error", error);
        } finally {
            setTimeout(() => {
                // setLoading(false);
            }, 1000);
        }
    };

    return (
        <Box>
            <TableExample tableData={goldData}/>
        </Box>
    );
}

export default GoldPrice;