import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";

const form_layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const form_layout_button = {
    wrapperCol: { offset: 14, span: 28 }
};

const ShortenerUrlForm = (props) => {

    const [urlText, setUrlText] = useState("")

    useEffect(() => {
        setUrlText(props.url)
    }, [props.url])

    const submit = (data) => {
        console.log(data)
        props.submitData(data)
    }

    return (
        <div>
            <Form {...form_layout} id="shortenerForm" name="shortenerForm" onFinish={(value) => submit(value)}>
                <Form.Item label="URL" name="url" rules={[{ required: true, message: 'The url field is required' }]}>
                    <Input
                        value={urlText}
                        placeholder="URL"
                        name="url"
                        size="large"
                    />
                </Form.Item>

                <Form.Item {...form_layout_button}>
                    <div>
                        <Button shape="round" type="primary" size="large" htmlType="submit">Shorten</Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}


export default ShortenerUrlForm;