import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import { useEffect } from 'react';
import { fetchFixtures } from './lib/fetch-data';
import { data } from './lib/data';
import Table from './components/table';
function App() {

  // const fetchData = async () => {
  //   const fixtures = await fetchFixtures();
  //   console.log(fixtures);

  // }
  // useEffect (() => {  
  //   fetchData();

  // })

    console.log(data);


  return <div className="">
    <NavBar />
  <Table data ={data}/>

    </div>;

}

export default App;
