import { Route, Routes } from 'react-router-dom';
import routes from './router';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        {
          routes.map((item, index) => {
            return <Route path={item.path} element={item.element} key={item.name} >
              {item.children && item.children.map((children) => {
                return <Route index={children.index} path={children.path} element={children.element} key={children.name} />
              })}
            </Route>

          })
        }
      </Routes>
    </div>
  );
}

export default App;
