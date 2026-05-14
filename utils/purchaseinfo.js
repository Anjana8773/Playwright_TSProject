const XLSX=require('xlsx')
const path=require('path')


function loadWorkbook(){
   
        const workbook=XLSX.readFile('testdata/purchase_details.xlsx')
        const worksheet=workbook.Sheets['purchase_info'] 
        return worksheet
}

function getCellData(row,column){
 
    const worksheet=loadWorkbook()//load workbook and get worksheet
    const celladdress=XLSX.utils.encode_cell(
        {r:row-1,
        c:column-1
    })

    const cell=worksheet[celladdress]//retreive cell address eg:[1,1]
    return cell?cell.v:undefined // ternary operator ; if data exist return cell value as  cell.value variable  else return undefined
}

module.exports={getCellData}