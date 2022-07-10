import React, {useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './FormPage.css'
import Categories from "./ categories/ Categories";
import ModalWindow from './modalWindow/ModalWindow'
import {useDispatch, useSelector} from "react-redux";
import {newSetting, newTimeValue, selectSetting} from "../../redux/setSlice"

const FormPage = () => {
    const allChecked = () => {
        const check = document.querySelectorAll('input')
        for (let i = 0; i < check.length; i++) {
            check[i].checked = true
        }
    }
    const dispatch = useDispatch()
    const settingsValue = useSelector(selectSetting)
    const switchChecked = () => {
        const check = document.querySelectorAll('input')
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked === true) {
                dispatch(newSetting({['value' + i]: 'true'}))
            } else {
                dispatch(newSetting({['value' + i]: 'false'}))
            }
        }
    }
    useEffect(() => {
        const check = document.querySelectorAll('input')
        document.getElementsByName('messagesTime1')[0].value = settingsValue.timeValue1
        document.getElementsByName('messagesTime2')[0].value = settingsValue.timeValue2
        document.getElementsByName('messagesTime3')[0].value = settingsValue.timeValue3
        for (let i = 0; i < check.length; i++) {
            if (settingsValue['value' + i] === 'true') {
                check[i].checked = true
            } else {
                check[i].checked = false
            }
        }
    }, [])

    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col className='col-12 h1 fw-bold'>
                        <p>Управление рассылками</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12 h5 text-secondary mb-5 fw-bold'>
                        <p>Здравствуйте, Андрей! Выберите категории писем, от которых хотите отписаться.</p>
                    </Col>
                </Row>
                <Row>
                    <Form>
                        <Row>
                            <Col className='col-12 col-md-6 h6 fw-bold'>
                                <p>Общие уведомления</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className='col-12 col-md-6'>
                                <Form.Label>Приветственная серия</Form.Label>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='hello'
                                />
                            </Col>
                            <Col className='col-12 col-md-5 mb-3 mb-md-0'>
                                <Form.Text className="text-black">
                                    4 полезных и ёмких письма в течение месяца
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className='col-12 col-md-6'>
                                <Form.Label>Образовательные вебинары</Form.Label>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='webinar'
                                />
                            </Col>
                            <Col className='col-12 col-md-5'>
                                <Form.Text className="text-black">
                                    <p className='w-75'>
                                        Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать 2 письма с
                                        напоминанием о предстоящем вебинаре.
                                    </p>
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row className='mb-5'>
                            <Col className='col-12 col-md-6'>
                                <Form.Label>Личные сообщения</Form.Label>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='messages'
                                />
                            </Col>
                            <Col className='col-12 col-md-5'>
                                <Form.Select name='messagesTime1' className='text-secondary w-50'
                                             onChange={() => dispatch(newTimeValue({timeValue1: document.getElementsByName('messagesTime1')[0].value}))}>
                                    <option value="instantly">Мгновенно</option>
                                    <option value="1TimeInWeek">1 раз в день</option>
                                    <option value="disable">Отключить</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12 h6 fw-bold'>
                                <p>Уведомления по сайтам</p>
                            </Col>
                        </Row>
                        <Row className='mb-5'>
                            <Col className='col-12 col-md-6'>
                                <Form.Label>Новости</Form.Label>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='news'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12 h6 fw-bold'>
                                <p>Поисковые агенты</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12'>
                                <Form.Label>Бизнес</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-5 mb-md-3">
                            <Col className='col-12 col-md-4 d-flex flex-wrap'>
                                <Categories>Seo</Categories>
                                <Categories>Продвижение</Categories>
                                <Categories>Аналитика</Categories>
                            </Col>
                            <Col
                                className='col-12 col-md-2 d-flex justify-content-md-end justify-content-xl-start '>
                                <ModalWindow>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
                                    alias amet, autem distinctio esse eveniet fugit in magni maiores molestiae nobis
                                    perspiciatis praesentium recusandae sed voluptas voluptatum? Accusantium,
                                    labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at dolorum
                                    itaque neque quasi quia recusandae repellat saepe sunt vel. Amet corporis
                                    doloribus et id quia repudiandae sunt unde voluptatibus.</ModalWindow>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='business'
                                />
                            </Col>
                            <Col className='col-12 col-md-5'>
                                <Form.Text className="text-black">
                                    <p className='w-75'>
                                        Поисковый агент присылает 1 письмо в неделю и только при условии, что
                                        найдены
                                        новые
                                        площадки.
                                    </p>
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12'>
                                <Form.Label>123</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-5 mb-md-3">
                            <Col className='col-12 col-md-4 d-flex flex-wrap'>
                                <Categories>Seo</Categories>
                                <Categories>Продвижение</Categories>
                            </Col>
                            <Col className='col-12 col-md-2 d-flex justify-content-md-end justify-content-xl-start'>
                                <ModalWindow>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                                    ea et excepturi exercitationem, illum ipsam laudantium nemo nobis quia quos
                                    saepe tempore unde vero voluptate! Et impedit obcaecati quod.</ModalWindow>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='123'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12'>
                                <Form.Label>SEO</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-5 mb-md-3">
                            <Col className='col-12 col-md-4 d-flex flex-wrap'>
                                <Categories>Seo</Categories>
                                <Categories>Продвижение</Categories>
                                <Categories>Аналитика</Categories>
                            </Col>
                            <Col className='col-12 col-md-2 d-flex justify-content-md-end justify-content-xl-start'>
                                <ModalWindow>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores
                                    beatae expedita fuga inventore molestiae mollitia nemo possimus! Consectetur
                                    consequatur consequuntur distinctio dolorum enim ipsam itaque libero minus omnis
                                    quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                                    dolore, earum eius ex fuga laboriosam magnam maxime nesciunt odio omnis quasi
                                    quia recusandae similique sunt unde vel voluptate voluptatibus? Nisi? Lorem
                                    ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos est
                                    necessitatibus nesciunt sed? Accusantium, aut beatae cupiditate dolore fuga iste
                                    itaque obcaecati odit possimus quas sed ut vel voluptatum.</ModalWindow>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='SEO'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12'>
                                <Form.Label>Бурж ссылки</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col className='col-12 col-md-4 d-flex'>
                                <Categories>Биржи ссылок: Не обнаружен</Categories>
                            </Col>
                            <Col
                                className='col-12 col-md-2 d-flex justify-content-md-end justify-content-xl-start flex-wrap'>
                                <ModalWindow>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                                    cupiditate deserunt eaque eius explicabo, labore magnam nam porro quam, sunt
                                    tempora voluptate, voluptates. Atque eum nobis nulla quae ut
                                    voluptatum?</ModalWindow>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='links'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12 col-md-8 col-lg-6 col-xl-5 mb-4'>
                                <Form.Select name='AdvertisingCompanies' className='w-50 fw-bold'>
                                    <option>Рекламные компании</option>
                                    <option value="Company1">Компания 1</option>
                                    <option value="Company2">Компания 2</option>
                                    <option value="Company3">Компания 3</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className="mb-5 mb-md-3">
                            <Col className='col-12 col-md-6'>
                                <Form.Label>Строительство домов в Москве</Form.Label>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='construction'
                                />
                            </Col>
                            <Col className='col-12 col-md-5'>
                                <Form.Select name='messagesTime2' className='text-secondary w-50'
                                             onChange={() => dispatch(newTimeValue({timeValue2: document.getElementsByName('messagesTime2')[0].value}))}>
                                    <option value="instantly">Мгновенно</option>
                                    <option value="1TimeInWeek">1 раз в день</option>
                                    <option value="disable">Отключить</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col className='col-12 col-md-6'>
                                <Form.Label>Строительство домов в Москве</Form.Label>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='construction'
                                />
                            </Col>
                            <Col className='col-12 col-md-5'>
                                <Form.Select name='messagesTime3' className='text-secondary w-50'
                                             onChange={() => dispatch(newTimeValue({timeValue3: document.getElementsByName('messagesTime3')[0].value}))}>
                                    <option value="instantly">Мгновенно</option>
                                    <option value="1TimeInWeek">1 раз в день</option>
                                    <option value="disable">Отключить</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12 h6 fw-bold'>
                                <p>Уведомления по Телеграму</p>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col className='col-12 col-md-6'>
                                <Form.Label>Новости</Form.Label>
                            </Col>
                            <Col className='col-12 col-md-1'>
                                <Form.Check
                                    type="switch"
                                    name='telegram'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12 col-md-4 col-lg-3 col-xxl-2'>
                                <Button className='my-btn fw-bold mb-3 mb-md-0' onClick={allChecked}>По
                                    умолчанию</Button>
                            </Col>
                            <Col className='col-12 col-md-4 col-lg-3'>
                                <Button variant="primary" type="submit" className='fw-bold' onClick={switchChecked}>
                                    Сохранить изменения
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default FormPage;
