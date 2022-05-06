import GridProperty from "./GridProperty";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import  Card from "./Card";

const FilterCategory = ({}) => {
const [properties, setProperties] = useState([])
const { category } = useParams()

  useEffect(() => {
    console.log("category", category)
    axios.get(`http://localhost:3001/api/category/${category.split('-').join(' ')}`)
    .then(res => setProperties(res.data.properties))
  },[category])
  return(
    <div  className='container d-flex justify-content-center mt-50 mb-50' >
    <div className='row' style={{minWidth: '100%', flexWrap: 'wrap', justifyContent: 'center'}} >
      {properties?.map((data, i) => (
          console.log("esta es la data", data),
        <div  className='col-lg-3'  key={i}>
          <Card data={data} />
        </div>
      ))}
    </div>
  </div>
  )
}
export default FilterCategory;