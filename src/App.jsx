import React,{Component} from "react";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiTwotoneStar } from 'react-icons/ai';
import { FcStart } from 'react-icons/fc';
import { RiTodoLine } from 'react-icons/ri';


class App extends Component{
    constructor(){
        super()
        this.state={
            value:"",
            todo:[
               
            ],
            
        }
        console.log(constructor)

    }

   

    //input 
    handlechg=(val)=>{
        this.setState({
            value:val
        })

    }


    //submit 
setdata=()=>{
    console.log(this.state.value)

    //object title,s
    let obj ={
        title : this.state.value ,
        s : 0
    }

    this.state.todo=[...this.state.todo,obj]

    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

    this.setState({
      
        value:""
    })

    // 
   
    console.log(this.state.todo)
}
componentDidMount(){
    let data = localStorage.getItem("Todo_List")
    console.log(data)
    // Parse string to obj
    
    this.setState({})
    if(data == null){
        this.state.todo=[]
    }
    else{
        this.state.todo=JSON.parse(data)
    }
}

//state chg = 0 or 1
edit = (ind)=>{
    //o 
    for(var i =0;i<this.state.todo.length;i++){
        this.state.todo[i].s=0
    }

    this.state.todo[ind].s=1
    this.setState({})
   
    

}


//todo title => value inp 
setnewtext=(val,ind)=>{
 this.state.todo[ind].title=val
    this.setState({
      
    })


}

update = (i)=>{
    this.state.todo[i].s=0
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
    this.setState({
      
    })
}
dlete = (ind) =>{
    this.state.todo.splice(ind,1)
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
    this.setState({})
}



    render(){
        return(
            <div>
                <h1 style={{backgroundColor:'yellow',textAlign:'center',}}> <i><RiTodoLine/></i> Todo List </h1>
                <input  value={this.state.value} onChange={(e)=>this.handlechg(e.target.value)} type="text" />
                <button onClick={()=>this.setdata()}>
                    <IoIosAddCircleOutline color="red"/>
                </button>
                
                {
                    this.state.todo.map((v,i)=>{
                        return(

                            v.s == 0 ?
                            //text 
                          
                            <li key={i} style={{listStyle:"none",margin:12+"px", backgroundColor:'lightcyan',textAlign:'center',fontWeight:'bolder'}}>
                              <i><FcStart/></i>
                                {v.title}
                              <button onClick={()=>this.edit(i)}>edit</button>
                              <button onClick={()=>this.dlete()}>delete</button>

                            </li>

                            :
                            <li key={i} style={{listStyle:"none",margin:12+"px",backgroundColor:'lightcyan',textAlign:'center',fontWeight:'bolder'}}>
                            <i><FcStart/></i> 
                            <input type="text" value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} />
                            <button onClick={()=>this.update(i)}>update</button>
                            <button>delete</button>

                          </li> 
                          

                        

                        )
                    })
                }
              
            </div>
        )
    }

}

export default App