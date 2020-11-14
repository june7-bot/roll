import React from 'react'
import { List, Avatar } from 'antd';


function Message(props) {

    //const color = props.who ==='도그블록' ? 'magenta' : 'blue'
    //style={{ padding: '1rem',   color : color}}
    const styling = props.who ==='도그블록' ? 'magenta' : 'blue'
   
if (props.who === '도그블록') {
    
    return (
    
        
              <List.Item style = {{ 
            //   position: 'relative',
            //     padding: '10px 20px',
            //     backgroundColor: '#E5E5EA',
            //     borderRadius: '25px',
            //     color: 'black',
            //     float: 'left'
                }}>
                  
                    <List.Item.Meta
                    
                        title={props.who}
                        description={props.text}       
                     />
                </List.Item> 
            
            )
        }        
        else {

   return (

      <List.Item  style = {{
        // position: 'absolute' ,
     
        // color: 'white',
        // backgroundColor: '#0B93F6',
        // borderRadius: '15px',
        // float: 'right'
        }}>
          
            <List.Item.Meta
            
                title={props.who}
                description={props.text}       
             />
        </List.Item> 
    
    )}
   
}

export default Message
