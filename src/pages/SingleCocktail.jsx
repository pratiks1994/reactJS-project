import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const res = await fetch(`${url}${id}`);
        const { drinks } = await res.json();
        const drink = drinks[0];
        if(drink){
      
          const {strDrink:name , strDrinkThumb : img , strAlcoholic : info , strGlass : glass , strCategory:category , strInstructions : instruction , strIngredient1 , strIngredient2 ,strIngredient4 , strIngredient3 , strIngredient5} = drink
          const ingredients = [strIngredient1 , strIngredient2 ,strIngredient4 , strIngredient3 , strIngredient5]
          const newCocktail = {name , img , info , glass , category ,instruction, ingredients}
          setCocktail(newCocktail)   
        }
        else{
          setCocktail(null)
        }
        setLoading(false)

      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getCocktail();
  }, [id]);

  if(loading)
  return (
    <Loading/>
  )
  let {name , img , info , glass , category ,instruction, ingredients} = cocktail
  return (
      <section className="section section-cocktail"> 
        <Link className="btn btn-primary" to ='/' > back home</Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={img} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">Name : </span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">instruction :</span> {instruction}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item,index)=>{
                return item ? <span key = {index}>{item} </span> : null
              }
              )
            }
            </p>
            
          </div>
        </div>

      </section>
  )
};

export default SingleCocktail;
