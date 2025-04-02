import { Header } from "./components/Header";
import {Post} from "./components/Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author = "Mickey" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus, natus dolore consectetur temporibus praesentium ex, adipisci soluta, alias a molestiae? Sint molestias impedit quis magnam possimus odit doloremque sed?"
        />
        <Post 
        author = "Mickey" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus, natus dolore consectetur temporibus praesentium ex, adipisci soluta, alias a molestiae? Sint molestias impedit quis magnam possimus odit doloremque sed?"
        />
        </main>
      </div>
      
    </div>
  )
}


