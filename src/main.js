import CardComp from './card';
import data from './data.json'

function Main() {
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"3%"}}>
    {data.map(function(item){
        return(
            <CardComp image_url={item.image_url} title={item.title} description={item.description}/>

)})}
</div>
  </>
)}

export default Main;