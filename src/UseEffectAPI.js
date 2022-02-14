import React, { useState }from 'react';
const UseEffectAPI = () => {
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState([false]);
        const getUsers = async() =>{
            try{
                const data = await fetch('https://reqres.in/api/users?page=1');
                const realData = await data.json();
                setUsers(realData.data);
                setLoading(true);
            }catch(err){
                console.log(err);
            }
        }
    return (
        <div className="main">

         <nav class="navbar sticky-top navbar-light bg-light shadow-lg p-3 mb-5 bg-body rounded">
            <div class="container-fluid">
                 <h2> LetsGrowMore </h2>
            <button className="btn btn-lg btn-outline-dark text-right bt" id="btn" onClick={getUsers}>Get Users</button>
            </div>
         </nav>
              
         <div class="container">
            {
                users.map((curElem)=>{
                    return(
                        <div class="container-sm cd" >
                            <div class="cl shadow-lg p-3 mb-5 bg-body rounded row">

                                <div class="col imag">
                                    <img src={curElem.avatar} class="pic shadow-sm p-3 mb-5 bg-body rounded row" alt="avatar"/>
                                </div>

                                <div class="col">
                                    <div class="col2">
                                        <h2 class="card-title fw-bold">{curElem.first_name} {curElem.last_name}</h2>
                                        <h3 class="fst-normal">{curElem.email}</h3>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                )
                })
            }
            </div>
        </div>
    )
}

export default UseEffectAPI;
