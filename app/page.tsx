"use client";
import { useState } from "react"; 


export default function Home() {
    const [dataGeneral, setdataGeneral] = useState([])
        const fetchDataFromApi = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/', {
                    headers: {
                        Accept: "application/json",
                        method: "GET",
                    }
                });
                if (response) {
                    const dataBuffer = await response.json();
                    const data = dataBuffer;
                    setdataGeneral(data.data) ;

                    console.log(dataGeneral);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataFromApi();

    return (
        <main>
            <table>                
                <tbody>
                    {dataGeneral.map((item: any, index: number) => (
                        <tr key={index}>
                            <td>{item.Title}</td>
                            <td>{item.Amount ==="" ? "-":item.Amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
    


  
