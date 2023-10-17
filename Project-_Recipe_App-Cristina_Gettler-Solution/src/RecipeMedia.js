import React from "react";

function RecipeMedia({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>try<td>{recipe.cuisine}</td>
      <td>
        <img src = {recipe.photo} alt="http://www.nopicavailable.com" className="scala-e-down" /></td>
      <td className="content_td"><p>{(recipe.ingredients)}</p></td>
      <td className="content_td"><p>{(recipe.preparation)}</p></td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  )
}
export default RecipeMedia;