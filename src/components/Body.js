
// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
  
    // Local State Variable
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    // whenever state variable update , react triggers a reconcilation cycle(re-render the component)
    console.log("Body Rendered ");
    // const [listOfRestaurants, setListOfRestraunt]= useState([]);


   useEffect(()=>{
     fetchData();
   },[]);
    
   const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    // console.log(json);
    setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };


    // return listOfRestaurants.length===0?    <Shimmer/>  :(
       
    //    <div className="body">
    //        <div className="filter">
    //         <div className="search">
    //             <input type="text" className="search-box" value= {searchText} onChange={(e) => {
    //                 setSearchText(e.target.value);
    //             }}/>
    //             <button onClick={() => {
    //               console.log(searchText);
    //              const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
    //              setFilteredRestaurant(filteredRestaurant);
    //             }}
    //             >
    //                 Search
    //                 </button>

    return  listOfRestaurants.length === 0 ?  <Shimmer/>  : (
       <div className="body">
           <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value= {searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => {
                  console.log(searchText);
                 const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                 setFilteredRestaurant(filteredRestaurant);
                }}
                >
                    Search
                    </button>
            </div>
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestraunt(filteredList);

                //  listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                //  console.log(listOfRestaurants);
        }}
        >
            Top Rated Restaurants</button>
           </div>
           <div className="res-container">
            {filteredRestaurant.map((Restaurants) =>(
              <Link key={Restaurants.info.id}
              to={"/restaurants/" +Restaurants.info.id }>  <RestaurantCard resData = {Restaurants}/> </Link>
              ))} 
 
           </div>
       </div>
       );  
   };


   export default Body;