import React, { useState , useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons"

function TableAdmin({ tableData , isEdit , deleteItem , show }) { 
  // const catalogies = useSelector(selectCatalogies);
  // const dispatch = useDispatch();
  //truyền vào data dữ liệu và object cấu trúc bảng 
  //trả lại id sản phẩm khi click , open modal vs edit = true  
  const handleClickEdit = (status,i) => {
      isEdit(status,i);     
  }   
  const data = tableData.data.data ;
  const key = Object.keys(data)
  // console.log(tableData.data.data);
  return (
    <>

      <Table striped bordered hover>
        <thead>
          <tr>
            {
              tableData.headding.map(i => {
                return (
                  <th key={i}>{i}</th>
                )
              })
            }
            <th>Công Cụ</th>
          </tr>
        </thead>
        <tbody>    
          {
            key.map( (i , index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data[i].title}</td>
                  <td>
                    <img src={data[i].avatar} width={"80px"} alt="" />
                  </td>
                  <td width={"150px"}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                      {show===true ? (
                        <FontAwesomeIcon icon={faEye} style={{ cursor: "pointer" }} />
                        
                      ): (<></>)}
                      <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} onClick={() => handleClickEdit(true,i)} />
                      <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={()=>deleteItem(i)}/>
                    </div>
                  </td>
                </tr>
              )
            })
          } 
        </tbody>
      </Table>    
     
    </>
  )
}

export default TableAdmin