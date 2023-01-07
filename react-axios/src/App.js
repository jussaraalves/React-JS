import React, {useEffect, useState} from "react";
import api from "./services/api";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUserData(){
      try{
        let response = await api.get("/users/jussaraalves");
        setUser(response.data);
      }catch(err){
        console.error("ops! ocorreu um erro" + err);
      }

    }
    getUserData();
    // api
    //   .get("/users/jussaraalves")
    //   .then((response) => setUser(response.data))
    //   .catch((err) => {
    //     console.error("ops! ocorreu um erro" + err);
    //   });
  }, []);

  return (
    <div className="App">
      {console.log(user)}
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );
}

export default App;
