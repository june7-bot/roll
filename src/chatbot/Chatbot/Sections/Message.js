import React from 'react'
import { List, Avatar } from 'antd';
import  {SmileOutlined}  from '@ant-design/icons';

function Message(props) {

    const AvatarSrc = props.who ==='도그블록' ? <SmileOutlined /> : <SmileOutlined />  

    return (
        <List.Item style={{ padding: '1rem'}} >
            <List.Item.Meta
                avatar={AvatarSrc}
                title={props.who}
                description={props.text}       
            />
        </List.Item>
    )
}

export default Message
