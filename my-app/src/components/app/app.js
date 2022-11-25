import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SerachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-lst/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John S.', salary: 800, increase: false, id: 1},
                {name: 'Alex D.', salary: 3000, increase: true, id: 2}, 
                {name: 'Talant A.', salary: 4000, increase: false, id: 3}, 
                {name: 'David B.', salary: 4000, increase: false, id: 4} 
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {      
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }
  
    render() {
        return (
            <div className="app">
                <AppInfo />
    
    
                <div className="search-panel">
                <SerachPanel/>
                <AppFilter/>
                </div>
    
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployersAddForm/>
            </div>
        )
    }
}

export default App;