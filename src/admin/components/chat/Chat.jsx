import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Input, MessageList } from 'react-chat-elements'

function Chat() {
    return (
        <Row>
            <div style={{textAlign:'center' , fontSize:'18px',textTransform:'uppercase',marginBottom:'15px',color:'var(--shp-primary)'}}>Tin Nhắn</div>
            <br />
            <hr />
            <div className="wrap-chat" style={{height:'60vh',overflow:'scroll'}}>
                <div className="chat-list">
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={[
                            {
                                position: 'right',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'left',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'right',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'left',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'right',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'right',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'right',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'left',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'right',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'left',
                                title:'xuanquyen',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                        ]} />
                </div>
            </div>
            <hr />
            <div>
                <Input placeholder='Type here ...' multiline={true} rightButtons={<Button text='Send' title='Send' />} />
            </div>
            <hr />
        </Row>
    )
}

export default Chat