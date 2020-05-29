import React from "react";
import MenuItem from "../MenuSection/MenuItem/MenuItem"
import "./MenuSection.scss"


class MenuSection extends React.Component{
    state = {
        sandwich : [],
        new_sandwich : [],
        id: "",
        isActive: false
    }
    
    
 componentDidMount(){
     fetch('/data/data.json')
     .then(res => res.json())
     .then(res => this.setState({ sandwich : res.data  }))
     .then(res => this.setState({ new_sandwich : this.state.sandwich.filter(res => res.id.includes('cl'))}))
 }

 
 handleOnClick = (e) => {
     const category = e.target.innerText
     let arr = [];
     const sandwiches = this.state.sandwich;
     if (category === '클래식'){
         arr = sandwiches.filter(sandwich => sandwich.id.includes('cl'))
         this.setState({ isActive : true})
     } else if (category === '프레쉬&라이트'){
        arr = sandwiches.filter(sandwich => sandwich.id.includes('fl'))
        this.setState({ isActive : true})
         } else if (category === '프리미엄'){
            arr = sandwiches.filter(sandwich => sandwich.id.includes('pm'))
            this.setState({ isActive : true})
         } else {
            arr = sandwiches.filter(sandwich => sandwich.id.includes('bf'))
            this.setState({ isActive : true})
         }
     this.setState({new_sandwich : arr})
    }


        
render(){
    return(
    <div className="MenuSection">
        <div className="title">Subway's Menu</div>
        <ul className="category" onClick={this.handleOnClick}>
            <li><a>클래식</a></li>
            <li><a>프레쉬&라이트</a></li>
            <li><a>프리미엄</a></li>
            <li><a>아침메뉴</a></li>
        </ul>
        <div className="menu_wrapper">
            {this.state.new_sandwich.map((sandwich) => {
                    return(
                    <MenuItem  
                        key={sandwich.id} 
                        image={sandwich.image} 
                        name={sandwich.name} 
                        summary={sandwich.summary} />
                        )}
                        )
                }
    
        </div>
    </div>
                                                                                                                                                                                                                                                                            
    
    )
 }
}

export default MenuSection;