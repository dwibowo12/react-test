import React, {useState, useEffect} from 'react';

export function Playground(){

    const [users, setUsers] = useState([]);
    const [realUsers, setRealUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(5);
    const [endOfList, setEndOfList] = useState(false);

    const [clickedName, setClickedName] = useState();
    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data); // set users in state
                setRealUsers(data);
            })
            .finally(() => {
                setIsLoading(false);
                console.log("loaded");
            })
        
    }, []); // empty array because we only run once


    function showMore() {
        if (Math.ceil(users.length / userPerPage) != currentPage){
            setCurrentPage(currentPage+1);
        } else {
            setEndOfList(true);
        }
        
    }

    function handleDelete(id) {
        const data = users.filter(user => user.id !== id);
        setUsers(data);
    }

    function UserList({id, name, photo, link, type}){

        return (
            <div>
                <div>
                    <img src={photo} style={{width: '100px'}} />
                </div>
                <div>
                    ID : {id}&nbsp;
                    <button onClick={() => handleDelete(id)}>X</button>
                </div>
                <div>
                    <a href={link} target="_blank">@{name}</a>
                </div>
                <div>
                    Currently {type} At Github.com
                </div>
                <br/>
            </div>
        );
    }

    if (isLoading) {
        return (
            <p>
                Loading....
            </p>
        );
    } else {
        return (
      
            <div className="section">
            <button onClick={showMore}>Show More</button>
            {endOfList ? <div>End of page</div> : ''}
              {users.slice((currentPage*userPerPage-userPerPage), (currentPage*userPerPage)).map(user => <UserList id={user.id} name={user.login} link={user.html_url} photo={user.avatar_url} type={user.type} />)}
            </div>
          );
    }

 
}