import { React, useEffect, useState } from 'react';
import Customers from './Customers';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";

import styles from "./CustomersContainer.module.css";

const CustomersContainer = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState([true]);
  const [searchValue, setSearchValue] = useState('');
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${pages}`)
    .then(res => res.json())
    .then(json => {
      setUsers(json.data);
      console.log(json.data);
    })
    .catch(err => {
      console.warn(err);
      alert("Error to get Users");
    })
    .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const changeUserPage = () => {
    if (pages === 1) {
      setPages(pages = pages + 1);
    } else if (pages === 2) {
      setPages(pages = pages - 1)
    }
  }
  

    return (
      <>
        <h1>Customers</h1>
        <div className={styles.CustomersContainer}>
      
          <input onChange={onChangeSearchValue} type="text" placeholder='Search customer...' />
          <ul>
      {
          users.filter( obj => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
          
                return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase());
              })
          .map(obj => ( 
                <div>
                  <Customers isLoading={isLoading}  key={obj.id} {...obj}/>
                </div>
            
          ))
        }
          </ul>
          <div className={styles.buttons}>
          <BsFillCaretLeftFill  onClick={changeUserPage()}/>
          <BsFillCaretRightFill onClick={changeUserPage()}/>
          </div>
        </div>
    </>
    )   
}

export default CustomersContainer;