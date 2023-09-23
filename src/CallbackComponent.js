import React, {useEffect} from 'react';

const CallbackComponent = ({userData, setUserData, setToken}) =>{
    

    useEffect(()=>{
        const extractTokenFromHash = () => {
            return window.location.hash
                .substring(1)
                .split('&')
                .reduce((initial, item) => {
                    let parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                    return initial;
                }, {});
            };

        const fetchDataWithToken = async (token) => {
            try{
                let response = await fetch('https://api.spotify.com/v1/me',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                let data = await response.json();
                setUserData(data);
            } catch(error){
                console.error("Error fetching data: ", error);
            }
        };
        
        const hash = extractTokenFromHash();
        const token = hash.access_token;
        
        if(token){
            setToken(token);
            fetchDataWithToken(token);
        }else{

        }
        window.location.hash='';
    }, );
    return (<div></div>);
    
}

export default CallbackComponent;