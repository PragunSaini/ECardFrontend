import React, { useEffect } from 'react'

import { initTest, hello } from './reducers/testReducer'

const App = props => {
    const { store } = props
    console.log(store.getState())

    useEffect(() => {
        store.dispatch(initTest())
    }, [])

    const addToTest = () => {
        // store.dispatch(addTest(100))
        // store.dispatch(joinRoom())
        store.dispatch(hello())
    }

    return (
        <div>
            <p>{store.getState().test}</p>
            <button onClick={addToTest} type='button'>
                Add State
            </button>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         test: state.test
//     }
// }

// const mapDispatchToProps = {
//     initTest,
//     addTest
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)

export default App
