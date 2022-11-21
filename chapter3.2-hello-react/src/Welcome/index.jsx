import { Component } from 'react'

import welcome from './Welcome.module.css'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h4 className={welcome.title}>I am Welcome Component</h4>
            </div>
        )
    }
}
