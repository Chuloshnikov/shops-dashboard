import { React, useEffect, useState } from 'react';
import Customers from './Customers';

const CustomersContainer = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState([true]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data);
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

  return (
    <div>
          {
                        users.filter( obj => {
                            const fullName = (obj.first_name + obj.last_name).toLowerCase();
                          
                                return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase());
                            })
                        .map(obj => (
                            <Customers onChangeSearchValue={onChangeSearchValue} 
                            searchValue={searchValue}
                            isLoading={isLoading} key={obj.id} {...obj}/>
                        ))
                    }
    </div>
    )   
}

export default CustomersContainer;