import React, { useState, useEffect } from "react"
import { Space, Table, Tag, Button, Popconfirm, message, Form, Input, Modal } from 'antd';
import { get_table } from "../../../api/user"
import './index.scss'
export default function User() {
    const [data, setData] = useState(null)
    const [height, setHeight] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalItem, setModalItem] = useState(null)
    useEffect(() => {
        get_table().then((res) => {
            setData(res.data.list)
        });
        const resize = () => {
            let height = window.innerHeight - 270
            setHeight(height)
        };
        window.addEventListener('resize', resize())
    }, [])
    // if (!data) return null;
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'id',
            width: 120,
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
            width: 120,
            key: 'id',
        },
        {
            title: '地址',
            dataIndex: 'address',
            width: 120,
            key: 'id',
        },
        {
            title: '状态',
            width: 120,
            key: 'id',
            dataIndex: 'status',
            render: (status) =>
                (status === 1 ? <Tag color="success">使用中</Tag> : <Tag color="error">已停用</Tag>)
        },
        {
            title: '操作',
            width: 150,
            key: 'id',
            fixed: 'right',
            render: (_, record, index) =>
            (
                <Space size="middle" >
                    <Button type="primary" size='middle' onClick={() => showModal(record)}>授权</Button>
                    <Popconfirm title={`确认删除？`} okText="确认" cancelText="取消" onConfirm={() => onConfirmDel(record)}>
                        <Button type="primary" size='middle'>删除</Button>
                    </Popconfirm>

                </Space>
            )
        },
    ];
    // 删除
    const onConfirmDel = (record) => {
        let index = data.findIndex((item, i) => item === record)
        data.splice(index, 1)
        setData([...data])
        message.success('删除成功');
    };
    // 查询
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // 显示模态框
    const showModal = (item) => {
        console.log(item);
        setModalItem(item)
        setIsModalVisible(true);
        console.log(modalItem, 'modalItem');

    };
    // 关闭模态框
    const handleOk = () => {
        setIsModalVisible(false);
    };
    // 取消模态框
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    console.log(height);
    console.log(data, 'data');
    return (
        <div className="user">
            <Form
                style={{ display: 'flex' }}
                name="user"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item label="姓名" name="username">
                    <Input />
                </Form.Item>

                <Form.Item label="手机号" name="password">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Table columns={columns} dataSource={data} scroll={{ y: height }} className='table' />
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {/* <p>{modalItem.name}</p> */}
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}