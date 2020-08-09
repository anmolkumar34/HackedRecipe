import React,{Component} from 'react'
import Card from "./Card"

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
          isLoaded : false,
          menuItems : [],
          search: ''
        }
    }
    
    componentDidMount(){
        fetch('http://starlord.hackerearth.com/recipe').then(res => res.json()).then(data => { 
          this.setState({
            isLoaded :true,
            menuItems : data
          })
        })
    }

    updateSearch(event){
      this.setState({search : event.target.value.substr(0,30)})
    }

    render(){
        var {isLoaded , menuItems} = this.state;
        if(!isLoaded){
            return <div>Loading...</div>
          }
          else{
            let searchItem = menuItems.filter(
              item => {
                return item.name.toLowerCase().indexOf(this.state.search) !== -1
              }
            )      
            let item = searchItem.map(item => 
                <Card key={item.id} cardDetails={item} />
              );
            return (
                <div>
                  <input 
                  type="text" 
                  value={this.state.search} 
                  onChange={this.updateSearch.bind(this)}
                  placeholder="What's Cooking..."/>
                  <div className="masonryholder">            
                    {item}          
                  </div>
                </div>                
            )
          }
    }
}

export default Home