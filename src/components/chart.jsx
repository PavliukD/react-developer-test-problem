import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {Diagram} from './diagram'


const Container = styled.div`
    padding: 10 20;
`

const ChartWrap = styled.div`
    margin: auto;
    padding: 10px 15px;
    border: 1px solid black;
    max-width: 480px;
`

const StyledForm = styled.form`
`

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;

    :not(:first-child){
        margin-top: 10px;
    }
`

const StyledInput = styled.input`
    font-size: 18px;
`

const StyledLabel = styled.label`
    font-size: 12px;
`

const Input = ({ name, children, inputFunction, value }) => {

    const handleChange = (e) => {
        inputFunction(e.target.value)
    }

    return (
        <InputWrap>
            <StyledLabel htmlFor={name}>{children}</StyledLabel>
            <StyledInput name={name} type='text' onChange={handleChange} value={value}></StyledInput>
        </InputWrap>
    )
}


export const Chart = () => {

    const [xAxis, setXAxis] = useState('')
    const [yAxis, setYAxis] = useState('')
    const [labels, setLabels] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        setLabels(xAxis.split(',').map(value => value.trim()))
        setData(yAxis.split(',').map(value => value.trim()))
        console.log(labels)
        console.log(data)
    }, [xAxis, yAxis])

    return (
        <Container>
            <ChartWrap>
                <Input
                    name='xAxis'
                    value={xAxis}
                    inputFunction={setXAxis}
                >X axis labels:</Input>
                <Input
                    name='yAxis'
                    value={yAxis}
                    inputFunction={setYAxis}
                >Y axis values:</Input>
                <Diagram labels={labels} data={data}/>
            </ChartWrap>
        </Container>
    )
}

