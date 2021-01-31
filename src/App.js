import React, { useState, useCallback } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import style from './App.module.scss'
import { firstForm, secondForm } from './constant'
import { buildRequestBody, submitForm, delayReload } from './utils'
import { Form } from './components/form'
import { Modal } from './components/modal'

const App = () => {
    const [tab, setTab] = useState('main')
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [secondTabActive, setSecondTabActive] = useState(false)
    const [resultForm, setResultForm] = useState({})
    const [fieldsVisibility, setFieldsVisibility] = useState({})
    const [success, setSuccess] = useState(false)

    const setLoading = useCallback(() => setLoadingStatus(true), [])
    const setLoaded = useCallback(() => setLoadingStatus(false), [])
    const setAddressTab = useCallback(() => setTab('address'), [])
    const updateForm = useCallback(({values, visibleSet}) => {
        setResultForm({...resultForm, ...values})
        setFieldsVisibility({...fieldsVisibility, ...visibleSet})
    }, [fieldsVisibility, resultForm])
    const onSubmit = useCallback(async() => {
        setLoading()
        try {
            const data = buildRequestBody(fieldsVisibility, resultForm)
            const result = await submitForm(data)
            if (result.success) {
                setSuccess(true)
                delayReload()
            } else {
                setLoaded()
            }
        } catch {
            setLoaded()
        }
    }, [fieldsVisibility, resultForm])

  return (
    <div className={style.App}>
        {
            success ?
                <Modal/> :
                <div className={style.tabWrapper}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={tab}
                        onSelect={setTab}
                    >
                        <Tab eventKey="main" title="Основные данные">
                            <Form fields={firstForm} onSubmit={setAddressTab} onValidationStateChange={setSecondTabActive} onChange={updateForm} btnText="Продолжить"/>
                        </Tab>
                        <Tab eventKey="address" title="Адрес Доставки" disabled={!secondTabActive} >
                            <Form fields={secondForm} onChange={updateForm} onSubmit={onSubmit} btnText="Оформить заказ" loading={loadingStatus}/>
                        </Tab>
                    </Tabs>
                </div>
        }
    </div>
  )
}

export default App;
