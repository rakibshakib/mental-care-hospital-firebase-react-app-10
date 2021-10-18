const { useState, useEffect } = require("react")

/* this is a fetch data from service json file */
const useHospitalData = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('./serviceData.json')
        .then(res=>res.json())
        .then(data=> setData(data))
    }, [])
    return data
}
export default useHospitalData;