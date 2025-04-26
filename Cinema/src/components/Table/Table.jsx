import './Table.scss'


const TableData = {
    theader: ['Features',],
    trows: [
        {1: ['Price','$9.99/Month', '$12.99/Month', '$14.99/Month']}
    ]

}
const Table = (props) => {
    const {
        className,
        headCells = [],
        rows = []
    } = props
    return (
       <table className={className}>
       {headCells.length > 0 && (
        <thead>
            <tr>
               {headCells.map(({children,width}, index) => (
                <th key={index} width={width}> {children}</th>
               ))}
            </tr>
        </thead>
       )}
        <tbody>
            {rows.map(({cells}, index) => (
                <tr key={index}>
                    {cells.map((cell, cellindex)=> (
                        <td key={cellindex}> 
                        {cell}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
       </table>
    )
}

export default Table