import AppRouter from "./AppRouter"
import UserContext from "./UserContext";
const MainApp = () => {
    const user={id:1,name:'Rafa',email:'rafa.adalberto@gmail.com'};
    return (
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    );
}

export default MainApp;
