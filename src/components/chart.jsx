import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Diagram } from './diagram'

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

const Input = ({name, children, inputFunction, value}) => {

    const handleChange = (e) => {
        console.log(e.target.value)
        inputFunction(e.target.value)
    }

    return(
        <InputWrap>
            <StyledLabel htmlFor={name}>{children}</StyledLabel>
            <StyledInput name={name} type='text' onChange={handleChange} value={value}></StyledInput>
        </InputWrap>
    )
}


export const Chart = () => {

    const [xAxis, setXAxis] = useState('')
    const [yAxis, setYAxis] = useState('')

    useEffect(() => {
        const xAxisValues = xAxis.split(',')
        const yAxisValues = yAxis.split(',')
    })

    return(
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
            </ChartWrap>
            <Diagram></Diagram>
        </Container>
    )
}

https://react-chartjs-2.js.org/components/chart