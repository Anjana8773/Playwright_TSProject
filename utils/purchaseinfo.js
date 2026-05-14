const XLSX=require('xlsx')


function getCellData(row,column){

    const workbook=XLSX.readFile('testdata/purchase_details.xlsx')
    const worksheet=workbook.Sheets['purchase_info']

    const celladdress=XLSX.utils.encode_cell(
        {r:row-1,
        c:column-1
    })

    const cell=worksheet[celladdress]
    return cell?cell.v:undefined 
}

module.exports={getCellData}