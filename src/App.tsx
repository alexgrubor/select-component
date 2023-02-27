import React, {useState} from 'react'
import {Select, SelectOption }  from "./components/Select"
const options = [
  {
    label: 'Option 1',
    value: 1
  },
  {
    label: 'Option 2',
    value: 2
  },
  {
    label: 'Option 3',
    value: 3
  },
  {
    label: 'Option 4',
    value: 4
  }
]

const App = () => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  return (
    <>
    <h1>
      Select Component
    </h1>
    <p>
      This is a select component that can be used for a single selection or a multiple selection.
    </p>
    <p>
      The component is built using React and Typescript.
    </p>
    <h2>
      Multiple Select
    </h2>
       <Select
        multiple
        options={options}
        value={value1}
        onChange={o  => setValue1(o)}
      />
      <br />
      <h2>
        Single Select
      </h2>
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
    </>

  )
}
export default App