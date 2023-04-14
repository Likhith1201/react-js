import React from 'react'
import Andhrabank from './andhrabank'
import Corperationbank from './corperationbank'

export default function Unionbank() {
    let initialData={
        uname:"kalyan",
        age:34
    }
    return (
        <div>
            <h1>Union bank</h1>
            <Andhrabank location="guntur" data={initialData}/>
            <Corperationbank location="kovuru" data={initialData}/>
            

        </div>
    )
}