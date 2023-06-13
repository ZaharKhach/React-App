import './app-info.css'

const AppInfo = ({employeesCount, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h3>Премию получат: {increaseCount} </h3>
        </div>
    )
}
export default AppInfo