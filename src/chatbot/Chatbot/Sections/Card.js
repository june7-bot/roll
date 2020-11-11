import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

function CardComponent(props) {
    return (
        <Card
            style={{ width: 215 }}
      
            actions={[
                <a href={props.cardInfo.fields.link.stringValue}>
                  {props.cardInfo.fields.description.stringValue}보러가기 
                </a>
            ]}
        >
            <Meta   
                title={props.cardInfo.fields.stack.stringValue}
            />

        </Card>

    )
}

export default CardComponent
