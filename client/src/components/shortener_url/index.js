import React, { useState } from "react";
import ShortenerUrlForm from "./shortener_url_form";
import { Row, Col, Typography, Card, notification, Divider, Modal, Input, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import UrlShortenerAPI from "../../services/shorter_url_api";

const { Title } = Typography

const Index = (props) => {

    const [visible, setVisible] = useState(false)
    const [url, setUrl] = useState(undefined)
    const [shorterURL, setShorterURL] = useState(undefined)

    const submit = (data) => {
        console.log(data)
        UrlShortenerAPI.shorter_url(data.url)
            .then(response_data => {
                setShorterURL(response_data.short_url)
            })
            .then(() => {
                setVisible(true)
                notification.success({
                    message: "URL sucessfully generated",
                    duration: 5
                })
            })
            .catch(error => {
                notification.error({
                    message: "Something Bad Happened",
                    duration: 4
                })
            }).finally(() => {
                setUrl(undefined)
            })
    }

    const openLink = (url) => {
        window.open(url)
    }

    return (
        <div>
            <Card>
                <Divider />

                <Row justify="center">
                    <Title>Shorten my URL</Title>
                </Row>
                <Card>
                    <Row justify="center">
                        <Col span={20}>
                            <ShortenerUrlForm url={url} submitData={(data) => submit(data)} />
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </Card>
            </Card>

            <Modal
                title="Your shorten URL"
                visible={visible}
                onOk={() => setVisible(false)}
                closable={false}
                cancelButtonProps={{ disabled: true, visible: "false" }} >
                <Col>
                    <Input
                        id="link"
                        value={shorterURL}
                        size="middle"
                        suffix={
                            <div>
                                <Button shape="round" icon={<CopyOutlined />} size="small"
                                    data-clipboard-target="#link" onClick={() => openLink(shorterURL)}>
                                    Open in a new Tab
                                </Button>
                            </div>
                        } />
                </Col>
            </Modal>
        </div>
    )
}

export default Index;