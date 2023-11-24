import React from 'react';

export default function SearchBar({sortBy,setSortBy ,handleType,types}) {
  // bind the radio inputs' checked prop to boolean state variables
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
      <input type="radio" value="Alphabetically" checked={ sortBy === 'alphabetical' } onChange={ () => setSortBy('alphabetical') }/>

        Alphabetically
      </label>
      <label>
    
      <input type="radio" value="Price" checked={ sortBy === 'price' } onChange={ () => setSortBy('price') }/>
        Price
      </label>
      <br/>
      <label>
        <strong>Filter:</strong>
        <select onChange={handleType}>
      
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}


// export default function SearchBar({sortBy, setSortBy, types, setFilter}) {
//   // bind the radio inputs' checked prop to boolean state variables
//   return (
//     <div>
//       <strong>Sort by:</strong>
//       <label>
//         <input type="radio" value="Alphabetically" checked={ sortBy === 'alphabetical' } onChange={ () => setSortBy('alphabetical') }/>
//         Alphabetically
//       </label>
//       <label>
//         <input type="radio" value="Price" checked={ sortBy === 'price' } onChange={ () => setSortBy('price') }/>
//         Price
//       </label>
//       <br/>
//       <label>
//         <strong>Filter:</strong>
//         <select onChange={(e) => setFilter(e.target.value)}>
//           <option></option>
//           { types.map((t) => <option value={t}>{ t }</option>) }
//         </select>
//       </label>
//     </div>
//   );
// }