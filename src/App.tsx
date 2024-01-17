import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
    const [ displayAlert, setDisplayAlert ] = useState(false);

    return (
        <div>
            {displayAlert && <Alert onClose={() => setDisplayAlert(false) }>My Alert</Alert>}
            <Button color='primary' onClick={() => setDisplayAlert(true)}>Hello World</Button>
        </div>
    );
}

export default App;
