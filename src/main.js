import CardComp from './card';
import data from './data.json';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './main.css';


function Main() {
    let [items,setItems]= useState([]);

    async function getData(){
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
      const result = await response.json();
      setItems(result.meals)


    }

    useEffect(function (){getData()},[])
  
    function handelSubmit(event){
        event.preventDefault()
        let searchValue = event.target.search.value;
        let filteredItems = data.filter(function(item){return item.title.toLowerCase().includes(searchValue.toLowerCase())})
        setItems(filteredItems);

    }
  return (
    <>
          <Form className="d-flex" onSubmit={handelSubmit} id= "searchForm">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
    <div id= "cardContainer" >
    {items.map(function(item){
        return(
            <CardComp image_url={item.strMealThumb} title={item.strMeal} />

)})}
</div>
  </>
)}

export default Main;