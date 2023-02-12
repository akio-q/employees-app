import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees at company N</h1>
            <h2>Total number of employees: {props.numberOfEmployees}</h2>
            <h2>To receive a premium: {props.increased}</h2>
        </div>
    );
}

export default AppInfo;