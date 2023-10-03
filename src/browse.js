import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import CardComp from './card';

function Browse() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  async function getData() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
    const result = await response.json();
    setItems(result.meals);
  }

  async function getCategories() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const result = await response.json();
    setCategories(result.categories);
  }

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  async function handleChange(event) {
    const changedValue = event.target.value;
    setSelectedCategory(changedValue);

    if (changedValue === 'all') {
      getData();
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=`+changedValue);
      const result = await response.json();
      setItems(result.meals);
    }
  }

  return (
    <>
      <h6 >Categories:</h6>
      <Form.Select aria-label="Default select example" onChange={handleChange} value={selectedCategory}>
        <option value="all">All</option>
        {categories.map((category) => (
          <option value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </Form.Select>
      <div className="cardContainer">
        {items.map((item) => (
          <CardComp image_url={item.strMealThumb} title={item.strMeal} key={item.idMeal}description={item.strInstructions} />
        ))}
      </div>
    </>
  );
}

export default Browse;
