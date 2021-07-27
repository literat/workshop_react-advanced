// Flexible Compound Components

import * as React from 'react'
import {Switch} from '../switch'

// 👨‍💻 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 📜 clone can pass props only to immediate children
  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, toggle})
  })
}

// 👨‍💻 we'll still get the children from props (as it's passed to us by the
// developers using our component), but we'll get `on` implicitly from
// ToggleContext now
// 🦉 You can create a helper method to retrieve the context here. Thanks to that,
// your context won't be exposed to the user
// 💰 `const context = React.useContext(ToggleContext)`
// 📜 https://reactjs.org/docs/hooks-reference.html#usecontext
function ToggleOn({on, children}) {
  return on ? children : null
}

// 👨‍💻 do the same thing to this that you did to the ToggleOn component
function ToggleOff({on, children}) {
  return on ? null : children
}

// 👨‍💻 get `on` and `toggle` from the ToggleContext with `useContext`
function ToggleButton({on, toggle, ...props}) {
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          {/* so this component will get no `on` and `toggle` props */}
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App
