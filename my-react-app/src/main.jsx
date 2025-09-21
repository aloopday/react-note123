
import { createRoot } from 'react-dom/client'

/*
const myelement =(
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Charles</td>

    </tr>
    <tr>
      <td>Wang</td>
    </tr>
  </table>
)
*/
/*
const carslist=['Toyota','BMW','Audi','Man'];
function MyList(){
  return(
    <ul>
      {carslist.map(car=>
        <li key={car}>{car}</li>
      )}
    </ul>
  )
}
  */

/*
const users=[
  {id:1,name:'charles',age:39},
  {id:2,name:'Peter',age:29},
  {id:3,name:'William',age:18}

];

function UserList(){
  return(
    <ul>
      {users.map(user=>
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  )
}
*/

const fruitlist=['banana','apple','cherry'];

function App(){
  return(
    <ul>
      {fruitlist.map((fruit,index,array)=>{
        return(
          <li key={fruit}>
            Number:{fruit},Index:{index},Array:{array.join(",")}
          </li>
        )
      })}
    </ul>
  )

}
createRoot(document.getElementById('root')).render(
 <App />

)
